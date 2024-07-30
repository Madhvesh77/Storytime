import TitleCardAndPlot from "@/components/TitleCardAndPlot";
import ZoomParallax from "@/components/ZoomParallax";
import opening from "../../public/Opening.png"

export default function Home() {
  const plot = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quasi rem sed commodi cumque accusamus molestiae, sequi ullam accusantium modi, facere tenetur fuga eos cum nisi maiores, ad saepe aspernatur! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, aliquam. Libero excepturi eaque, eius velit est repellendus fugiat dolores voluptatem quia, adipisci, officiis ad cupiditate blanditiis nostrum aut delectus illum?"
  return (
    <main className=" mb-[100vh]">
      <TitleCardAndPlot image={opening} paragraph={plot} />
      <div className="h-[300vh]">
        <div className="sticky bg-white h-[100vh] top-0">
          <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident totam, quaerat debitis, aliquam at atque doloribus quis deleniti placeat inventore, nisi cum aspernatur in blanditiis itaque alias quasi ex ab!</p>
        </div>
      </div>
      {/* <TitleCardAndPlot/> */}
      <ZoomParallax />
    </main>
  )
}