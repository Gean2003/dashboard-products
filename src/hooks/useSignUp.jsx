import axios from "axios";
import { useState } from "react";

export const useSignUp = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const signup = async (email, name, password) => {
        setIsLoading(true)
        setError(null)
        
        const body = {
            name: name,
            email:email,
            password:password,
            avatar:"https://avatar.com"
        }

        axios.post('https://api.escuelajs.co/api/v1/users/', body)
        .then( res => {
                    // localStorage.setItem('token', res.data.email) 
                    // dispatch({type: 'LOGIN', payload: json})
                    setIsLoading(false)
            } )
        .catch( err => {
                setIsLoading(false)
                setError(err)
            } )
        
    } ;

    return {signup, isLoading, error}
    
}  ;
