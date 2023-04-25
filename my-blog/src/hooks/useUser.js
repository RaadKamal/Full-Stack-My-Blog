import{useState,useEffect} from 'react';
import{getAuth,onAuthStateChanged} from 'firebase/auth';

//const user=userUser();
const useUser=()=>{
    const[user,setUser]=useState(null);
    const[isLoading,setIsLoading]=useState(true);

    useEffect(()=>
    {
        const unsbscribe=onAuthStateChanged(getAuth(),user=>{
            setUser(user);
            setIsLoading(false);
        });

        return unsbscribe;
    },[])

return{user,isLoading}
}

export default useUser;