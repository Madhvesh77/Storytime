import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import black from "../../../../public/BlackBase.png";
import leftHill from "../../../../public/Hill4Black.png";
import rightHill from "../../../../public/Hill5Black.png";
import leaf from "../../../../public/LeafBlack.png";
import sunsetBg from "../../../../public/SunsetBgNoSun.jpeg";
import sun from "../../../../public/Sun2.png";
import children from "../../../../public/SunsetChildren.png";
import { useRef } from "react";
export default function Scene1() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });

    const sunOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    let leafXProgress;
    if (typeof window !== "undefined") {
        leafXProgress = useTransform(scrollYProgress, [0, 2], [0, window.innerWidth - 100]);
    }
    return (
        <div className="h-[100vh] bg-white">
            <motion.div className="sticky top-0 h-[100vh]" >
                <motion.div className='bg-black h-full relative'>
                    <motion.div ref={ref} className="w-full h-full absolute" style={{ opacity: sunOpacity }} >
                        <Image
                            src={sunsetBg}
                            alt="Sun"
                            className="w-full h-full object-cover" />
                    </motion.div>
                    <motion.div ref={ref} className="w-[80%] ml-[12%] py-[7%] absolute" style={{ opacity: sunOpacity }} >
                        <Image
                            src={sun}
                            alt="Sun"
                            className="w-full h-full object-cover"
                         />
                    </motion.div>
                    <motion.div ref={ref} className="w-[50%] ml-[29%] py-[22%] absolute" style={{ y: leafXProgress }}>
                        <Image
                            src={children}
                            alt="children"
                        />
                    </motion.div>
                    <motion.div ref={ref} className="absolute py-[15%] w-[70%] h-auto" style={{ y: leafXProgress }}>
                        <Image
                            src={leftHill}
                            alt="hill" />
                    </motion.div>
                    <motion.div ref={ref} className="mr-auto ml-[10%] px-0 py-[3%] absolute" style={{ y: leafXProgress }}>
                        <Image
                            src={rightHill}
                            alt="righthill" />
                    </motion.div>
                    <motion.div ref={ref} className="w-full absolute py-[45%]">
                        <Image
                            src={black}
                            alt="black"
                            className="w-full h-full" />
                    </motion.div>
                    <motion.div ref={ref} className="absolute ml-[15%]" style={{ x: leafXProgress }}>
                        <Image
                            src={leaf}
                            alt="leaf" />
                    </motion.div>
                    <motion.div ref={ref} className="absolute" style={{ opacity: sunOpacity }}>
                        <div className="ml-5 mr-5 mt-40 flex flex-col gap-10">
                            <p className="font-edu-hand text-lg ml-0 mr-[50%]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cum, rerum enim ratione repellat dolores iure cupiditate commodi velit! Sint nulla a veniam! Ratione, magni vel aperiam repellat facere veritatis.
                            </p>
                            <p className="font-edu-hand text-lg ml-[50%] mr-0">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa velit voluptatum voluptas in voluptatem, fugit tempora rerum pariatur ullam vel perspiciatis eum, laboriosam libero quaerat nemo nisi, consequuntur sit deleniti.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}