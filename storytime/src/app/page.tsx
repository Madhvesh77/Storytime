'use client'
import Chapter1 from "@/components/Chapter1";
import Image from "next/image";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useState } from "react";
import map from "../../public/Map.png";
import next from "../../public/logo192.png"
import NextChapterButton from "@/components/NextChapterButton";

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleClick = (() => {
    setIsDialogOpen(true);
  })

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
      <Chapter1 />
      <NextChapterButton />
    </main>
  )
}