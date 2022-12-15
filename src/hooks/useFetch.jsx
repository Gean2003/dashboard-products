import axios from "axios";
import {useEffect, useState } from "react";

export const useFetch = () => {
    const [isLoading, setIsLoading] = useState(null)
    const [userData, setUserData] = useState()
    

    const getUser = (url) => {
        useEffect(() => {
            axios.get(url)
                .then(res => {
                    setUserData(res.data)
                })
                .catch(err => console.log(err))
        },[])
    }
    return {userData, getUser}
    
};
