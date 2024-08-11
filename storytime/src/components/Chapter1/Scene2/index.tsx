import { useRef } from "react";
import war from "../../../../public/War.png";
import map from "../../../../public/Map.png"
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
export default function Scene2() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const zoom = useTransform(scrollYProgress, [0, 0.2], [1, 4]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const revOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
    const moveLeft = useTransform(scrollYProgress, [0, 0.5], [0, -2000])
    const textOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    return (
        <div ref={ref} className="h-[300vh] bg-black mt-28">
            <div className="sticky top-0 h-[200vh]">
                <motion.div className="relative">
                    <motion.div style={{ scale: zoom, opacity, transformOrigin: '70% 70%' }}>
                        <Image
                            src={map}
                            alt="map"
                            className="w-full h-full" />
                    </motion.div>
                    <motion.div
                        className="absolute bg-red-400 inset-0 overflow-hidden "
                        style={{ scale: revOpacity }}
                    >
                        <div className="relative w-[200vh] h-full">
                            <motion.div
                                className="absolute flex flex-row w-[200vh] h-full bg-red-400"
                                style={{ x: moveLeft }}
                            >
                                <Image
                                    src={war}
                                    alt="war"
                                    className="w-full h-[95%]"
                                />
                                <Image
                                    src={war}
                                    alt="war"
                                    className="w-full h-[95%]"
                                />
                                <Image
                                    src={war}
                                    alt="war"
                                    className="w-full h-[95%]"
                                />
                            </motion.div>
                            <motion.div className="absolute flex justify-center w-[90vh] inset-[50vh]" style={{opacity: textOpacity}}>
                            <p className="font-edu-hand text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem soluta esse aliquid vitae quam, ex, ipsum ratione, nostrum illo voluptatibus commodi saepe sint mollitia vero tenetur ut quod animi tempore.</p>
                            </motion.div>
                        </div>
                    </motion.div>


                </motion.div>
            </div>
        </div>
    )
}