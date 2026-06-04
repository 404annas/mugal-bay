import Dashboard from "@/components/Home/Dashboard";
import DogSection from "@/components/Home/DogSection";
import Hero2 from "@/components/Home/Hero2";
import HeroWithDashboard from "@/components/Home/HeroWithDashboard";
import TabSection from "@/components/Home/TabSection";

const Main = () => {
  return (
    <div>
      {/* <FocusSlider /> */}

      <Hero2 />
      <Dashboard />
      {/* <HeroWithDashboard /> */}
      <DogSection />
      <TabSection />
      {/* <Cards /> */}
    </div>
  );
};

export default Main;
