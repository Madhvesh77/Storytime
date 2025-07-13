"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function FirstScene() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(textRef.current, {
      duration: 1.5,
      opacity: 0,
      y: 50,
      ease: "power3.out",
      delay: 0.2,
    });
  }, []);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-300 text-black font-hand-black px-4">
      <div
        ref={textRef}
        className="flex flex-col items-center justify-center text-center gap-4"
      >
        {/* Row 1: Image + Title */}
        <div className="flex flex-row items-end justify-center gap-2">
          {/* Image */}
          <div className="w-auto h-[5rem] sm:h-[8rem] md:h-[10rem] flex items-end">
            <Image
              src="/assets/seen/woman.png"
              alt="Woman silhouette"
              width={80}
              height={160}
              className="object-contain object-bottom w-auto h-full"
            />
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-8xl font-bold leading-none">Seen</h1>
        </div>

        {/* Row 2: Subtitle */}
        <p className="text-md sm:text-2xl max-w-[90vw] sm:max-w-none">
          A story about being invisible, until you're not.
        </p>
      </div>
    </div>
  );
}
