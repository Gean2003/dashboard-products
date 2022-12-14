import { Outlet } from "react-router-dom";
import notifications from '../assets/Notifications.svg'

const AuthLayout = () => {

    return (
        <div className="flex w-full h-screen items-center justify-center gap-10">
             <Outlet />          
            <div className='w-[40%] h-screen flex items-center justify-center'>
                <img className='w-[90%]' src={notifications}/>
            </div>
        </div>
    );
};

export default AuthLayout

