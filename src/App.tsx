import Hero from "./pages/Hero";
import SecondSection from "./pages/SecondSection";
import ThirdSection from "./pages/ThirdSection";
import ForthSection from "./pages/ForthSection";
import FifthSection from "./pages/FifthSection";
import MenuSection from "./pages/MenuSection";
import PlaceDescription from "./pages/PlaceDescription";
import ReservationForm from "./pages/ReservationForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" overflow-x-hidden">
      <Hero />
      <SecondSection />
      <ThirdSection />
      <ForthSection />
      <FifthSection />
      <MenuSection />
      <PlaceDescription />
      <ReservationForm />
      <Footer />
    </div>
  );
}

export default App;
