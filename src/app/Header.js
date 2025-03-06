import Image from "next/image";

export default function Header () {
    return (
    <div className="w-screen h-14 flex items-center justify-between 2xl:px-44 md:px-14 py-14 bg-[#6BCCD5]">
        <div>
        <Image src='./Logo.svg' alt='logo' width={80} height={100} />
        </div>
        <div className="flex space-x-20">
            <h2 className="cursor-pointer">Home</h2>
            <h2 className="cursor-pointer">About Us</h2>
            <h2 className="cursor-pointer">How It Works</h2>
            <h2 className="cursor-pointer">Our Impact</h2>
            <h2 className="cursor-pointer">Contact</h2>
        </div>
        <div>
             <Image src='./joinnow.svg' alt="Join FurrEver" width={120} height={80} className="cursor-pointer"/>
        </div>
    </div>
  );
};