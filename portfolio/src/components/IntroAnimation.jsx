import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MAX_POSSIBLE_FRAMES = 300;
const FPS = 50; // Increased from 30 to make the animation play faster

const IntroAnimation = ({ onComplete, onRevealStart }) => {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [phase, setPhase] = useState(0);
  const [showText, setShowText] = useState(false);
  const totalFramesRef = useRef(MAX_POSSIBLE_FRAMES);
  const textShownRef = useRef(false);

  useEffect(() => {
    let currentLoaded = 0;
    let hasError = false;
    const imgArray = [];
    let detectedTotal = MAX_POSSIBLE_FRAMES;

    const checkReady = () => {
      if (hasError && currentLoaded >= detectedTotal && detectedTotal > 0) {
        setImages([...imgArray].slice(0, detectedTotal));
        setIsPlaying(true);
      }
    };

    for (let i = 1; i <= MAX_POSSIBLE_FRAMES; i++) {
      const img = new Image();
      const frameNumber = i.toString().padStart(3, '0');
      img.src = `/images/ezgif-frame-${frameNumber}.jpg`;

      img.onload = () => {
        if (hasError && i > detectedTotal) return;
        currentLoaded++;
        setLoadedCount(currentLoaded);
        imgArray[i - 1] = img;
        checkReady();
      };

      img.onerror = () => {
        if (!hasError) {
          hasError = true;
          detectedTotal = i - 1;
          totalFramesRef.current = detectedTotal;
          checkReady();
        }
      };
    }

    const fallbackTimer = setTimeout(() => {
      if (!isPlaying && currentLoaded > 10) {
        totalFramesRef.current = currentLoaded;
        setImages([...imgArray].filter(Boolean));
        setIsPlaying(true);
      }
    }, 4000);

    return () => clearTimeout(fallbackTimer);
  }, [isPlaying]);

  useEffect(() => {
    if (!isPlaying || images.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let currentFrame = 0;
    let animationFrameId;
    let lastTime = 0;
    const interval = 1000 / FPS;

    const render = () => {
      const img = images[currentFrame];
      if (img && img.complete && img.naturalWidth !== 0) {
        const cw = canvas.width;
        const ch = canvas.height;
        const hRatio = cw / img.width;
        const vRatio = ch / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (cw - img.width * ratio) / 2;
        const centerShift_y = (ch - img.height * ratio) / 2;

        ctx.clearRect(0, 0, cw, ch);
        ctx.drawImage(img, 0, 0, img.width, img.height,
          centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
      }
      currentFrame++;
    };

    const drawLoop = (currentTime) => {
      // Trigger the text reveal near the end of the sequence
      if (currentFrame >= totalFramesRef.current - 40 && !textShownRef.current) {
        textShownRef.current = true;
        setShowText(true);
      }

      if (currentFrame >= totalFramesRef.current) {
        setTimeout(() => setPhase(1), 800); // Give 0.8s to read before fading out (down from 2.5s)
        return;
      }

      animationFrameId = requestAnimationFrame(drawLoop);

      if (!lastTime) lastTime = currentTime;
      const delta = currentTime - lastTime;

      if (delta > interval) {
        render();
        lastTime = currentTime - (delta % interval);
      }
    };

    animationFrameId = requestAnimationFrame(drawLoop);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPlaying, images]);

  useEffect(() => {
    if (phase === 1) {
      if (onRevealStart) onRevealStart();
      const timer = setTimeout(onComplete, 1500); // Wait for crossfade
      return () => clearTimeout(timer);
    }
  }, [phase, onComplete, onRevealStart]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const updateSize = () => {
      if (canvas) {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Generate subtle floating particles
  const particles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 5 + 5,
    delay: Math.random() * 3,
  }));

  return (
    <AnimatePresence>
      {phase === 0 && (
        <motion.div
          initial={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 1.15, filter: "blur(12px)" }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed inset-0 z-[100] bg-[#04070D] flex items-center justify-center overflow-hidden"
        >
          {/* Subtle Ambient Lighting Overlay */}
          <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-[#FFB6A3]/10 via-transparent to-transparent mix-blend-screen" />

          {/* Canvas for Sequence */}
          <canvas
            ref={canvasRef}
            className={`w-full h-full object-cover z-0 transition-opacity duration-1000 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
          />

          {/* Floating Particles */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            {particles.map((p) => (
              <motion.div
                key={p.id}
                className="absolute bg-[#FFB6A3] rounded-full opacity-30 shadow-[0_0_5px_#FFB6A3]"
                style={{
                  width: p.size,
                  height: p.size,
                  left: p.left,
                  top: "100%",
                }}
                animate={{
                  top: "-10%",
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  delay: p.delay,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          {/* Loading Indicator */}
          {!isPlaying && (
            <div className="absolute flex flex-col items-center justify-center z-20">
              <div className="w-12 h-12 border-4 border-[#FFB6A3]/30 border-t-[#FFB6A3] rounded-full animate-spin mb-4" />
              <p className="text-[#FFB6A3]/80 font-mono text-sm tracking-widest uppercase mt-4">
                Loading Sequence... {loadedCount}
              </p>
            </div>
          )}

          {/* Cinematic Text Overlay */}
          <AnimatePresence>
            {showText && (
              <motion.div
                initial={{ opacity: 0, x: -20, y: 15, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -10, filter: "blur(5px)" }}
                transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute left-[6%] md:left-[8%] top-[20%] md:top-[25%] z-20 pointer-events-none"
              >
                {/* Floating heart top-left */}
                <motion.span
                  className="absolute -top-6 -left-2 text-[#C9877B] text-xl opacity-80"
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >♡</motion.span>

                {/* Serif line: "Excited to" */}
                <div
                  className="leading-[1.05] tracking-tight"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "clamp(3rem, 8vw, 7rem)",
                    fontWeight: 500,
                    background: "linear-gradient(135deg, #C9877B 0%, #D89A8F 40%, #E8B4AA 70%, #c07b72 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "drop-shadow(0 2px 18px rgba(216, 154, 143, 0.35))",
                  }}
                >
                  Excited to
                </div>

                {/* Serif line: "know" — slightly larger */}
                <div
                  className="leading-[0.9] tracking-tight relative"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "clamp(4rem, 11vw, 9.5rem)",
                    fontWeight: 600,
                    background: "linear-gradient(135deg, #b8726a 0%, #e0988e 40%, #E8B4AA 65%, #c07b72 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "drop-shadow(0 2px 22px rgba(216, 154, 143, 0.4))",
                  }}
                >
                  know
                  {/* Small tick mark near "know" */}
                  <motion.span
                    className="absolute top-2 -right-6 text-[#C9877B] text-2xl opacity-70"
                    style={{ fontFamily: "sans-serif", fontStyle: "normal", WebkitTextFillColor: "#C9877B" }}
                    animate={{ rotate: [-5, 5, -5] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  >✓</motion.span>
                </div>

                {/* Script/Cursive: "about me?" */}
                <div className="relative mt-1 ml-4 md:ml-8">
                  <div
                    className="leading-none relative z-10"
                    style={{
                      fontFamily: "'Allura', cursive",
                      fontSize: "clamp(3.5rem, 9.5vw, 8.5rem)",
                      fontWeight: 400,
                      background: "linear-gradient(135deg, #C9877B 0%, #D89A8F 50%, #f3d0cc 80%, #c07b72 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      filter: "drop-shadow(0 2px 16px rgba(216, 154, 143, 0.45))",
                    }}
                  >
                    about me?
                  </div>

                  {/* Brushstroke underline SVG */}
                  <svg
                    viewBox="0 0 340 28"
                    className="w-full max-w-[360px] md:max-w-[480px] mt-[-6px] opacity-80"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      d="M4 18 Q60 8 120 16 Q180 24 240 14 Q290 6 338 18"
                      stroke="url(#brushGrad)"
                      strokeWidth="5"
                      strokeLinecap="round"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                    />
                    <defs>
                      <linearGradient id="brushGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#b87068" />
                        <stop offset="50%" stopColor="#e0988e" />
                        <stop offset="100%" stopColor="#C9877B" stopOpacity="0.4" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Sparkle near "about me?" */}
                  <motion.span
                    className="absolute -right-4 md:-right-8 top-2 text-[#d4917e] text-2xl md:text-3xl"
                    style={{ WebkitTextFillColor: "#d4917e" }}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >✦</motion.span>
                  <motion.span
                    className="absolute -right-10 md:-right-16 top-8 text-[#C9877B] text-sm"
                    style={{ WebkitTextFillColor: "#C9877B" }}
                    animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >✦</motion.span>
                </div>

                {/* Floating heart bottom-right */}
                <motion.span
                  className="absolute -bottom-4 right-8 text-[#C9877B] text-base opacity-70"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                >♡</motion.span>

                {/* Floating heart mid-right */}
                <motion.span
                  className="absolute top-12 right-0 text-[#C9877B] text-xs opacity-60"
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                >♡</motion.span>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
