
import { useState, useEffect } from 'react';

export const useMouseTracking = (containerRef) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [glowEffect, setGlowEffect] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setGlowEffect({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [containerRef]);

  return { mousePosition, glowEffect };
};