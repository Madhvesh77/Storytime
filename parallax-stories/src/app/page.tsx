'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Home() {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <main className="flex items-center justify-center h-screen bg-black">
      <h1 ref={textRef} className="text-white text-4xl font-bold">
        Hello Madhvesh
      </h1>
    </main>
  );
}
