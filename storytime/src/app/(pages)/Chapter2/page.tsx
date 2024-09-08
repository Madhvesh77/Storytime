'use client'
import { useScroll, useTransform, motion } from 'framer-motion';
import Head from 'next/head';
import { useRef } from 'react';
import girl from "../../../../public/Chapter1/Scene4/GirlBlur.png";
import Image from "next/image";
export default function Chapter2() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({target: containerRef} );
    const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 0.5, 0]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 2, 0]);
    const finalTextOpacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);
    // const upperLidY = useTransform(scrollYProgress, [0, 0.2], [0, 0]);
    // const lowerLidY = useTransform(scrollYProgress, [0, 0.2], [0, 20]);
    const helloOpacity = useTransform(scrollYProgress, [0.15, 0.2], [0, 1]);
    const clipPath = useTransform(
        scrollYProgress,
        [0, 0.2, 1],
        [
          'inset(50% 0 50% 0)', // Fully closed (lids are touching in the middle)
          'inset(20% 0 20% 0)', // Fully open (content is fully revealed)
          'inset(40% 0 40% 0)'
        ]
      );

  // Animating scaleY to open the eye as you scroll
  const scaleY = useTransform(scrollYProgress, [0, 1], [0.05, 1]);

  return (
    <>
        <h1>Hello</h1>
    </>
  );
}
