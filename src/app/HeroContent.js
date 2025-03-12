import Image from "next/image";
import AboutUs from "./AboutUs";

export default function HeroContent() {
    return (
        <div className="absolute 2xl:top-44 md:top-24 flex flex-col items-center justify-center w-screen mt-36 text-white z-20">
            <Image src='./FurrEver.svg' alt="FurrEver Heading" width={100} height={100} className="2xl:w-[80vmin] md:w-[60vmin]"/>
            <h2 className="2xl:text-4xl mt-14 w-[65vmin] md:w-[70vmin] md:text-2xl text-center">
                SAFE and HAPPY well-being for animals with FurrEver!
            </h2>
        </div>
    );
}
