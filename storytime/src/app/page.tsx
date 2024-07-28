'use client'
import ZoomParallax from '../components/ZoomParallax/index';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'
import opening from "../../public/Opening.png"
import { useScroll, useTransform, motion, animate } from 'framer-motion';
import Image from 'next/image';

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  const container = useRef(null);
  // const { scrollYProgress } = useScroll();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const newDivOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  return (
    <main className=" mb-[100vh]">
      <div ref={container} className="flex justify-center font-semibold text-9xl h-[200vh]">
        <div className="sticky top-0 h-[100vh] bg-black overflow-hidden">
          {/* <div className=" absolute top-0"> */}
          <motion.div style={{ scale }} className="relative h-[100vh]">
            <motion.div style={{ opacity }}>
            <Image
              src={opening}
              alt="opening-image"
              className="h-full w-full object-cover"
            />
            </motion.div>
            <motion.div className="absolute inset-0 flex justify-center items-center" style={{ opacity }}>
              <h1 className="text-white">Hello</h1>
            </motion.div>
            <motion.div className="absolute inset-0 flex justify-center items-center" style={{ opacity: newDivOpacity }}>
              <h1 className="text-white">Welcome</h1>
            </motion.div>
          </motion.div>
          {/* </div> */}
        </div>
      </div>
      {/* <ZoomParallax /> */}
    </main>
  )
}