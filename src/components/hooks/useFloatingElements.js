import { useState, useEffect } from 'react';

export const useFloatingElements = () => {
  const [floatingElements, setFloatingElements] = useState([]);

  useEffect(() => {
    const elements = [];
    for (let i = 0; i < 15; i++) {
      elements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        speed: Math.random() * 2 + 1,
        direction: Math.random() * 360,
        color: Math.random() > 0.5 ? '#00ff88' : '#ffffff'
      });
    }
    setFloatingElements(elements);
  }, []);

  return { floatingElements };
};