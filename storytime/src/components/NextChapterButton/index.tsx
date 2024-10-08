import Image from "next/image";
import next from "../../../public/logo192.png";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";

export default function NextChapterButton({nextPage} : {nextPage: string}) {
    const router = useRouter();
    return (
        <div className="w-full flex justify-center items-center pb-10">
            <Button className="bg-black hover:bg-gray-800 rounded-full" onClick={(() => router.push(nextPage))}>
                <Image alt="logo" src={next} className="h-10 w-10 hover:animate-spin" />
            </Button>
        </div>
    )
}