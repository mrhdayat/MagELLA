# MagELLA - Digital Magazine Experience

![Project Status](https://img.shields.io/badge/Status-Active-success)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)

**MagELLA** is a premium, interactive digital magazine component built for the web. It replicates the tactile feel of reading a physical art book with realistic physics, lighting shadows, and fluid animations.

## 🌟 Concept
The goal is to create a "Museum/Studio" aesthetic—minimalist, bone-white backgrounds, sharp serif typography—where the content (the book) takes center stage.

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | Core React Framework (App Router). |
| **Tailwind CSS 4** | Utility-first styling engine. |
| **React PageFlip** | The physics engine behind the realistic page-turning effect. |
| **Framer Motion** | Used for layout transitions and UI micro-interactions. |
| **GSAP** (New) | High-performance animation library for cinematic sequences (Openers/Loaders). |
| **Lucide React** | Iconography. |

## 🚀 Key Features

### 1. Realistic Physics "Forced Spread"
Unlike standard flipbooks that switch awkwardly between Single and Double page modes, MagELLA uses a custom **Forced Spread Architecture**.
-   **Page 0 is Transparent**: The book technically starts "open", but the left side is invisible.
-   **Right-Aligned Cover**: This creates the illusion of a closed book lying on the right side of the desk.
-   **Result**: Every flip (Cost -> Page 1, Page 2 -> Page 3) uses the exact same double-page physics, eliminating Jitter/Stiffness.

### 2. Spine Shadow System
To solve the "flat" look of 2D web elements, we implemented a dynamic shadow system.
-   **Inner Spines**: Each page has a gradient overlay (`black/40` to `transparent`) on the binding edge.
-   **Depth**: This visual cue tells the brain "this object has volume".

## 📂 Project Structure

```bash
src/
├── app/
│   ├── globals.css    # Global styles & Tailwind
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Entry point
├── components/
│   ├── Header.tsx     # "ELLA STUDIO" Minimalist Header
│   ├── Magazine.tsx   # Core Flipbook Logic & Array Config
│   └── Page.tsx       # Reusable Page Component (Shadows logic inside)
```

## 📦 Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/mrhdayat/MagELLA.git
    cd MagELLA
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser.

## 📜 License
Private / Proprietary.
