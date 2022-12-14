import Menu from "../components/Menu";
import taskImg from "../assets/Designer_Flatline.svg" 

const Home = () => {

    return (
        <div className="max-w-[1920px] mx-auto bg-[#F5F3F5] h-screen ">
            <Menu />
            <h1 className="text-[48px] font-bold text-blue-500 text-center my-10">Welcome to Fake Store</h1>    

            <main className="w-full flex items-center  justify-center h-[50vh] mx-auto max-w-[1920px]"> 
                <article className="w-1/2 px-5 py-5 flex flex-col gap-7 items-start">
                    <p className="text-lg">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </p>

                    <button className="w-[80%] my-3 rounded-lg text-white mx-auto hover:scale-105 text-lg transition-all py-3 px-2 bg-blue-500">Go!!</button>
                </article>

                <article className="w-1/2 h-auto">
                    <img className="2xl:w-[70%] w-[80%]" src={taskImg} alt='task_image'/>
                </article>
            </main>

        </div>
    );
};

export default Home

