import FeatureSection from "../sections/LandingSections/FeatureSection";
import AboutSection from "../sections/LandingSections/AboutSection";
import HeroSection from "../sections/LandingSections/HeroSection";

const LandingPage = () => {
  return (
    <section className="my-10">
      <HeroSection/>
      <FeatureSection/>
      <AboutSection/>
    </section>
  );
};

export default LandingPage;
