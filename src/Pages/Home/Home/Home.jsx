import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Navbar from "../Navbar/Navbar";
import Project from "../Project/Project";
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
      <div id="project" >
        <Project/>
      </div>
      <div id="contact" >
        <Contact/>
      </div>
      
    </div>
  );
};

export default Home;
