import TitleCardAndPlot from "../TitleCardAndPlot";
import opening from "../../../public/Opening.png"
import Scene1 from "./Scene1";
import Scene2 from "./Scene2";
import Scene3 from "./Scene3";
import Scene4 from "./Scene4";

export default function Chapter1() {
    const plot = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quasi rem sed commodi cumque accusamus molestiae, sequi ullam accusantium modi, facere tenetur fuga eos cum nisi maiores, ad saepe aspernatur! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, aliquam. Libero excepturi eaque, eius velit est repellendus fugiat dolores voluptatem quia, adipisci, officiis ad cupiditate blanditiis nostrum aut delectus illum?"
    return (
        <>
            <TitleCardAndPlot image={opening} paragraph={plot} />
            <Scene1 />
            <Scene2 />
            <Scene3 />
            <Scene4 />
        </>
    )
}