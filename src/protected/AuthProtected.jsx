import { Navigate, Outlet } from "react-router-dom";

const AuthProtected = () => {
        const token = localStorage.getItem('token') ;
    if (token) {
        return <Outlet />
    }else {
        return <Navigate to='/login'/>
    }
    
};

export default AuthProtected
