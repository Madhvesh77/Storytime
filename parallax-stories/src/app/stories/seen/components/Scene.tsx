"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function Scene() {
  const mainRef = useRef<HTMLDivElement>(null);
  const womanRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const crowdRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLParagraphElement>(null);

  const farBuildingsRef = useRef<HTMLDivElement>(null);
  const midBuildingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Using more granular breakpoints for smoother responsive animation
      gsap.matchMedia().add({
        isSmall: `(max-width: 639px)`,
        isMedium: `(min-width: 640px) and (max-width: 1023px)`,
        isLarge: `(min-width: 1024px)`,
      }, (context) => {
        const { isSmall, isMedium, isLarge } = context.conditions || {};

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: mainRef.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: "+=4000", // Increased scroll distance
          },
        });

        // Opening Scene Animations
        tl.from(farBuildingsRef.current?.children || [], { y: "100%", opacity: 0, stagger: 0.05, duration: 1.5 }, 0)
          .from(midBuildingsRef.current?.children || [], { y: "100%", opacity: 0, stagger: 0.05, duration: 1 }, 0.2)
          .from(womanRef.current, { opacity: 0, y: 100, duration: 0.8 }, 0.5)
          .from([titleRef.current, subtitleRef.current], { opacity: 0, y: 30, stagger: 0.3 }, 1);

        // Scroll Transition Animations with responsive values
        tl.to([titleRef.current, subtitleRef.current], { opacity: 0 }, "+=1")
          .to(womanRef.current, { 
            xPercent: isSmall ? -100 : (isMedium ? -120 : -150), 
            ease: "power2.inOut" 
          }, "<")
          .from(crowdRef.current, { opacity: 0, xPercent: 20 }, "<0.5")
          .from(line1Ref.current, { opacity: 0, y: 50 }, "<0.5");
      });
        
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={mainRef}
      className="relative h-screen w-full overflow-hidden bg-white font-hand-black text-black"
    >
      {/* Layer 1: Farthest Buildings - Restored and added more */}
      <div ref={farBuildingsRef} className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-[2%] h-1/4 w-[10%] bg-black opacity-30"></div>
        <div className="absolute bottom-0 left-[5%] h-1/3 w-[15%] bg-black opacity-40"></div>
        <div className="absolute bottom-0 left-[25%] h-1/2 w-[10%] bg-black opacity-40"></div>
        <div className="absolute bottom-0 left-[38%] h-1/3 w-[4%] bg-black opacity-30"></div>
        <div className="absolute bottom-0 left-[45%] h-2/5 w-[12%] bg-black opacity-40"></div>
        <div className="absolute bottom-0 left-[60%] h-1/4 w-[20%] bg-black opacity-40"></div>
        <div className="absolute bottom-0 left-[85%] h-2/5 w-[10%] bg-black opacity-40"></div>
        <div className="absolute bottom-0 right-[2%] h-1/2 w-[10%] bg-black opacity-30"></div>
      </div>

      {/* Layer 2: Mid-ground Buildings - Restored and added more */}
      <div ref={midBuildingsRef} className="absolute inset-0 z-10">
        <div className="absolute bottom-0 left-0 h-2/5 w-[10%] bg-black opacity-70"></div>
        <div className="absolute bottom-0 left-[12%] h-1/3 w-[4%] bg-black opacity-60"></div>
        <div className="absolute bottom-0 left-[18%] h-1/4 w-[8%] bg-black opacity-70"></div>
        <div className="absolute bottom-0 left-[30%] h-2/5 w-[5%] bg-black opacity-70"></div>
        <div className="absolute bottom-0 left-[40%] h-1/2 w-[3%] bg-black opacity-60 rounded-t-full"></div>
        <div className="absolute bottom-0 right-[35%] h-1/3 w-[15%] bg-black opacity-60"></div>
        <div className="absolute bottom-0 right-0 h-1/2 w-[18%] bg-black opacity-70"></div>
        <div className="absolute bottom-0 right-[20%] h-1/3 w-[10%] bg-black opacity-70"></div>
      </div>

      {/* Foreground: Woman Silhouette */}
      <div
        ref={womanRef}
        // FIX 4: Added sm and lg breakpoints for better alignment on all devices
        className="absolute bottom-0 left-1/2 -translate-x-1/2 sm:left-[45%] sm:-translate-x-1/2 lg:left-1/3 lg:translate-x-0 z-20 h-3/5 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6"
      >
        
      </div>

      {/* Text Elements */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center p-4">
        {/* Responsive font sizes */}
        <h1 ref={titleRef} className="text-6xl sm:text-7xl lg:text-9xl">
          Seen
        </h1>
        <p ref={subtitleRef} className="text-lg sm:text-xl lg:text-2xl mt-4">
          A story about being invisible, until you're not.
        </p>
      </div>

      {/* Crowd */}
      <div
        ref={crowdRef}
        className="absolute bottom-0 right-0 h-1/2 w-3/5 opacity-0 z-20"
      >
        <Image
          src="/assets/seen/crowd.svg"
          alt="Crowd silhouette"
          layout="fill"
          objectFit="contain"
          className="object-bottom"
        />
      </div>
      
      {/* New Text Line */}
      <p
        ref={line1Ref}
        // FIX 3: Changed text to black for contrast against the white background.
        className="absolute top-1/2 right-1/2 translate-x-1/2 lg:right-1/4 lg:translate-x-0 text-center lg:text-left text-2xl sm:text-3xl lg:text-4xl w-11/12 sm:w-3/5 md:w-1/2 lg:w-1/3 opacity-0 z-30 text-black"
      >
        I live in a city where even your reflection avoids eye contact.
      </p>
    </div>
  );
}