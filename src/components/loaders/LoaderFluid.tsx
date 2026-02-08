"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function LoaderFluid({ onComplete }: { onComplete?: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const displacementRef = useRef<SVGFEDisplacementMapElement>(null);
  const turbulenceRef = useRef<SVGFETurbulenceElement>(null);
  const circlesRef = useRef<(SVGCircleElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        }
      });

      // === SUPER ULTIMATE FLUID INK ===
      // Multiple drops, organic spread, negative space text

      // Init
      tl.set(containerRef.current, { backgroundColor: "#F9F6F0" }); // Bone white paper
      tl.set(".ink-drop", { attr: { r: 0 } });
      tl.set(".text-reveal", { opacity: 0, scale: 0.8, transformOrigin: "center center" });

      // 1. INK DROPS (Sequence of 3 drops merging)
      // Drop 1 (Center)
      tl.to(circlesRef.current[0], {
        attr: { r: 150 },
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
      });

      // Drop 2 & 3 (Side splashes)
      tl.to([circlesRef.current[1], circlesRef.current[2]], {
        attr: { r: 100 },
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        stagger: 0.1
      }, "-=0.8");

      // 2. FILL SCREEN (The Merge)
      tl.to(".ink-drop", {
        attr: { r: 1500 }, // Massive expansion
        duration: 2.5,
        ease: "power2.inOut",
        stagger: 0.1
      }, "-=0.5");

      // Animate Turbulence (Boiling effect)
      if (turbulenceRef.current) {
        gsap.to(turbulenceRef.current, {
          attr: { baseFrequency: 0.01 }, // Smooth out as it spreads
          duration: 3,
          ease: "power2.out"
        });
      }

      // 3. TEXT REVEAL (Negative Space)
      // Creates a hole in the ink
      tl.to(".text-reveal", {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out"
      }, "-=1.5");

      // 4. TRANSITION (Ink Dissolves / Text Zooms)
      tl.to(".text-reveal", {
        attr: { letterSpacing: "0.5em" }, // Text expands
        opacity: 0,
        duration: 1,
        ease: "power2.in"
      });

      tl.to("svg", {
        opacity: 0,
        scale: 1.1,
        duration: 0.8,
        ease: "power2.inOut"
      }, "<0.2");

      tl.to(containerRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          if (containerRef.current) containerRef.current.style.display = 'none';
        }
      }, "-=0.2");

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#F9F6F0]">

      <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="ink-filter" x="-50%" y="-50%" width="200%" height="200%">
            {/* Dynamic Turbulence */}
            <feTurbulence ref={turbulenceRef} type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="80" />

            {/* Gooey Effect (Blur + Contrast) */}
            <feGaussianBlur stdDeviation="15" result="blur" />
            <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -10" result="goo" />

            {/* Composite to make it crisp */}
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>

          <mask id="text-mask">
            <rect width="100%" height="100%" fill="white" />
            <text
              className="text-reveal"
              x="50%" y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="18vw"
              fontFamily='"Inter", sans-serif'
              fontWeight="900"
              letterSpacing="-0.05em"
              fill="black"
            >
              STUDIO
            </text>
          </mask>
        </defs>

        {/* INK DROPS GROUP */}
        {/* Applied mask to the entire group so text cuts through ALL ink */}
        <g filter="url(#ink-filter)" mask="url(#text-mask)">
          <circle
            ref={el => { circlesRef.current[0] = el; }}
            className="ink-drop"
            cx="50%" cy="50%" r="0"
            fill="black"
          />
          <circle
            ref={el => { circlesRef.current[1] = el; }}
            className="ink-drop"
            cx="40%" cy="45%" r="0"
            fill="black"
          />
          <circle
            ref={el => { circlesRef.current[2] = el; }}
            className="ink-drop"
            cx="60%" cy="55%" r="0"
            fill="black"
          />
        </g>
      </svg>

    </div>
  );
}
