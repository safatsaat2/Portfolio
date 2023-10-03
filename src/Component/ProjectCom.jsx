const ProjectCom = ({imgLink, name, madeWith, live, client, server}) => {
  return (
    <div>
      <div className="text-word h-[600px] border rounded grid items-center justify-center pb-2 border-bg w-full lg:w-[400px]">
        <div className="w-full">
          <img
            className="w-full px-2"
            src={imgLink}
            alt=""
          />
        </div>
        <h3 className="text-3xl py-4 font-bold mx-2">{name}</h3>
        <p className="text-sm pb-4 mx-2">
          Made with {madeWith}
        </p>
        <div className="flex justify-between text-sm mx-2">
        <a target='blank' href={live}> <button className="border border-bg hover:bg-word hover:text-bg px-4 py-2 font-medium rounded-md">
           Live Site
          </button></a>
          <a target='blank' href={client}> <button className="border border-bg hover:bg-word hover:text-bg px-4 py-2 font-medium rounded-md">
            Client Side
          </button></a>
          {server === "" ? <></> : <a target='blank' href={server}><button className="border border-bg hover:bg-word hover:text-bg px-4 py-2 font-medium rounded-md">
            Server Side
          </button></a>}
        </div>
      </div>
    </div>
  );
};

export default ProjectCom;
