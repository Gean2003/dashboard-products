import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)
        
        const body = {
            email:email,
            password:password
        }

        axios.post('https://api.escuelajs.co/api/v1/auth/login', body)
        .then( res => {
                     localStorage.setItem('token', res.data.access_token) 
                    dispatch({type: 'LOGIN', payload: json})
                    console.log(res.data)
                    setIsLoading(false)
            } )
        .catch( err => {
                setIsLoading(false)
                setError(true)
            } )
        
    } ;

    return {login, isLoading, error}
    
}  ;
