'use client'
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'
import opening from "../../../public/Opening.png"
import { useScroll, useTransform, motion, animate } from 'framer-motion';
import Image from 'next/image';
export default function TitleCardAndPlot() {

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
    
      const bgImageZoom = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
      const bgImageOpacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]);
      const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
      const plotDivAppearOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    //   const plotDivDisappearOpacity= useTransform(scrollYProgress, [0.5, 1], [1, 0]);

    return (
        <div ref={container} className="flex justify-center font-semibold text-9xl h-[200vh] -mb-0">
        <div className="sticky top-0 h-[100vh] bg-black overflow-hidden">
          <motion.div style={{ scale: bgImageZoom }} className="relative h-[100vh]">
            <motion.div style={{ opacity: bgImageOpacity }}>
              <Image
                src={opening}
                alt="opening-image"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.div className="absolute inset-0 flex justify-center items-center" style={{ opacity: titleOpacity }}>
              <h1 className="text-white font-edu-hand">Title Card</h1>
            </motion.div>
            <motion.div className="sticky inset-0 flex justify-center items-center flex-col h-[100vh]" style={{ opacity: plotDivAppearOpacity }}>
              {/* <motion.div style={{opacity: plotDivDisappearOpacity}}> */}
                <h1 className="text-white font-edu-hand text-3xl">The Plot</h1>
                <p className="font-edu-hand text-sm p-4 max-w-md text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quasi rem sed commodi cumque accusamus molestiae, sequi ullam accusantium modi, facere tenetur fuga eos cum nisi maiores, ad saepe aspernatur! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, aliquam. Libero excepturi eaque, eius velit est repellendus fugiat dolores voluptatem quia, adipisci, officiis ad cupiditate blanditiis nostrum aut delectus illum?</p>
                {/* </motion.div> */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    )
}