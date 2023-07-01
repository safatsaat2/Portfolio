import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <div className="text-2xl">
            <Navbar></Navbar>
            <div className="h-screen bg-bg"></div>
            <div id="ok" name='ok' className="text-5xl">Hi</div>
        </div>
    );
};

export default Home;