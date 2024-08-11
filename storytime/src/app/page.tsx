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
  const { scrollYProgress } = useScroll({ target: ref });
  const zoom = useTransform(scrollYProgress, [0, 0.2], [1, 4]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const revOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

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
      <div ref={ref} className="h-[500vh] bg-black mt-28">
        <div className="sticky top-0 h-[100vh]">
        <motion.div className="relative">
          <motion.div style={{scale: zoom, opacity, transformOrigin: '50% 50%'}}>
          <Image
          src={map}
          alt="map"
          className="w-full h-full"/>
          </motion.div>
          <motion.div className="absolute inset-0 flex items-center justify-center bg-red-400" style={{scale: revOpacity}}>
            <Image
            src={war}
            alt="war"
            className="w-full" />
          </motion.div>
        </motion.div>
      </div>
      </div>
    </main>
  )
}