"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function LoaderArchitect({ onComplete }: { onComplete?: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<{ val: number }>({ val: 0 });
  const counterDomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        }
      });

      // === PROFESSIONAL ARCHITECT SEQUENCE ===

      // 0. Initial State: Isometric 3D Tilt which slowly flattens
      tl.set(containerRef.current, { perspective: 2000 });
      tl.set(gridRef.current, { rotateX: 60, rotateZ: 45, scale: 1.5, opacity: 0 });

      // 1. Grid Reveal (3D Entry)
      tl.to(gridRef.current, {
        opacity: 1,
        rotateX: 0,
        rotateZ: 0,
        scale: 1,
        duration: 3,
        ease: "power3.inOut"
      });

      // 2. Lines Drawing (Simultaneous with rotation)
      tl.to(".arch-line", { scale: 1, duration: 2, stagger: 0.1, ease: "expo.out" }, "<0.5");

      // 3. Dynamic Measurement Counter
      tl.to(counterRef.current, {
        val: 100,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => {
          if (counterDomRef.current) {
            counterDomRef.current.innerText = `LOADING: ${counterRef.current.val.toFixed(0)}%`;
          }
        }
      }, "<");

      // 4. Intersection Pulse (Nodes)
      tl.fromTo(".arch-node",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(2)" },
        "-=1.5"
      );

      // 5. Logo Reveal (clean)
      tl.fromTo(".main-logo",
        { y: 50, opacity: 0, clipPath: "inset(0 0 100% 0)" },
        { y: 0, opacity: 1, clipPath: "inset(0 0 0% 0)", duration: 1.2, ease: "power3.out" },
        "-=1"
      );

      // 6. Final Polish layout
      tl.to(".meta-text", { opacity: 1, duration: 1 }, "-=1");

      // 7. EXIT: Slide Up (Curtain)
      tl.to(containerRef.current, {
        yPercent: -100,
        duration: 1.2,
        ease: "power4.inOut",
        delay: 0.5
      });

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-50 bg-[#F9F6F0] flex items-center justify-center overflow-hidden">

      {/* 3D Container for Grid */}
      <div ref={gridRef} className="absolute inset-0 flex items-center justify-center origin-center will-change-transform">

        {/* Horizontal Lines */}
        <div className="arch-line absolute left-0 right-0 top-1/2 h-[1px] bg-black/10 scale-x-0 origin-center" />
        <div className="arch-line absolute left-0 right-0 top-[30%] h-[1px] bg-black/5 scale-x-0 origin-center" />
        <div className="arch-line absolute left-0 right-0 bottom-[30%] h-[1px] bg-black/5 scale-x-0 origin-center" />

        {/* Vertical Lines */}
        <div className="arch-line absolute top-0 bottom-0 left-1/2 w-[1px] bg-black/10 scale-y-0 origin-center" />
        <div className="arch-line absolute top-0 bottom-0 left-[30%] w-[1px] bg-black/5 scale-y-0 origin-center" />
        <div className="arch-line absolute top-0 bottom-0 right-[30%] w-[1px] bg-black/5 scale-y-0 origin-center" />

        {/* Circles */}
        <div className="arch-line absolute w-[60vw] h-[60vw] md:w-[400px] md:h-[400px] border border-black/10 rounded-full scale-0" />
        <div className="arch-line absolute w-[90vw] h-[90vw] md:w-[600px] md:h-[600px] border border-black/5 rounded-full border-dashed scale-0" />

        {/* Intersection Nodes (Pulse Points at Golden Ratio) */}
        <div className="arch-node absolute top-[30%] left-[30%] w-2 h-2 bg-black rounded-full shadow-[0_0_10px_black]" />
        <div className="arch-node absolute top-[30%] right-[30%] w-2 h-2 bg-black rounded-full shadow-[0_0_10px_black]" />
        <div className="arch-node absolute bottom-[30%] left-[30%] w-2 h-2 bg-black rounded-full shadow-[0_0_10px_black]" />
        <div className="arch-node absolute bottom-[30%] right-[30%] w-2 h-2 bg-black rounded-full shadow-[0_0_10px_black]" />

        {/* Background Data */}
        <div className="absolute top-[31%] left-[31%] text-[0.4rem] font-mono text-black/40">NODE.01</div>
        <div className="absolute top-[31%] right-[31%] text-[0.4rem] font-mono text-black/40 text-right">NODE.02</div>

      </div>

      {/* Foreground Content (Logo & Counter) */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="main-logo text-[15vw] md:text-9xl font-serif tracking-widest text-black mb-4">ELLA</h1>

        <div className="flex items-center gap-6">
          <div ref={counterDomRef} className="text-sm font-mono tracking-widest text-black/80">
            LOADING: 0%
          </div>
        </div>

        <div className="meta-text opacity-0 absolute bottom-10 left-0 right-0 text-center">
          <p className="text-[0.5rem] font-sans tracking-[0.5em] text-black/30 uppercase">
            Architectural Studio v1.0
          </p>
        </div>
      </div>
    </div>
  );
}
