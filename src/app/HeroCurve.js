import Image from "next/image";
import AboutUs from "./AboutUs";
import EmailTaker from "./EmailTaker";
import WhyJoin from "./WhyJoin";
import Footer from "./Footer";

export default function HeroCurve() {
    return (
        <div className="2xl:mt-[30rem] md:mt-[32rem]">
         <div className="relative">
                <Image 
                    src="/Rectangle 6.svg" 
                    width={100} 
                    height={100} 
                    alt="curves"
                    className="2xl:w-full 2xl:h-[100vh] md:h-[100vh] md:w-full absolute bottom-0 z-10"
                />
                  <Image src="/Rectangle 7.svg" width={100} height={100} alt='curves' className="2xl:w-full 2xl:h-[100vh] md:w-full md:h-[100vh] absolute bottom-[-10px]"/>
                <Image 
                    src="/Jump.svg" 
                    width={400} 
                    height={100} 
                    alt="curves"
                    className="absolute bottom-0 right-0 z-40 jump-animation"
                />
                 <Image 
                    src="/A.svg" 
                    width={120} 
                    height={100} 
                    alt="curves"
                    className="absolute 2xl:bottom-24 2xl:right-58 md:bottom-10 md:right-58 z-40"
                /> <Image 
                src="/Dog 2.svg" 
                width={200} 
                height={100} 
                alt="curves"
                className="absolute 2xl:bottom-14 2xl:right-84 md:bottom-4 md:right-82 z-20"
            />
                </div>
         <AboutUs />
         <EmailTaker />
         <WhyJoin />
         <Footer />
         </div>
    );
}
