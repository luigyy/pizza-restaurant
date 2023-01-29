import Hero from "./pages/Hero";
import SecondSection from "./pages/SecondSection";
import ThirdSection from "./pages/ThirdSection";
import ForthSection from "./pages/ForthSection";
import FifthSection from "./pages/FifthSection";
import MenuSection from "./pages/MenuSection";
import PlaceDescription from "./pages/PlaceDescription";

function App() {
  return (
    <div className="mb-32 overflow-x-hidden">
      <Hero />
      <SecondSection />
      <ThirdSection />
      <ForthSection />
      <FifthSection />
      <MenuSection />
      <PlaceDescription />
    </div>
  );
}

export default App;
