import "./App.css";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import WhyUs from "./components/sections/WhyUs";
import Majors from "./components/sections/Majors";
import Extracurricular from "./components/sections/Extracurricular";
import News from "./components/sections/News";
import Gallery from "./components/sections/Gallery";
import Alumni from "./components/sections/Alumni";
import Footer from "./components/layout/Footer";
import SchoolProfile from "./components/sections/SchoolProfile";
import Ui from "./components/sections/Majors/Ui";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <WhyUs />
      <SchoolProfile />
      <Majors />
      <Ui />
      <Extracurricular />
      <News />
      <Gallery />
      <Alumni />
      <Footer />
    </div>
  );
}

export default App;
