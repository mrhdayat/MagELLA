# Changelog

All notable changes to the **MagELLA** project will be documented in this file.

## [1.1.0] - 2026-02-08

### Added
- **Mobile Responsiveness**: Complete support for Magazine flipbook on all devices.
- **Mobile Spread View**: Implemented "Scaled Spread" logic to maintain double-page layout on mobile screens.
- **Dynamic Viewport Height**: Added `dvh` units to fix layout issues with mobile browser address bars.
- **New Loaders**: 
    - `LoaderFluid`: "Super Ultimate Fluid" with multi-drop physics and negative space text.
    - `LoaderArchitect`: "Ultimate Architect" with responsive grid system.

### Changed
- **ClientLoader**: Removed developer switcher UI. Locked to "Fluid" loader for production.
- **Cleanup**: Removed unused loader components (Focus, Eclipse, Scramble, Signature, Scanner).
- **Refactor**: Optimized `Magazine.tsx` rendering logic to prevent runtime errors with conditional children.

### Fixed
- **Runtime Error**: Fixed `HTMLFlipBook` crashing when receiving `null` children.
- **Build Error**: Restored `"use client"` directive in `ClientLoader.tsx`.
## [1.0.0] - 2026-01-25
### Added
- **Magazine Component**: Core flipbook mechanics using `react-pageflip`.
- **Forced Spread Logic**: Implemented "Empty Page 0" strategy to ensure consistent double-page physics for all flips, including the cover.
- **Spine Shadows**: Realistic gradient overlays on inner book spines (opacity 40%) for depth perception.
- **GSAP Integration**: Added GreenSock Animation Platform for future advanced animations (Loaders/Transitions).
- **Project Structure**: Next.js 16 + Tailwind CSS 4 setup.

- **Ultimate Professional Loader**: Finalized "The Architect" loader with:
    -   **3D Isometric Tilt**: Perspective grid animation.
    -   **Dynamic Measurements**: Real-time counter logic.
    -   **Pulse Nodes**: Glowing intersection points.
    -   **Smooth Reveal**: "Curtain Up" transition revealing pre-rendered content.

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
