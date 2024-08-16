'use client'
import TitleCardAndPlot from "@/components/TitleCardAndPlot";
import Image from "next/image";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useRef, useState } from "react";
import map from "../../public/Map.png";
import opening from "../../public/Opening.png";
import water from "../../public/water.jpg";
import boy from "../../public/Boy.png";
import Scene1 from "@/components/Chapter1/Scene1";
import Scene2 from "@/components/Chapter1/Scene2";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const plot = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quasi rem sed commodi cumque accusamus molestiae, sequi ullam accusantium modi, facere tenetur fuga eos cum nisi maiores, ad saepe aspernatur! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, aliquam. Libero excepturi eaque, eius velit est repellendus fugiat dolores voluptatem quia, adipisci, officiis ad cupiditate blanditiis nostrum aut delectus illum?"
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleClick = (() => {
    setIsDialogOpen(true);
  })

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const opacity = useTransform(scrollYProgress, [0.6, 0.7, 1], [0, 2, 0]);
  let boyDrownAnimation;
  if (typeof window !== "undefined") {
    boyDrownAnimation = useTransform(scrollYProgress, [0.8, 0.9], [0, window.innerWidth / 2]);
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
    <main className=" mb-[100vh]">
      <Button
        visible={!isDialogOpen}
        onClick={handleClick}
        className="fixed right-4 bottom-4 md:ml-[95%] md:mt-[55%] z-50 w-12 h-12 bg-transparent text-white rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-125"
      >
        <Image
          src={map}
          alt="map-icon"
        />
      </Button>
      <Dialog header="" visible={isDialogOpen} style={{ width: '50vw' }} onHide={() => setIsDialogOpen(false)}>
        <div >
          <Image
            src={map}
            alt="map"
            className="w-full h-full" />
        </div>
      </Dialog>
      <TitleCardAndPlot image={opening} paragraph={plot} />
      <Scene1 />
      <Scene2 />
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
          <motion.div className="absolute inset-0 flex justify-center items-start" style={{ y: boyDrownAnimation }}>
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
    </main>
  )
}