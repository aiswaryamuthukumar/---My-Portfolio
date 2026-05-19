import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MAX_POSSIBLE_FRAMES = 300;
const FPS = 30; 

const IntroAnimation = ({ onComplete }) => {
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
      // Trigger the text reveal near the end of the sequence (approx last 1.5 seconds / 45 frames)
      if (currentFrame >= totalFramesRef.current - 45 && !textShownRef.current) {
        textShownRef.current = true;
        setShowText(true);
      }

      if (currentFrame >= totalFramesRef.current) {
        setTimeout(() => setPhase(1), 2500); // Give 2.5s to read before fading out
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
      const timer = setTimeout(onComplete, 1200);
      return () => clearTimeout(timer);
    }
  }, [phase, onComplete]);

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
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#050B14] flex items-center justify-center overflow-hidden"
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
                initial={{ opacity: 0, x: -40, filter: "blur(8px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute left-[8%] md:left-[12%] top-[40%] md:top-[45%] z-20 max-w-xs md:max-w-md pointer-events-none"
              >
                <h2 
                  className="text-4xl md:text-5xl lg:text-6xl text-[#FFB6A3] drop-shadow-[0_0_20px_rgba(255,182,163,0.3)] leading-snug italic" 
                  style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', 'Georgia', serif", fontWeight: 400, letterSpacing: "0.05em" }}
                >
                  Excited to know about me? ✨
                </h2>
              </motion.div>
            )}
          </AnimatePresence>
          
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
