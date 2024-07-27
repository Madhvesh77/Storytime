'use client'
import ZoomParallax from '../components/ZoomParallax/index';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'

export default function Home() {

    useEffect( () => {
        const lenis = new Lenis()
       
        function raf(time: any) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    },[])

    return (
        <main className=" mt-48 mb-[100vh]">
          <div className="flex justify-center font-semibold text-9xl"> Hello</div>
            <ZoomParallax />
        </main>
    )
}