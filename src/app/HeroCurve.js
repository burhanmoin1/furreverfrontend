import Image from "next/image";
import AboutUs from "./AboutUs";
import EmailTaker from "./EmailTaker";
import WhyJoin from "./WhyJoin";
import Footer from "./Footer";

export default function HeroCurve() {
    return (
        <div className="2xl:mt-[30rem] md:mt-[18rem]">
         <div className="relative">
                <Image 
                    src="/Rectangle 6.svg" 
                    width={100} 
                    height={100} 
                    alt="curves"
                    className="2xl:w-full 2xl:h-[100vh] md:h-[50vh] md:w-full absolute bottom-0 z-10"
                />
                  <Image src="/Rectangle 7.svg" width={100} height={100} alt='curves' className="2xl:w-full 2xl:h-[100vh] md:w-full md:h-[50vh] absolute bottom-[-10px]"/>
                <Image 
                    src="/Jump.svg" 
                    width={400} 
                    height={100} 
                    alt="curves"
                    className="absolute bottom-0 right-0 z-40 jump-animation"
                />
                </div>
         <AboutUs />
         <EmailTaker />
         <WhyJoin />
         <Footer />
         </div>
    );
}
