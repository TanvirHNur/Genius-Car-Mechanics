
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebaseAuth from "../pages/Login/fireBase/firbase-init";

initializeFirebaseAuth();


const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [loading,setLoading]=useState(true);

    const auth=getAuth();
    const googleProvider= new GoogleAuthProvider();
    const signInWithGoogle=()=>{
        setLoading(true)
        signInWithPopup(auth,googleProvider)
        .then(result=> {
            setUser(result.user)
            console.log(result.user)
        })
        .finally(() => {
            setLoading(false)
        })
    }

    const logOut= ()=>{
        setLoading(true)
        signOut(auth)
        .then(()=> {})
        .finally(()=> setLoading(false))
        .catch((error)=> {})
    }
    useEffect(()=>{
      const unsubscribed=  onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setLoading(false)
        })
        return ()=> unsubscribed;
    } ,[])

    return {
        user,
        loading,
        signInWithGoogle,
        logOut
    }
}

export default useFirebase; 