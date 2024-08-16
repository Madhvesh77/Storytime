import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import water from "../../../../public/water.jpg";
import boy from "../../../../public/Boy.png"
export default function Scene3() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const opacity = useTransform(scrollYProgress, [0.5, 0.7, 0.9], [0, 2, 0]);
    let boyDrownAnimation;
    if (typeof window !== "undefined") {
        boyDrownAnimation = useTransform(scrollYProgress, [0.5, 0.8], [0, window.innerWidth / 2]);
    }
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const handleMouseMove = (event: any) => {
        const { clientX: cursorX, clientY: cursorY, currentTarget } = event;
        const { width, height, left, top } = currentTarget.getBoundingClientRect();

        const offsetX = (cursorX - left) - width / 2;
        const offsetY = (cursorY - top) - height / 2;

        const tiltX = (offsetY / height) * -10;
        const tiltY = (offsetX / width) * 10;

        setRotation({ x: tiltX, y: tiltY });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
    };
    return (
        <div className="bg-[#165e6e] top-0 h-screen w-screen">
            <motion.div
                className="relative w-full h-full"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    perspective: 1000,
                    opacity: opacity,
                }}
            >
                <div className="absolute inset-0">
                    <Image
                        src={water}
                        alt="water"
                        className="w-full h-full"
                    />
                </div>
                <motion.div
                    style={{
                        rotateX: rotation.x,
                        rotateY: rotation.y,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="w-full h-full"
                >
                    <Image
                        src={water}
                        alt="water"
                        className="w-full h-full"
                    />
                </motion.div>
                <motion.div className="absolute inset-0 flex justify-center items-start h-full" style={{ y: boyDrownAnimation }}>
                    <Image
                        src={boy}
                        alt="boy"
                        className="w-auto h-[20vh]"
                    />
                </motion.div>
                <motion.div className="absolute inset-0 ml-[10%] mr-[10%] flex items-center" style={{ opacity: opacity }}>
                    <p className="w-full flex justify-center items-center text-lg font-edu-hand">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quisquam impedit officiis, iure maiores explicabo quasi dolore sint quidem minima cum neque doloremque corporis fuga blanditiis, adipisci praesentium numquam atque.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    )
}