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
    return (
        <div ref={ref} className="bg-black h-[300vh] mt-5">
            <div className="flex justify-center items-center flex-col gap-5 h-[20%]">
                <p className="max-w-[75%] font-edu-hand text-3xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat in assumenda minima, laudantium quibusdam tempore
                </p>
                <p className="max-w-[75%] font-edu-hand text-4xl font-extrabold">
                    Lorem ipsum dolor sit amet consectetur
                </p>
            </div>
            <motion.div className="sticky top-0 h-[100vh] bg-black">
                <div className="h-full w-full relative">
                    <motion.div
                        className="absolute inset-0"
                        style={{ opacity: opacity }}
                    >
                        <Image
                            src={girl}
                            alt="girl"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                    <motion.div className="absolute inset-0 flex justify-center items-center" style={{ opacity: textOpacity }}>
                        <p className="font-edu-hand text-white text-lg max-w-[75%]">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, provident? Molestiae perspiciatis voluptatibus quibusdam sit, maxime similique! Necessitatibus doloremque cupiditate voluptates. Minus assumenda sit, quis repellendus a vitae est distinctio!
                        </p>
                    </motion.div>
                    <motion.div className="flex justify-center items-center w-full h-full" style={{opacity: finalTextOpacity}}>
                        <p className="font-edu-hand text-lg max-w-[75%]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nobis impedit quia unde cum ad labore quos enim. Laboriosam optio vitae saepe, ad consequatur eos placeat minima ipsum incidunt nam.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}