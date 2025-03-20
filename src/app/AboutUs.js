import Image from "next/image";

export default function AboutUs() {
    return (
        <div className="flex flex-col items-center 2xl:h-[70vh] md:h-[100vh] space-y-14 text-black w-screen">
            <h2 className="text-6xl font-semibold text-[#6BCCD5] tracking-[4.5px]">About Us</h2>
            <div className="flex items-center justify-between 2xl:w-[60%] md:w-[80%] md:space-x-10 mt-14">
                {[
                    { src: './Image Cat 3.svg', title: 'The community', text: 'The community plays a role in supporting animal welfare' },
                    { src: './Image Cat 1.svg', title: 'The vision', text: 'A world where every animal has the care and love it deserves.' },
                    { src: './hand-drawn-bernie-cat-sticker-collection_52683-636061-removebg-preview 1.svg', title: 'Transparent & Trackable', text: 'Donations are visible on the blockchain for full transparency.' }
                ].map((item, index) => (
                    <div key={index} className="border-[2px] border-[#6BCCD5] flex flex-col space-y-2 text-center items-center justify-center bg-[#D6F8FB] 2xl:w-[28%] md:w-[38%] h-[300px] rounded-lg relative group p-4">
                        <Image src={item.src} alt={`About FurrEver ${item.title}`} width={50} height={50} />
                        <h2 className="text-2xl font-semibold">{item.title}</h2>
                        <p className="w-[65%]">{item.text}</p>
                        <button className="absolute bottom-4 px-4 py-2 text-black bg-[#ffc909] rounded-lg hidden group-hover:block transition-opacity cursor-pointer duration-300 hover:bg-[#e8b605]">
                            Learn More
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};