"use client"; // This must be a client component for animations

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { StoryButton } from "./components/StoryButton";
import { NavBar } from "./components/NavBar";

// We'll create this component in Step 4

export default function LandingPage() {
  const containerRef = useRef(null);

  // This effect runs once when the component mounts
  useEffect(() => {
    gsap.from(containerRef.current, {
      duration: 1,
      opacity: 0,
      y: 20, // Move up slightly on fade-in
      ease: "power3.out",
      delay: 0.2,
    });
  }, []);

  return (
    <>
      <NavBar />

      <div ref={containerRef}>
        {/* Use the new component from Step 4 */}
        <StoryButton title="Story 1" href="/story-one" />
        {/* Example of a second story button */}
        {/* <StoryButton title="Story 2" href="/story-two" /> */}
      </div>
    </>
    // Add the ref to the main container you want to animate
  );
}
