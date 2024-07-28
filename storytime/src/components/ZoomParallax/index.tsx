import Picture1 from '../../../public/logo192.png';
import Picture2 from '../../../public/logo192.png';
import Picture3 from '../../../public/logo192.png';
import Picture4 from '../../../public/logo192.png'
import Picture5 from '../../../public/logo192.png'
import Picture6 from '../../../public/logo192.png'
import Picture7 from '../../../public/logo192.png'
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function ZoomParallax() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        {
            src: Picture1,
            scale: scale4
        },
        {
            src: Picture2,
            scale: scale5
        },
        {
            src: Picture3,
            scale: scale6
        },
        {
            src: Picture4,
            scale: scale5
        },
        {
            src: Picture5,
            scale: scale6
        },
        {
            src: Picture6,
            scale: scale8
        },
        {
            src: Picture7,
            scale: scale9
        }
    ]

    return (
        <div role="outerdiv" ref={container} className="h-[300vh] relative">
            <div role="ssticky" className="sticky top-0 h-full">
                {pictures.map(({ src, scale }, index) => (
                    <motion.div
                        key={index}
                        style={{ scale }}
                        className={`absolute inset-0 top-0 flex items-center justify-center w-full h-full `}
                    >
                        <div className={`relative w-[25vw] h-[25vw] ${index === 1
                            ? 'top-[-30vh] left-[5vw] w-[35vw] h-[30vh]'
                            : index === 2
                                ? 'top-[-10vh] left-[-25vw] w-[20vw] h-[45vh]'
                                : index === 3
                                    ? 'left-[27.5vw] w-[25vw] h-[25vh]'
                                    : index === 4
                                        ? 'top-[27.5vh] left-[5vw] w-[20vw] h-[25vh]'
                                        : index === 5
                                            ? 'top-[27.5vh] left-[-22.5vw] w-[30vw] h-[25vh]'
                                            : index === 6
                                                ? 'top-[22.5vh] left-[25vw] w-[15vw] h-[15vh]'
                                                : 'w-[25vw] h-[25vh]'
                        }`}>
                            <Image
                                src={src}
                                className="object-cover"
                                alt="image"
                                placeholder="blur"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

    )
}