import Link from 'next/link';

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center pointer-events-none mix-blend-difference text-white">
      {/* Logo / Studio Name */}
      <div className="text-sm font-sans tracking-[0.25em] uppercase pointer-events-auto">
        ELLA Studio
      </div>

      {/* Navigation (Visual Only for now) */}
      <div className="hidden md:flex gap-8 text-xs font-sans tracking-widest uppercase pointer-events-auto">
        <Link href="#" className="hover:opacity-50 transition-opacity">Index</Link>
        <Link href="#" className="hover:opacity-50 transition-opacity">Archive</Link>
        <Link href="#" className="hover:opacity-50 transition-opacity">Contact</Link>
      </div>
    </nav>
  );
}
