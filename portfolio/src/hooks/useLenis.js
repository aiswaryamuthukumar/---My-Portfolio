import { useEffect } from "react";

export default function useLenis(containerRef) {
  useEffect(() => {
    let lenis;

    async function initLenis() {
      const { default: Lenis } = await import("@studio-freight/lenis");

      lenis = new Lenis({
        wrapper: containerRef?.current || window,
        content: containerRef?.current || document.documentElement,
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    initLenis();

    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);
}
