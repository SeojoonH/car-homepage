import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Detail from "./components/Detail";
import CloserLook from "./components/CloserLook";
import ImageSlider from "./components/ImageSlider";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Offers />
      <Detail />
      <CloserLook />
      <ImageSlider />
    </div>
  );
}

export default App;
