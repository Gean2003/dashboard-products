import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <nav className="w-full py-5 px-5  flex flex-row-reverse gap-7">
            <NavLink to='/sign-up' className="text-lg font-medium hover:text-blue-600 transition-all"> Register</NavLink>
            <NavLink to='/login' className="text-lg font-medium hover:text-blue-600 transition-all"> Login</NavLink>
        </nav>
    );
};

export default Menu

