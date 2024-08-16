'use client'
import TitleCardAndPlot from "@/components/TitleCardAndPlot";
import Image from "next/image";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useRef, useState } from "react";
import map from "../../public/Map.png";
import opening from "../../public/Opening.png";
import Scene1 from "@/components/Chapter1/Scene1";
import Scene2 from "@/components/Chapter1/Scene2";
import Scene3 from "@/components/Chapter1/Scene3";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const plot = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quasi rem sed commodi cumque accusamus molestiae, sequi ullam accusantium modi, facere tenetur fuga eos cum nisi maiores, ad saepe aspernatur! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, aliquam. Libero excepturi eaque, eius velit est repellendus fugiat dolores voluptatem quia, adipisci, officiis ad cupiditate blanditiis nostrum aut delectus illum?"
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleClick = (() => {
    setIsDialogOpen(true);
  })

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const opacity = useTransform(scrollYProgress, [0.3, 1], [0, 2]);

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
      <Scene3 />

      <div ref={ref} className="bg-black h-[300vh] mt-5">
        <div className="flex justify-center items-center flex-col gap-5 h-[20%] ">
          <p className="max-w-[75%] font-edu-hand text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat in assumenda minima, laudantium quibusdam tempore
          </p>
          <p className="max-w-[75%] font-edu-hand text-4xl font-extrabold">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
        <motion.div className="sticky top-0 h-[100vh] bg-white" style={{ opacity: opacity }}>

        </motion.div>

      </div>
    </main>
  )
}