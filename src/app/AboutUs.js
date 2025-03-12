import Image from "next/image";

export default function AboutUs () {
    return (
        <div className="flex flex-col items-center 2xl:h-[70vh] md:h-[100vh] space-y-14 text-black w-screen">
            <h2 className="text-6xl font-semibold text-[#6BCCD5] tracking-[4.5px]">About Us</h2>
            <div className="flex items-center justify-between 2xl:w-[60%] md:w-[80%] md:space-x-10 mt-14">
                <div className="border-[2px] border-[#6BCCD5] flex flex-col space-y-2 text-center  items-center justify-center bg-[#D6F8FB] 2xl:w-[28%] md:w-[38%] h-[300px] rounded-lg">
                <Image src='./image 9.svg' alt="About FurrEver community" width={50} height={50}/>
                <h2 className=" text-2xl font-semibold">The community</h2>
                <p className="w-[65%]">The community plays a role in supporting animal welfare</p>
                </div>
                <div className="border-[2px] border-[#6BCCD5] flex flex-col space-y-2 text-center  items-center justify-center bg-[#D6F8FB] 2xl:w-[28%] md:w-[38%] h-[300px] rounded-lg">
                <Image src='./image 9.svg'  alt="About FurrEver vision" width={50} height={50}/>
                <h2 className=" text-2xl font-semibold">The vision</h2>
                <p className="w-[65%]">A world where every animal has the care and love it deserves.</p>
                </div>
                <div className="border-[2px] border-[#6BCCD5] flex flex-col space-y-2 text-center  items-center justify-center bg-[#D6F8FB] 2xl:w-[28%] md:w-[38%] h-[300px] rounded-lg">
                <Image src='./image 9.svg'  alt="About FurrEver transparency" width={50} height={50}/>
                <h2 className=" text-2xl font-semibold w-[65%]">Transparent & Trackable</h2>
                <p className="w-[65%]">Donations are visible on the blockchain for full transparency.</p>
                </div>
            </div>
           
        </div>
    );
};