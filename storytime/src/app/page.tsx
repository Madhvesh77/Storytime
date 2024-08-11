'use client'
import TitleCardAndPlot from "@/components/TitleCardAndPlot";
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import black from "../../public/BlackBase.png";
import leftHill from "../../public/Hill4Black.png";
import rightHill from "../../public/Hill5Black.png";
import leaf from "../../public/LeafBlack.png";
import opening from "../../public/Opening.png";
import sun from "../../public/SunsetBg.jpeg";
import children from "../../public/SunsetChildren.png";

export default function Home() {
  const plot = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quasi rem sed commodi cumque accusamus molestiae, sequi ullam accusantium modi, facere tenetur fuga eos cum nisi maiores, ad saepe aspernatur! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, aliquam. Libero excepturi eaque, eius velit est repellendus fugiat dolores voluptatem quia, adipisci, officiis ad cupiditate blanditiis nostrum aut delectus illum?"
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });


  const inView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, opacity: 1 });
    } else {
      controls.start({ x: -200, opacity: 0 });
    }
  }, [inView, controls]);

  const sunOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const leafXProgress = useTransform(scrollYProgress, [0, 2], [0, window.innerWidth - 100]);
  const sunScale = useTransform(scrollYProgress, [0, 1], [1, 2]);

  const manX = useTransform(scrollYProgress, [0, 0.5], ["-100%", "50%"]);
  const treeX = useTransform(scrollYProgress, [0, 0.5], ["100%", "80%"]);
  return (
    <main className=" mb-[100vh]">
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



      {/* <div className="h-[200vh] bg-white">
      <motion.div id="color-div" ref={ref} className="bg-orange-300 h-[100vh] relative">
        <motion.div
          animate={controls}
          initial={{ x: -200, opacity: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="w-full h-full absolute"
        >
          <Image src={sun} alt="Sun" className="w-full h-full absolute" />
        </motion.div>
        
        <motion.div
          animate={controls}
          initial={{ x: 200, opacity: 0 }}
          transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
          className="w-[50%] ml-[38vh] py-[33vh] absolute"
        >
          <Image src={children} alt="children" />
        </motion.div>
        
        <motion.div
          animate={controls}
          initial={{ x: -200, opacity: 0 }}
          transition={{ type: "spring", stiffness: 50, delay: 0.4 }}
          className="absolute py-[15%] w-[70%] h-auto"
        >
          <Image src={leftHill} alt="hill" />
        </motion.div>
        
        <motion.div
          animate={controls}
          initial={{ x: 200, opacity: 0 }}
          transition={{ type: "spring", stiffness: 50, delay: 0.6 }}
          className="mr-auto ml-[10%] px-0 py-[3%] absolute"
        >
          <Image src={rightHill} alt="righthill" />
        </motion.div>
        
        <motion.div
          animate={controls}
          initial={{ x: 0, y: 200, opacity: 0 }}
          transition={{ type: "spring", stiffness: 50, delay: 0.8 }}
          className="w-full absolute py-[75vh]"
        >
          <Image src={black} alt="black" />
        </motion.div>
        
        <motion.div
          animate={controls}
          initial={{ x: -200, opacity: 0 }}
          transition={{ type: "spring", stiffness: 50, delay: 1 }}
          className="absolute ml-[15%]"
        >
          <Image src={leaf} alt="leaf" />
        </motion.div>
      </motion.div>
    </div> */}

      {/* <ZoomParallax/> */}
      {/* <div className="h-[500vh]">
        <motion.div className="sticky bg-white h-[100vh] top-0" style={{opacity: bgImageZoom}}>
          <Image
            src={smallImage}
            className="w-full h-full"
            alt="bg-image"
          />
        </motion.div>
      </div> */}
      {/* <ZoomParallax /> */}
      {/* <LoopAnimation/>
      <SphericalRevolvingImages/> */}
      {/* <MiddlePictureParallax /> */}
      {/* <ParallaxLayeredEffect background1={opening} background2={opening} background3={opening} title="Title" content="Content"/> */}
    </main>
  )
}