"use client";

import { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Page from './Page';
import Image from 'next/image';

interface MagazineProps {
  // Add props if needed
}

export default function Magazine({ }: MagazineProps) {
  const bookRef = useRef(null);

  // Data for pages
  // STRATEGY: Forced Spread.
  // Page 0: Transparent (Left)
  // Page 1: Cover (Right)
  // Page 2: Back Cover (Left)
  // Page 3: Content 1 (Right)
  // ...
  const pagesData = [
    { id: 'transparent', type: 'transparent', img: null }, // 0
    { id: 'cover', type: 'cover', img: null }, // 1
    { id: 'inside1', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop' }, // 2
    { id: 'inside2', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop' }, // 3
    { id: 'inside3', img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1000&auto=format&fit=crop' },
    { id: 'inside4', img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1000&auto=format&fit=crop' },
    { id: 'inside5', img: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1000&auto=format&fit=crop' },
    { id: 'inside6', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop' },
    { id: 'back', img: null },
  ];

  const PAGE_WIDTH = 260;
  const PAGE_HEIGHT = 380;

  return (
    <div className="flex justify-center items-center h-screen w-full bg-[#E5E0D8] overflow-hidden relative">
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center">
        {/* Background Title */}
        <h1 className="text-[20vw] font-serif text-[#Cdc5ba] select-none tracking-widest leading-none translate-y-4 opacity-50 blur-[1px]">
          ELLA
        </h1>
      </div>

      <div className="relative z-10 flex items-center justify-center filter drop-shadow-2xl">
        {/* @ts-expect-error - react-pageflip types workaround */}
        <HTMLFlipBook
          width={PAGE_WIDTH}
          height={PAGE_HEIGHT}
          size="fixed"
          minWidth={PAGE_WIDTH}
          maxWidth={PAGE_WIDTH}
          minHeight={PAGE_HEIGHT}
          maxHeight={PAGE_HEIGHT}
          showCover={false}
          mobileScrollSupport={true}
          maxShadowOpacity={0.5}
          className="shadow-none"
          ref={bookRef}
          flippingTime={1000}
          startPage={0}
          drawShadow={true}
          useMouseEvents={true}
          usePortrait={false}
        >
          {/* Page 0: TRANSPARENT (Left Placeholder) */}
          <Page number={0} type="transparent">
            {/* Empty */}
          </Page>

          {/* Page 1: Front Cover (Right) */}
          <Page number={1} className="bg-[#F9F6F0]">
            <div className="absolute left-0 top-0 w-3 h-full bg-gradient-to-r from-black/20 to-transparent z-20 pointer-events-none" />

            <div className="h-full w-full flex flex-col justify-between items-center text-center p-5 border border-black/5 relative z-10">
              <div className="text-[0.5rem] font-sans tracking-[0.4em] uppercase text-black/40 mt-4">Volume 01</div>

              <div className="flex flex-col items-center">
                <div className="text-[4rem] font-serif leading-none tracking-tighter text-black">ELLA</div>
                <div className="h-px w-8 bg-black/20 my-4"></div>
                <p className="text-[0.5rem] font-sans tracking-[0.2em] uppercase text-black/60 max-w-[120px] leading-relaxed">
                  Simplicity is the ultimate sophistication.
                </p>
              </div>

              <div className="text-[0.5rem] font-sans tracking-[0.2em] uppercase text-black/40 mb-4">
                Spring / Summer 2026
              </div>
            </div>
          </Page>

          {/* Page 2: Inside Left (Foto 2) */}
          <Page number={2}>
            <Image src={pagesData[2].img!} alt="Img" fill className="object-cover" priority />
            <div className="absolute bottom-6 left-6 text-white mix-blend-difference z-10">
              <p className="font-serif italic text-lg opacity-80">The Vision</p>
            </div>
          </Page>

          {/* Page 3: Inside Right (Foto 3) */}
          <Page number={3}>
            <Image src={pagesData[3].img!} alt="Img" fill className="object-cover" />
          </Page>

          {/* Page 4: Left (Foto 4) */}
          <Page number={4}>
            <Image src={pagesData[4].img!} alt="Img" fill className="object-cover" />
          </Page>

          {/* Page 5: Right (Foto 5) */}
          <Page number={5}>
            <Image src={pagesData[5].img!} alt="Img" fill className="object-cover" />
          </Page>

          {/* Page 6: Left (Foto 6) */}
          <Page number={6}>
            <Image src={pagesData[6].img!} alt="Img" fill className="object-cover" />
          </Page>

          {/* Page 7: Right (Foto 7) */}
          <Page number={7}>
            <Image src={pagesData[7].img!} alt="Img" fill className="object-cover" />
          </Page>

          {/* Page 8: Back Cover Content */}
          <Page number={8} className="bg-[#F9F6F0] flex items-center justify-center">
            <div className="text-center opacity-40">
              <div className="text-2xl font-serif italic mb-2">Fin.</div>
              <div className="text-[8px] font-sans tracking-widest uppercase">Ella Studio © 2026</div>
            </div>
          </Page>

          {/* Page 9: TRANSPARENT (Right Placeholder for Back Cover Spread) */}
          <Page number={9} type="transparent">
            {/* Empty */}
          </Page>
        </HTMLFlipBook>
      </div>
    </div>
  );
}
