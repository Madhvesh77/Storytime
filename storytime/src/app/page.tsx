'use client'
import TitleCardAndPlot from "@/components/TitleCardAndPlot";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useRef, useState } from "react";
import black from "../../public/BlackBase.png";
import leftHill from "../../public/Hill4Black.png";
import rightHill from "../../public/Hill5Black.png";
import leaf from "../../public/LeafBlack.png";
import map from "../../public/Map.png";
import opening from "../../public/Opening.png";
import sun from "../../public/SunsetBg.jpeg";
import children from "../../public/SunsetChildren.png";

export default function Home() {
  const plot = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quasi rem sed commodi cumque accusamus molestiae, sequi ullam accusantium modi, facere tenetur fuga eos cum nisi maiores, ad saepe aspernatur! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, aliquam. Libero excepturi eaque, eius velit est repellendus fugiat dolores voluptatem quia, adipisci, officiis ad cupiditate blanditiis nostrum aut delectus illum?"
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const sunOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const leafXProgress = useTransform(scrollYProgress, [0, 2], [0, window.innerWidth - 100]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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

      <div className="h-[100vh] bg-white">
        <motion.div className="sticky top-0 h-[100vh]" >
          <motion.div className='bg-black h-full relative'>
            <motion.div ref={ref} className="w-full h-full absolute" style={{ opacity: sunOpacity }} >
              <Image
                src={sun}
                alt="Sun"
                className="w-full h-full" />
            </motion.div>
            <motion.div ref={ref} className="w-[50%] ml-[41vh] py-[36vh] absolute" style={{ y: leafXProgress }}>
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
            <motion.div ref={ref} className="w-full absolute py-[74vh]">
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
    </main>
  )
}