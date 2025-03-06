import Image from "next/image";
import AboutUs from "./AboutUs";
import EmailTaker from "./EmailTaker";
import WhyJoin from "./WhyJoin";
import Footer from "./Footer";

export default function HeroCurve() {
    return (
        <div className="2xl:mt-[30rem] md:mt-[18rem]">
         <Image src="/Rectangle 6.svg" width={100} height={100} alt='curves' className="2xl:w-full 2xl:h-full md:h-[50vh] md:w-full absolute top-1 z-10"/>
         <Image src="/Rectangle 7.svg" width={100} height={100} alt='curves' className="2xl:w-full 2xl:h-full md:w-full md:h-[50vh] absolute top-3"/>
         <AboutUs />
         <EmailTaker />
         <WhyJoin />
         <Footer />
         </div>
    );
}
