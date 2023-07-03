import ProjectCom from "../../../Component/ProjectCom";
import Title from "../../../Component/Title";
import "./Project.css"

const Project = () => {
  return (
    <div className="py-40">
      <Title heading="Projects" />
      <div className="grid mt-20 grid-cols-1 mx-2 gap-y-4 lg:mx-auto max-w-[1280px] lg:grid-cols-3">
        
        <ProjectCom imgLink='https://i.ibb.co/G7sJZtg/screencapture-photofy-6539b-web-app-2023-07-03-02-49-22.png' name="PHOTOFY" madeWith="ReactJs, NodeJs, ExpressJs, MongoDB, Tailwiind, DaisyUi, Firebase" live='https://photofy-6539b.web.app/' client='https://github.com/safatsaat2/photofy-client' server='https://github.com/safatsaat2/photofy-server' />


        <ProjectCom imgLink='https://i.ibb.co/4jzrQ9S/screencapture-tcar-world-web-app-2023-07-03-02-48-52.png' name="T CAR" madeWith="ReactJs, NodeJs, ExpressJs, MongoDB, Tailwiind, DaisyUi, Firebase" live='https://tcar-world.web.app/' client='https://github.com/safatsaat2/tcar-world-client' server='https://github.com/safatsaat2/tcar-world-server-main' />


        <ProjectCom imgLink='https://i.ibb.co/myWf4gW/screencapture-chef-squad-web-app-2023-07-03-02-49-59.png' name="CHEF SQUAD" madeWith="ReactJs, NodeJs, ExpressJs, MongoDB, Tailwiind, DaisyUi, Firebase" live='https://chef-squad.web.app/' client='https://github.com/safatsaat2/chef-squad' server='https://github.com/safatsaat2/chef-squad-server-main' />
      </div>
    </div>
  );
};

export default Project;
