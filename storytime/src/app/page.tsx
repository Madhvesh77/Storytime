'use client'
import ZoomParallax from '../components/ZoomParallax/index';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'
import opening from "../../public/Opening.png"
import { useScroll, useTransform, motion, animate } from 'framer-motion';
import Image from 'next/image';
import './globals.css';

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

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const newDivOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  const plotDivOpacity= useTransform(scrollYProgress, [0.9, 1], [1, 0.0001]);

  return (
    <main className=" mb-[100vh]">
      <div ref={container} className="flex justify-center font-semibold text-9xl h-[200vh]">
        <div className="sticky top-0 h-[100vh] bg-black overflow-hidden">
          <motion.div style={{ scale }} className="relative h-[100vh]">
            <motion.div style={{ opacity }}>
              <Image
                src={opening}
                alt="opening-image"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.div className="absolute inset-0 flex justify-center items-center" style={{ opacity }}>
              <h1 className="text-white font-edu-hand">Title Card</h1>
            </motion.div>
            <motion.div className="sticky inset-0 flex justify-center items-center flex-col h-[100vh]" style={{ opacity: newDivOpacity }}>
              <motion.div style={{opacity: plotDivOpacity}}>
                <h1 className="text-white font-edu-hand text-3xl">The Plot</h1>
                <p className="font-edu-hand text-sm p-4 max-w-md text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quasi rem sed commodi cumque accusamus molestiae, sequi ullam accusantium modi, facere tenetur fuga eos cum nisi maiores, ad saepe aspernatur! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, aliquam. Libero excepturi eaque, eius velit est repellendus fugiat dolores voluptatem quia, adipisci, officiis ad cupiditate blanditiis nostrum aut delectus illum?</p>
                </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* <ZoomParallax /> */}
    </main>
  )
}