import Hero from "./pages/Hero";
import SecondSection from "./pages/SecondSection";
import ThirdSection from "./pages/ThirdSection";
import ForthSection from "./pages/ForthSection";
import FifthSection from "./pages/FifthSection";
import MenuSection from "./pages/MenuSection";

function App() {
  return (
    <div className="mb-32 overflow-x-hidden">
      <Hero />
      <SecondSection />
      <ThirdSection />
      <ForthSection />
      <FifthSection />
      <MenuSection />
    </div>
  );
}

export default App;
