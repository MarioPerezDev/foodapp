import { useState, useCallback } from "react";

const useHttp = (url, method) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
 
    const fetchData = useCallback( async (body) => {
        setIsLoading(true);
        setError(null);
        try{           
            const response = await fetch(url, {
            method: method ? method : "GET", 
            headers: method === "POST" ? {'Content-Type' : 'application/json'} : null ,
            body : body && method === "POST" ? JSON.stringify(body) : null
            });

            if(!response.ok){
                throw new Error('Request failed');
            }
            setData(response.json());
            
        }catch(error){
            console.log(error.message || "There was an error" );
        }
        setIsLoading(false);
    },[url, method])
    

    return {
        data,
        isLoading,
        error,
        fetchData
    }
}

export default useHttp;
