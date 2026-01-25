# Changelog

All notable changes to the **MagELLA** project will be documented in this file.

## [1.0.0] - 2026-01-25
### Added
- **Magazine Component**: Core flipbook mechanics using `react-pageflip`.
- **Forced Spread Logic**: Implemented "Empty Page 0" strategy to ensure consistent double-page physics for all flips, including the cover.
- **Spine Shadows**: Realistic gradient overlays on inner book spines (opacity 40%) for depth perception.
- **GSAP Integration**: Added GreenSock Animation Platform for future advanced animations (Loaders/Transitions).
- **Project Structure**: Next.js 16 + Tailwind CSS 4 setup.

### Fixed
- **Cover Animation**: Resolved "stiff" single-page flip issue by enforcing landscape spread mode.
- **Back Cover**: Added transparent trailing page to ensure clean "Fin." flip animation.
- **Layout**: Locked book position to Right-Aligned (Offset) to mimic a closed book on a surface.

### Tech Stack
-   Next.js 16 (App Router)
-   Three.js / React Three Fiber (Planned)
-   GSAP (Installed)
-   Framer Motion
-   React PageFlip
-   Tailwind CSS
