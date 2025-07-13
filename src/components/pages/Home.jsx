import HeroSection from "@/components/organisms/HeroSection";
import ServicesSection from "@/components/organisms/ServicesSection";
import AboutSection from "@/components/organisms/AboutSection";
import ClientStats from "@/components/organisms/ClientStats";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ClientStats />
    </div>
  );
};

export default Home;