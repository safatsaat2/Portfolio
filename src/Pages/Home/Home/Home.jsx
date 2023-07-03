import About from "../About/About";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div className="text-2xl">
      <Navbar/>
      <div id="banner">
        <Banner/>
      </div>
      <div id="about" >
        <About/>
      </div>
      <div id="skill" >
        <Skills/>
      </div>
    </div>
  );
};

export default Home;
