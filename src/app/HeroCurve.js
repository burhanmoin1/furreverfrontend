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
                    className="2xl:w-full 2xl:h-[140vh] md:h-[100vh] md:w-full absolute bottom-0 z-10"
                />
                  <Image src="/Rectangle 7.svg" width={100} height={100} alt='curves' className="2xl:w-full 2xl:h-[100vh] md:w-full md:h-[100vh] absolute bottom-[-10px]"/>
                <Image 
                    src="/Jump.svg" 
                    width={400} 
                    height={100} 
                    alt="curves"
                    className="absolute 2xl:bottom-[1rem] md:bottom-[-4rem] right-0 z-40"
                />
                 <Image 
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
                    />
                </div>
         <AboutUs />
         <EmailTaker />
         <WhyJoin />
         <Footer />
         </div>
    );
}
