import { forwardRef, ReactNode } from 'react';

interface PageProps {
  children?: ReactNode;
  number?: number;
  className?: string;
  type?: 'cover' | 'page' | 'transparent';
}

const Page = forwardRef<HTMLDivElement, PageProps>(({ children, number, className = "", type = 'page' }, ref) => {
  // Determine shadow direction based on page number (odd vs even)

  // Custom "Transparent" type for the ghost page 0
  if (type === 'transparent') {
    return (
      <div className="page h-full w-full bg-transparent select-none relative" ref={ref}>
        {/* No shadows, no background */}
      </div>
    );
  }

  // Normal Page Logic
  const isRightPage = number ? number % 2 !== 0 : false;

  return (
    <div className={`page h-full w-full bg-white shadow-sm overflow-hidden relative select-none ${className}`} ref={ref}>
      {/* Content */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>

      {/* Spine Shadow / Fold Gradient */}
      {/* If it's a right page (odd), shadow is on the LEFT edge */}
      {isRightPage && (
        <div className="absolute top-0 left-0 w-[40px] h-full bg-gradient-to-r from-black/40 via-black/10 to-transparent z-40 pointer-events-none mix-blend-multiply" />
      )}

      {/* If it's a left page (even), shadow is on the RIGHT edge */}
      {!isRightPage && (
        <div className="absolute top-0 right-0 w-[40px] h-full bg-gradient-to-l from-black/40 via-black/10 to-transparent z-40 pointer-events-none mix-blend-multiply" />
      )}

      {/* Subtle noise texture for paper realism (optional) */}
      <div className="absolute inset-0 bg-black/[0.02] z-30 pointer-events-none mix-blend-multiply" />
    </div>
  );
});

Page.displayName = 'Page';

export default Page;
