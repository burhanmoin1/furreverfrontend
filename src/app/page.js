import AboutUs from "./AboutUs";
import EmailTaker from "./EmailTaker";
import Footer from "./Footer";
import Header from "./Header";
import HeaderCurves from "./HeaderCurves";
import HeroContent from "./HeroContent";
import HeroCurve from "./HeroCurve";
import MobileHeroContent from "./MobileHeroContent";
import TestContent from "./TestContent";
import WhyJoin from "./WhyJoin";

export default function Home() {
  return (
    <div className="text-white">
      <div className="relative z-20">
    <Header />
    <HeaderCurves />
    </div>
    {/* <HeroCurve /> */}
    <TestContent />
    <MobileHeroContent />
    <AboutUs />
 <EmailTaker />
 <WhyJoin />
 <Footer />
    </div>
  );
}
