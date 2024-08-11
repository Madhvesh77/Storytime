'use client'
import { motion, useScroll, useTransform } from "framer-motion";
import TitleCardAndPlot from "@/components/TitleCardAndPlot";
import Image from "next/image";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useRef, useState } from "react";
import map from "../../public/Map.png";
import war from "../../public/War.png";
import opening from "../../public/Opening.png";
import Scene1 from "@/components/Chapter1/Scene1";

export default function Home() {
  const plot = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quasi rem sed commodi cumque accusamus molestiae, sequi ullam accusantium modi, facere tenetur fuga eos cum nisi maiores, ad saepe aspernatur! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, aliquam. Libero excepturi eaque, eius velit est repellendus fugiat dolores voluptatem quia, adipisci, officiis ad cupiditate blanditiis nostrum aut delectus illum?"
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const ref = useRef(null);
  const warRef = useRef(null);
  const { scrollYProgress: warScrollYProgress } = useScroll({ target: warRef })
  const { scrollYProgress } = useScroll({ target: ref });
  const zoom = useTransform(scrollYProgress, [0, 0.2], [1, 4]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const revOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const moveLeft = useTransform(scrollYProgress, [0, 0.5], [0, -2000])

  const handleClick = (() => {
    setIsDialogOpen(true);
  })
  return (
    <main className=" mb-[100vh]">
      <Button
        visible={!isDialogOpen}
        onClick={handleClick}
        className="fixed ml-[95%] mt-[55%] z-50 w-12 h-12 bg-transparent text-white rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-125"
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
      <div ref={ref} className="h-[400vh] bg-black mt-28">
        <div className="sticky top-0 h-[200vh]">
          <motion.div className="relative">
            <motion.div style={{ scale: zoom, opacity, transformOrigin: '70% 70%' }}>
              <Image
                src={map}
                alt="map"
                className="w-full h-full" />
            </motion.div>
            <motion.div
              ref={warRef}
              className="absolute bg-red-400 inset-0 overflow-hidden "
              style={{ scale: revOpacity }}
            >
              <div className="relative w-[200vh] h-full">
              <motion.div
                className="absolute flex flex-row w-[200vh] h-full bg-red-400"
                style={{x: moveLeft}}
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
                <p className="absolute font-edu-hand text-lg flex justify-center w-[90vh] inset-[50vh]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem soluta esse aliquid vitae quam, ex, ipsum ratione, nostrum illo voluptatibus commodi saepe sint mollitia vero tenetur ut quod animi tempore.</p>
              </div>
            </motion.div>
            

          </motion.div>
        </div>
      </div>
    </main>
  )
}