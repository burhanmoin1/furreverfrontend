'use client';
import Image from "next/image";

export default function Header() {
  const scrollToEmailTaker = () => {
    document.getElementById("email-taker")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-screen md:h-14 2xl:flex md:flex items-center justify-between 2xl:px-44 md:px-14 py-14 bg-[#6BCCD5]">
      <div>
        <Image src="/Logo.svg" alt="logo" width={80} height={100} className="hidden 2xl:flex md:flex" />
      </div>
      <div className="hidden 2xl:flex md:flex space-x-20">
        <h2 className="cursor-pointer">Home</h2>
        <h2 className="cursor-pointer">About Us</h2>
        <h2 className="cursor-pointer">How It Works</h2>
        <h2 className="cursor-pointer">Our Impact</h2>
        <h2 className="cursor-pointer">Contact</h2>
      </div>
      <div className="flex justify-between items-center 2xl:hidden md:hidden">
        <Image src="/Logo.svg" alt="logo" width={80} height={100} className="" />
        {/* Wrapped Image in a div for onClick */}
        <div onClick={scrollToEmailTaker} className="cursor-pointer">
          <Image src="/joinnow.svg" alt="Join FurrEver" width={120} height={80} />
        </div>
      </div>
      <div>
        {/* Wrapped Image in a div for onClick */}
        <div onClick={scrollToEmailTaker} className="cursor-pointer hidden 2xl:flex md:flex">
          <Image src="/joinnow.svg" alt="Join FurrEver" width={120} height={80} />
        </div>
      </div>
    </div>
  );
}
