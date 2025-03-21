import Image from "next/image";
import { rubik } from "../app/layout";

export default function Footer () {
    return (
        <div className="relative flex flex-col items-center">
            {/*Parent div */}
             <div className="bg-[#68CCD5] absolute w-full h-[10vh] z-10"/>
            <div className="bg-[#FFC909] relative w-full h-fit top-4 py-4 z-20">
            <div className="relative z-40 mt-14 flex flex-col items-center">
            <Image src='./Logo (1).svg' alt='FurrEver' width={100} height={100}/>
            <h2 className={`${rubik.className} 2xl:text-6xl font-bold font-rubik md:text-xl`}>FUR&apos;EVER</h2>
            <div className="hidden md:flex space-y-4 self-start md:self-center m-4 space-x-14 md:mt-24 text-2xl">
                <h2 className="cursor-pointer font-semibold">Home</h2>
                <h2 className="cursor-pointer font-semibold">About Us</h2>
                <h2 className="cursor-pointer font-semibold">How It Works</h2>
                <h2 className="cursor-pointer font-semibold">Our Impact</h2>
                <h2 className="cursor-pointer font-semibold">Contact</h2>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-24">
                <Image src='./Facebook.svg' alt="Furrever Facebook" width={50} height={100}/>
                <Image src='./Telegram.svg' alt="Furrever Telegram" width={50} height={100}/>
                <Image src='./Intagram.svg' alt="Furrever Instagram" width={50} height={100}/>
                <Image src='./Twitter.svg' alt="Furrever Twitter" width={50} height={100}/>
            </div>
            </div></div>
            {/*Inside content */}
            
        </div>
    );
};