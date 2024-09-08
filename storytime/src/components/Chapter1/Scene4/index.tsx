import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import girl from "../../../../public/Chapter1/Scene4/GirlBlur.png";

export default function Scene4() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const opacity = useTransform(scrollYProgress, [0.3, 0.7, 1], [0, 0.5, 0]);
    const textOpacity = useTransform(scrollYProgress, [0.3, 0.7, 1], [0, 2, 0]);
    const finalTextOpacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);
    const clipPath = useTransform(
        scrollYProgress,
        [0, 0.7, 1],
        [
            'inset(50% 0 50% 0)',
            'inset(20% 0 20% 0)',
            'inset(40% 0 40% 0)',
        ]
      );
    return (
        <>
            <div className="flex justify-center items-center flex-col gap-5 h-[20%]">
                <p className="max-w-[75%] font-edu-hand text-3xl mt-72">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat in assumenda minima, laudantium quibusdam tempore
                </p>
                <p className="max-w-[75%] font-edu-hand text-4xl font-extrabold">
                    Lorem ipsum dolor sit amet consectetur
                </p>
            </div>
            <div ref={ref} className="h-[300vh] bg-gray-900">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center bg-black overflow-hidden">
          {/* Upper lid */}
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-black"
            // style={{ translateY: upperLidY }}
          />

          {/* Lower lid */}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-1/2 bg-black"
            // style={{ translateY: lowerLidY }}
          />

          {/* Content to be revealed between the eyelids */}
          <motion.div
            className="absolute h-full w-full"
            style={{ clipPath }}
          >
            <div className="h-full w-full relative">
              {/* Image */}
              <motion.div
                className="absolute inset-0"
                style={{ opacity }}
              >
                <Image
                  src={girl}
                  alt="girl"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* First text content */}
              <motion.div
                className="absolute inset-0 flex justify-center items-center"
                style={{ opacity: textOpacity }}
              >
                <p className="font-edu-hand text-white text-lg max-w-[75%]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, provident? Molestiae perspiciatis voluptatibus quibusdam sit, maxime similique! Necessitatibus doloremque cupiditate voluptates. Minus assumenda sit, quis repellendus a vitae est distinctio!
                </p>
              </motion.div>

              {/* Final text content */}
              <motion.div
                className="absolute flex justify-center items-center w-full h-full"
                style={{ opacity: finalTextOpacity }}
              >
                <p className="font-edu-hand text-lg max-w-[75%]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nobis impedit quia unde cum ad labore quos enim. Laboriosam optio vitae saepe, ad consequatur eos placeat minima ipsum incidunt nam.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

        </>
    )
}