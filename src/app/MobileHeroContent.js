import Image from "next/image";

export default function MobileHeroContent () {
    return (
        <div className="relative min-h-[70vh] flex flex-col 2xl:hidden md:hidden items-center justify-center"
        style={{ backgroundImage: "url('/Rectangle 6.svg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
             <div className=" min-h-[80vh] absolute flex 2xl:hidden md:hidden mt-4"
        style={{ backgroundImage: "url('/Rectangle 7.svg')", backgroundSize: 'cover', backgroundPosition: 'center' }}/>
             <Image src='./FurrEver.svg' alt="FurrEver Heading" width={100} height={100} className="w-[80vmin]"/>

            <h2 className="2xl:text-4xl mt-14 w-[65vmin] md:w-[70vmin] md:text-2xl text-center">
                SAFE and HAPPY well-being for animals with FurrEver!
            </h2>
           
            {/* <Image 
                src="/Jump.svg" 
                width={400} 
                height={100} 
                alt="curves"
                className="absolute 2xl:bottom-[1rem] md:bottom-[-4rem] right-0 z-40"
            /> */}
                {/* <Image 
                src="/A.svg" 
                width={120} 
                height={100} 
                alt="curves"
                className="absolute 2xl:bottom-26 2xl:right-50 md:bottom-10 md:right-50 z-40"
            />
                <Image 
            src="/Dog 2.svg" 
            width={200} 
            height={100} 
            alt="curves"
            className="absolute 2xl:bottom-16 2xl:right-72 md:bottom-3 md:right-70 z-20"
            />
            <Image 
                src="/Tail.svg" 
                width={60} 
                height={100} 
                alt="curves"
                className="absolute 2xl:bottom-34 2xl:right-109 md:bottom-20 md:right-107 z-10 fast-bounce"
                /> */}
        </div>
    );
};