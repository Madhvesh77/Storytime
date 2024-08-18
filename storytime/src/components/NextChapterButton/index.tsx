import Image from "next/image";
import next from "../../../public/next.svg";
import { Button } from "primereact/button";

export default function NextChapterButton() {
    return (
        <div className="w-full flex justify-center items-center pb-10">
            <Button className="bg-black hover:bg-gray-800 rounded-full">
                <Image alt="logo" src={next} className="h-10 w-10 hover:rotate-90" />
            </Button>
        </div>
    )
}