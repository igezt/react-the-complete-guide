import { useCallback, useState } from "react";



const useHttp = (link) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const sendRequest = useCallback(async (applyData, requestConfig) => {
        setIsLoading(true);
        setError(null);
        
        try {
            let data = await fetch(requestConfig.link, {
                method: requestConfig.method ? requestConfig.method : "GET",
                body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
                headers: requestConfig.headers ? requestConfig.headers : {},
            });
            
            if (!data.ok) {
                throw new Error("Oops, something went wrong!");
            }

            data = await data.json();

            applyData(data);

        } catch(e) {
            console.log(e.toString());
            setError(e.toString());
        }

        setIsLoading(false);
    }, []);
    
    return {isLoading, error, sendRequest};
};

export default useHttp;









