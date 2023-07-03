import { Icon } from "@iconify/react";
import { Link } from "react-scroll";

const Contact = () => {
  return (
    <div className="border-t-2 border-bg max-w-[1280px] mx-auto rounded">
      <div className="flex justify-between items-center">
        <Link to="banner" spy={true} smooth={true} offset={0} duration={500}>
          <img
            className="w-10 py-5 ml-5 cursor-pointer"
            src="https://i.ibb.co/xLz4B10/Frame-4.png"
            alt=""
          />
        </Link>

        <button className="text-xl px-3 py-1 rounded bg-word text-bg font-medium hover:text-word hover:bg-bg transition-all duration-500"><a href="../../../../public/Resume.pdf">Download Resume</a></button>
        
        <div className="flex mr-5">
          <a target="blank" href="https://github.com/safatsaat2">
            <Icon
              className="text-word text-4xl transition-all duration-500 hover:-translate-y-1"
              icon="mdi:github"
            />
          </a>
          <a target="blank" href="mailto:sakibsafat47@gmail.com">
            <Icon
              className="text-word text-4xl transition-all duration-500 hover:-translate-y-1"
              icon="mdi:gmail"
            />
          </a>
          <a target="blank" href="https://www.linkedin.com/in/sakibur-safat/">
            <Icon
              className="text-word text-4xl transition-all duration-500 hover:-translate-y-1"
              icon="mdi:linkedin"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
