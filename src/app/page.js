import Header from "./Header";
import HeaderCurves from "./HeaderCurves";
import HeroContent from "./HeroContent";
import HeroCurve from "./HeroCurve";

export default function Home() {
  return (
    <div className="text-white">
      <div className="relative z-20">
    <Header />
    <HeaderCurves />
    </div>
    <HeroCurve />
    <HeroContent />
 
    </div>
  );
}
