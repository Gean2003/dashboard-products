import Menu from "../components/Menu";
import taskImg from "../assets/Designer_Flatline.svg" 
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div className="max-w-[1366px] mx-auto bg-[#F5F3F5] h-screen ">
            <Menu />
            <h1 className="text-[48px] font-bold text-blue-500 text-center my-8">Welcome to Fake Users</h1>    

            <main className="w-full flex items-center  justify-center h-[50vh] mx-auto max-w-[1920px]"> 
                <article className="w-1/2 px-5 py-5 flex flex-col gap-7 items-start">
                    <p className="text-2xl w-[450px]">welcome to fake users, register and view the data of our affiliated users and more.</p>
                    <Link to='/login' className="w-[30%] text-center my-3 rounded-lg text-white hover:scale-105 text-lg transition-all py-3 px-2 bg-blue-500">Go!!</Link>
                </article>

                <article className="w-1/2 h-auto">
                    <img className="2xl:w-[70%] w-[80%]" src={taskImg} alt='task_image'/>
                </article>
            </main>

        </div>
    );
};

export default Home

