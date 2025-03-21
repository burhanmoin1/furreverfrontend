import Image from "next/image";

export default function WhyJoin () {
    return (
        <div className="h-[60vh] p-10 flex flex-col md:mt-8 items-center justify-center">
              <Image  src='/Frame 18.svg' width={180} height={100} alt="Furrever" className="flex md:hidden mt-4"/>
            <div className="flex gap-4 items-center">
                
            <h2 className="2xl:text-6xl font-semibold text-[#6BCCD5] md:text-3xl text-3xl mt-4">Why Join FUR&apos;EVER?</h2>
            </div>
            <div className="flex items-center">
          
            <p className="text-black 2xl:text-3xl md:w-[80%] text-center mt-4 md:mt-14 md:text-xl">FUR&apos;EVER is more than just a cryptocurrency—it&apos;s a movement dedicated to protecting and supporting animals in need. By leveraging blockchain technology and a community-driven approach, we ensure that every transaction directly contributes to verified animal welfare organizations, shelters, and rescue initiatives worldwide.</p>
                <Image  src='/Frame 18.svg' width={180} height={100} alt="Furrever" className="hidden md:flex"/>
            </div>
        </div>
    );
};