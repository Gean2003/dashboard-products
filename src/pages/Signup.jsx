import { useState } from "react";
import { Link } from "react-router-dom";
import AlertMessage from "../components/AlertMessage";
import { useSignUp } from "../hooks/useSignUp";

const Signup = () => {
    const [email, setEmail] = useState('') ;
    const [password, setPassword] = useState('') ;
    const [repeatPassword, setRepeatPassword] = useState('') ;
    const [name, setName] = useState('') ;
    const { signup, error, isLoading } = useSignUp() ;
    const [alert, setAlert] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault()
        setAlert({msg:'', error:false})

        if([email, password, name, password, repeatPassword].includes('')){
            return setAlert({msg: 'Fields are required', error: true})
        }

        if(password.length < 6){
            return setAlert({msg: 'Password not strong enough'})
        }
        
        if(password != repeatPassword){ 
           return  setAlert({ msg:'The password does not match', error: true })
        }

        await signup(email, name, password)
        setAlert({msg:'Register sucessfully', error:false})

    } ;

    return ( 
        <form onSubmit={handleSubmit} className='w-[420px] border-black-500 bg-white rounded-xl border-2  py-4 px-4 flex flex-col gap-3 h-auto justify-center'> 
            <h3 className='text-center text-2xl font-semibold my-3 text-blue-500'>Sign up</h3>
            <label className='text-gray-500'>Email:</label>
            <input className='py-3 px-2 mb-3 rounded-xl bg-[#F5F3F5] outline-none' placeholder='example@mail.com' required type="email" onChange={ (e) => setEmail(e.target.value) }  value={email} />
            <label className='text-gray-500'>Name:</label>
            <input className='py-3 px-2 mb-3 rounded-xl bg-[#F5F3F5] outline-none' placeholder='Pedro' required type="text" onChange={ (e) => setName(e.target.value) } value={name}/>
            <label className='mt-3 text-gray-500'>Password:</label>
            <input className='py-3 px-2 mb-3 rounded-xl bg-[#F5F3F5] outline-none' placeholder='xxxxxx' required type="password" onChange={ (e) => setPassword(e.target.value) }  value={password} />
            <label className='mt-3 text-gray-500'>Repeat Password:</label>
            <input className='py-3 px-2 mb-3 rounded-xl bg-[#F5F3F5] outline-none' placeholder='xxxxxx' required type="password" onChange={ (e) => setRepeatPassword(e.target.value) }  value={repeatPassword} />
            <AlertMessage alert={alert}/>
            <div>
              <Link to='/login' className='text-blue-700'>you have acount? Login </Link>  
            </div>
            <button className='my-3 w-full py-3 px-3 bg-blue-600 text-white text-lg mx-auto rounded-xl transition-all hover:scale-105' > Sign up</button>
        </form>
    )
    
} ;

export default Signup
