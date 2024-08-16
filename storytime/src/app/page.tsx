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
  const opacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 2]);
  const disappearOpacity = useTransform(scrollYProgress, [0.9, 0.9], [2, 0]);
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
          <motion.div className="absolute inset-0 flex justify-center mt-[15%]">
            <Image
              src={boy}
              alt="boy"
              className="w-auto h-[20vh]"
              />
              </motion.div>
          <motion.div className="absolute inset-0 ml-[10%] mr-[10%] flex items-center" style={{opacity: opacity}}>
            <p className="w-full flex justify-center items-center text-lg font-edu-hand">
            One sweltering afternoon, with the sun beating down on the dusty earth, Madhav decided he wanted to play by the pond. It was a small, secluded spot, shaded by a canopy of trees, and a favorite of the village children. But on this day, it was eerily quiet. The water shimmered invitingly, and despite knowing he couldn’t swim, Madhav couldn’t resist wading in.
At first, it was fun—feeling the cool water lap against his skin—but the pond was deeper than he realized. Before he knew it, he was in over his head. Panic set in as he thrashed about, trying to keep his head above water, but the more he struggled, the more he sank. He gasped for air, his limbs growing heavy, the world around him a blur of water and fear.

            </p>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}