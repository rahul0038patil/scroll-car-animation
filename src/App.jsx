import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const statsRef = useRef(null);
  const trackRef = useRef(null);
  const carRef = useRef(null);
  const trailRef = useRef(null);

  const [scrollProgress, setScrollProgress] = useState(0);

  const stats = [
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '5.0x', label: 'Speed Multiplier' },
    { value: '250k+', label: 'Active Users' },
    { value: '99.9%', label: 'System Uptime' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out' }
      );

      if (trackRef.current && carRef.current && trailRef.current && containerRef.current) {
        const carEl = carRef.current;
        const trailEl = trailRef.current;
        const trackEl = trackRef.current;

        const tlScroll = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=1800',
            pin: true,
            scrub: 0.5,
            onUpdate: (self) => {
              setScrollProgress(Math.round(self.progress * 100));
            }
          }
        });

        tlScroll.fromTo(
          carEl,
          { x: 0 },
          { x: () => trackEl.offsetWidth - (carEl.offsetWidth / 2), duration: 1, ease: 'none' },
          0
        );

        tlScroll.fromTo(
          trailEl,
          { width: '0%' },
          { width: '100%', duration: 1, ease: 'none' },
          0
        );

        if (statsRef.current) {
          const cards = statsRef.current.children;
          const milestonePositions = [0.10, 0.35, 0.60, 0.85];
          Array.from(cards).forEach((card, idx) => {
            tlScroll.fromTo(
              card,
              { opacity: 0, y: 25, scale: 0.95 },
              { opacity: 1, y: 0, scale: 1, duration: 0.12, ease: 'power1.out' },
              milestonePositions[idx] || 0
            );
          });
        }
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen w-full bg-[#121212] text-white flex flex-col justify-between py-6 px-0 box-border select-none overflow-x-hidden"
    >
      <div className="flex flex-col items-center text-center mt-2 px-6 max-w-5xl mx-auto w-full">
        <h1 
          ref={headlineRef}
          className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-[0.15em] sm:tracking-[0.25em] font-sans uppercase text-white my-6 opacity-0 whitespace-nowrap"
        >
          W E L C O M E &nbsp; I T Z F I Z Z
        </h1>

        <div 
          ref={statsRef}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-4xl my-4"
        >
          {stats.map((item, index) => (
            <div key={index} className="stat-box text-center opacity-0 p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-3xl font-extrabold text-[#60a5fa]">
                {item.value}
              </div>
              <div className="text-xs text-gray-300 font-medium mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="my-auto py-4 w-full relative">
        <div className="flex items-center justify-between text-xs text-gray-400 mb-2 px-8 font-mono max-w-5xl mx-auto">
          <span>SCROLL PROGRESS</span>
          <span className="text-[#60a5fa] font-bold">{scrollProgress}%</span>
        </div>

        <div ref={trackRef} className="track-wrapper flex items-center">
          <div ref={trailRef} className="trail-fill" />

          <div ref={carRef} className="car-top-down flex items-center justify-center">
            <img 
              src="/top-down-car.png" 
              alt="Top Down Car" 
              className="h-full w-auto object-contain py-1"
            />
          </div>
        </div>
      </div>

      <div className="text-center pb-2 text-xs text-gray-500 font-mono px-6">
        {scrollProgress >= 100 ? '🏁 FINISH LINE REACHED' : '↓ SCROLL TO DRIVE CAR & UNLOCK METRICS'}
      </div>
    </div>
  );
}
