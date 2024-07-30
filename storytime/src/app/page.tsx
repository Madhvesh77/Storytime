'use client'
import TitleCardAndPlot from "@/components/TitleCardAndPlot";
import ZoomParallax from "@/components/ZoomParallax";
import opening from "../../public/Opening.png"
import smallImage from "../../public/logo192.png"
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const plot = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quasi rem sed commodi cumque accusamus molestiae, sequi ullam accusantium modi, facere tenetur fuga eos cum nisi maiores, ad saepe aspernatur! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, aliquam. Libero excepturi eaque, eius velit est repellendus fugiat dolores voluptatem quia, adipisci, officiis ad cupiditate blanditiis nostrum aut delectus illum?"
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  const bgImageZoom = useTransform(scrollYProgress, [0, 1], [1.5, 0.5]);
  return (
    <main className=" mb-[100vh]">
      <TitleCardAndPlot image={opening} paragraph={plot} />
      <div className="h-[300vh]">
        <motion.div className="sticky bg-white h-[100vh] top-0" style={{scale: bgImageZoom}}>
          <Image
            src={opening}
            className="w-full h-full"
            alt="bg-image"
          />
        </motion.div>
      </div>
      {/* <TitleCardAndPlot/> */}
      <ZoomParallax />
    </main>
  )
}