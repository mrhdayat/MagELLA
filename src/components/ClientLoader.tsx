"use client";

import { useState } from "react";
import LoaderFluid from "./loaders/LoaderFluid";

export default function ClientLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  const handleComplete = () => {
    setTimeout(() => setLoading(false), 800); // Slight buffer for smoothness
  };

  return (
    <>
      {loading && <LoaderFluid onComplete={handleComplete} />}

      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </div>
    </>
  );
}
