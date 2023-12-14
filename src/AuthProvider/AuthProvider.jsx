import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,GoogleAuthProvider, GithubAuthProvider, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import app from '../Firebase/Firebase.config';

export const AuthContext=createContext()
const auth= getAuth(app)
const Googleprovider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user,setUser]=useState()
    const [loading,setLoading]=useState(false)

    const SignUp=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
      
    }

    const googleSignUp=()=>{
        setLoading(true)
        return GithubAuthProvider(auth,Googleprovider)

    }

    const LogIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{

    const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
        console.log('this is inside the user',currentUser)
        setUser(user)
        setLoading(true)
    })

    return ()=>{
        unsubscribe()
    }
    },[])

    const authInfo={
        SignUp,
        LogIn,
        googleSignUp,
        user,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;