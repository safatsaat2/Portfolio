import ProjectCom from "../../../Component/ProjectCom";
import Title from "../../../Component/Title";
import "./Project.css"

const Project = () => {
  return (
    <div className="py-40">
      <Title heading="Projects" />
      <div className="grid mt-20 grid-cols-1 justify-center items-start mx-2 gap-y-4 lg:mx-auto max-w-[1280px] lg:grid-cols-3">
        
        <ProjectCom imgLink='https://i.ibb.co/9hm6CLV/Frame-9.png' name="PHOTOFY" madeWith="ReactJs, NodeJs, ExpressJs, MongoDB, Tailwind, DaisyUi, Firebase" live='https://photofy-6539b.web.app/' client='https://github.com/safatsaat2/photofy-client' server='https://github.com/safatsaat2/photofy-server' />

        <ProjectCom imgLink='https://i.ibb.co/MnMKy6s/Frame-10.png' name="DIGITAL PRODUCT" madeWith="Html, TypeScript, React Js, Aircode, Stripe, Tailwind" live='https://digital-product-project.vercel.app/' client='https://github.com/safatsaat2/simple-digital-product' server='' />

        <ProjectCom imgLink='https://i.ibb.co/D7Rs38r/Frame-7-2.png' name="CHEF SQUAD" madeWith="ReactJs, NodeJs, ExpressJs, MongoDB, Tailwind, DaisyUi, Firebase" live='https://chef-squad.web.app/' client='https://github.com/safatsaat2/chef-squad' server='https://github.com/safatsaat2/chef-squad-server-main' />

        <ProjectCom imgLink='https://i.ibb.co/VvLnXNg/Frame-8-2.png' name="T CAR" madeWith="ReactJs, NodeJs, ExpressJs, MongoDB, Tailwind, DaisyUi, Firebase" live='https://tcar-world.web.app/' client='https://github.com/safatsaat2/tcar-world-client' server='https://github.com/safatsaat2/tcar-world-server-main' />

        <ProjectCom imgLink='https://i.ibb.co/b2b3VfH/Frame-11.png' name="SNEAKER CART WITH VANILLA JS" madeWith="HTML, Css, JavaScript, Tailwind" live='https://sneakers-by-safat.netlify.app/' client='https://github.com/safatsaat2/Sneakers-frontendmentors' server='' />

        <ProjectCom imgLink='https://i.ibb.co/NNLCVgF/Frame-12-1.png' name="COUNTRY GUIDE" madeWith="HTML, Css, JavaScript, API" live='https://country-guide-by-safat.netlify.app/' client='https://github.com/safatsaat2/country-guide' server='' />

        <ProjectCom imgLink='https://i.ibb.co/Zfvht3R/Frame-13-1.png' name="MUSIC PLAYER" madeWith="HTML, Css, JavaScript" live='https://ashi-bole-gelo-music-player.netlify.app/' client='https://github.com/safatsaat2/music-player' server='' />

        <ProjectCom imgLink='https://i.ibb.co/Y02HsMg/Frame-14-1.png' name="Cringe Jokes Generator" madeWith="HTML, Css, JavaScript" live='https://cringejoker.netlify.app/' client='https://github.com/safatsaat2/joke-reader' server='' />
        <ProjectCom imgLink='https://i.ibb.co/V2vnZLm/Frame-15-1.png' name="PIANO SIMULATOR" madeWith="HTML, Css, JavaScript" live='https://pianobysafat.netlify.app/' client='https://github.com/safatsaat2/Piano' server='' />


        
      </div>
    </div>
  );
};

export default Project;
