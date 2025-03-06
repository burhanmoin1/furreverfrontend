import Image from "next/image";

export default function WhyJoin () {
    return (
        <div className="h-[60vh] p-10 flex flex-col mt-4 items-center justify-center">
            <div className="flex gap-4 items-center">
            <h2 className="text-6xl font-semibold text-[#6BCCD5]">Why Join FUR'EVER?</h2>
            <Image src='./Head Blink.svg' width={100} height={100} />
            </div>
            <p className="text-black text-3xl w-[80%] text-center mt-14">FUR'EVER is more than just a cryptocurrency—it's a movement dedicated to protecting and supporting animals in need. By leveraging blockchain technology and a community-driven approach, we ensure that every transaction directly contributes to verified animal welfare organizations, shelters, and rescue initiatives worldwide.</p>
        </div>
    );
};