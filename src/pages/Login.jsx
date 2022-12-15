import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import AlertMessage from "../components/AlertMessage";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
    const [email, setEmail] = useState('') ;
    const [password, setPassword] = useState('') ;
    const [alert, setAlert] = useState({msg:'', error:false});
    const { login, error, isLoading } = useLogin() ;

    const handleLogin = async  (e) => {
        e.preventDefault()

        if (password==='') {
            return setAlert({msg:'Fields are require', error:true})       
        }

        if(error){
           setAlert({msg: 'Incorrect credentials', error:true})
        }

        await login(email, password)

    } ;

    return ( 
        <form className='w-[420px]  border-black-500 bg-white rounded-xl border-2  py-4 px-4 flex flex-col gap-3 h-auto justify-center' onSubmit={handleLogin} > 
            <h3 className='text-center text-2xl my-3 text-blue-500 font-semibold'>Login</h3>
            <label className='text-gray-500 mt-3'>Email:</label>
            <input className='py-3 px-2 mb-3 rounded-xl bg-[#F5F3F5] outline-none' placeholder='example@mail.com' required  type="email" onChange={ (e) => setEmail(e.target.value) }  value={email} />
            <label className='text-gray-500 mt-3'>Password:</label>
            <input className='py-3 px-2 mb-3 rounded-xl bg-[#F5F3F5] outline-none' placeholder='xxxxxxx' type="password" onChange={ (e) => setPassword(e.target.value) }  value={password} />
            <AlertMessage alert={alert}/>
            <div>
              <Link to='/sign-up' className='text-blue-700'>you don't have acount? Register </Link>  
            </div>
            { localStorage.getItem('token')? <Navigate to='/dashboard'/> : ""}
            <button className='my-3 w-full py-3 px-3 bg-blue-600 text-white text-lg mx-auto rounded-xl transition-all hover:scale-105' >Login</button>

        </form>
    )
    
} ;

export default Login
