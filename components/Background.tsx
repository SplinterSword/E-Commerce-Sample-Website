'use client'

import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [translateY1, setTranslateY1] = useState<number>(-197.4);
  const [translateY2, setTranslateY2] = useState<number>(-671.6);
  const [translateY3, setTranslateY3] = useState<number>(-843.45);
  const animationRef = useRef<number>(0);
  const lastTime = useRef<number>(0);
  
  // Animation settings
  const settings = {
    range: 50,
    speed: 0.001, // Adjust speed here (lower = slower)
    baseY1: -197.4,
    baseY2: -671.6,
    baseY3: -1512.45
  };

  const animate = (time: number) => {
    if (!lastTime.current) lastTime.current = time;
    lastTime.current = time;

    // Update positions with smooth easing
    setTranslateY1(prev => {
      const targetY = settings.baseY1 + Math.sin(time * settings.speed) * settings.range;
      return prev + (targetY - prev) * 0.001; // Easing factor (0.1 = smooth, lower = smoother)
    });

    setTranslateY2(prev => {
      const targetY = settings.baseY2 + Math.cos(time * settings.speed * 0.8) * settings.range; // Slightly different speed for variety
      return prev + (targetY - prev) * 0.001;
    });

    setTranslateY3(prev => {
      const targetY = settings.baseY3 + Math.sin(time * settings.speed * 0.5) * settings.range; // Slightly different speed for variety
      return prev + (targetY - prev) * 0.001;
    });

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    // Start animation
    animationRef.current = requestAnimationFrame(animate);
    
    // Cleanup on unmount
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      <img 
        src="https://cdn.prod.website-files.com/688caeb34c18f5ee54ee9589/689a1535c62e64da2175a295_home-hero-background-light.svg" 
        loading="lazy" 
        alt="" 
        className="w-full pointer-events-none absolute top-75 transition-transform duration-300 ease-in-out z-[-1]" 
        style={{ 
          opacity: 1, 
          transform: `translateY(${translateY1}px)`,
          willChange: 'transform',
          transition: 'transform 0.3s ease-out'
        }} 
      />
      <img 
        src="https://cdn.prod.website-files.com/688caeb34c18f5ee54ee9589/689a160dd53db0f023d00dec_video-background-light.svg" 
        loading="lazy" 
        alt="" 
        className="w-full pointer-events-none absolute top-250 transition-transform duration-300 ease-in-out z-[-1]" 
        style={{ 
          opacity: 1, 
          transform: `translateY(${translateY2}px)`,
          willChange: 'transform',
          transition: 'transform 0.3s ease-out'
        }} 
      />
      <img src="https://cdn.prod.website-files.com/688caeb34c18f5ee54ee9589/689a1e9dd531665487c6126d_large-background-light.svg" loading="lazy" alt="" className="w-full pointer-events-none absolute top-650 transition-transform duration-300 ease-in-out z-[-1]" style={{ 
        opacity: 1, 
        transform: `translateY(${translateY3}px)`,
        willChange: 'transform',
        transition: 'transform 0.3s ease-out'
      }}
      />
    </>
  );
}