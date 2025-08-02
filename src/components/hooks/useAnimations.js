import { useState, useEffect } from 'react';

export const useAnimations = () => {
  const [animationStage, setAnimationStage] = useState(0);
  const [heroAnimation, setHeroAnimation] = useState(0);
  const [statsAnimation, setStatsAnimation] = useState(false);

  // Animation cycle for flow diagrams
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStage(prev => (prev + 1) % 8); // 8 steps in onramp flow
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Hero animation cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroAnimation(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return { animationStage, heroAnimation, statsAnimation, setStatsAnimation };
};
