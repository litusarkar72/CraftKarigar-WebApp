import HeroBanner from "../components/HeroBanner";
import About from "./About";
import Contact from "./Contact";
import Shop from "./Shop";

function Home() {
  return (
    <>
      <HeroBanner />
      <Shop/>
      <About />
      <Contact />
      {/* other sections like Products, Categories */}
    </>
  );
}

export default Home;
