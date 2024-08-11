'use client'
import TitleCardAndPlot from "@/components/TitleCardAndPlot";
import Image from "next/image";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useState } from "react";
import map from "../../public/Map.png";
import opening from "../../public/Opening.png";
import Scene1 from "@/components/Chapter1/Scene1";
import Scene2 from "@/components/Chapter1/Scene2";

export default function Home() {
  const plot = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quasi rem sed commodi cumque accusamus molestiae, sequi ullam accusantium modi, facere tenetur fuga eos cum nisi maiores, ad saepe aspernatur! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, aliquam. Libero excepturi eaque, eius velit est repellendus fugiat dolores voluptatem quia, adipisci, officiis ad cupiditate blanditiis nostrum aut delectus illum?"
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
      <Scene1 />
      <Scene2 />
    </main>
  )
}