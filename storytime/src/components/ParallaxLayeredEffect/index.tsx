import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const ParallaxLayeredEffect = ({ background1, background2, background3, title, content }: { background1: any, background2: any, background3: any, title: string, content: string }) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Transform the backgrounds to move at different speeds for a parallax effect
  const bgLayer1Translate = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const bgLayer2Translate = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const bgLayer3Translate = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-[100vh] overflow-hidden">
        {/* Background layers */}
        <motion.div style={{ translateY: bgLayer1Translate }} className="absolute inset-0 z-0">
          <Image
            src={background1}
            alt="background-1"
            className="h-full w-full object-cover"
          />
        </motion.div>
        <motion.div style={{ translateY: bgLayer2Translate }} className="absolute inset-0 z-10">
          <Image
            src={background2}
            alt="background-2"
            className="h-full w-full object-cover"
          />
        </motion.div>
        <motion.div style={{ translateY: bgLayer3Translate }} className="absolute inset-0 z-20">
          <Image
            src={background3}
            alt="background-3"
            className="h-full w-full object-cover"
          />
        </motion.div>
        {/* Content */}
        <motion.div style={{ opacity: textOpacity }} className="relative z-30 flex justify-center items-center h-[100vh]">
          <div className="text-center text-white">
            <h1 className="font-bold text-5xl">{title}</h1>
            <p className="text-lg mt-4 max-w-lg mx-auto">{content}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ParallaxLayeredEffect;
