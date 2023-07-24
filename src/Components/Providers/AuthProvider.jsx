import React, { createContext, useEffect, useState } from 'react';
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/Firebase';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
// const facebookAuthProvider = FacebookAuthProvider.credentialFromResult();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
      }
      
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = () =>{
        return signOut(auth)
    }
    const googleSignInUser = () =>{
        return signInWithPopup(auth, googleProvider)
    }
    const facebookSignInUser = () =>{
        return signInWithPopup(auth, facebookProvider)
    }
    const facebookAuthProvider = (result) =>{
        return FacebookAuthProvider.credentialFromResult(result)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        setUser,
        createUser,
        signInUser,
        signOutUser,
        loading,
        setLoading,
        googleSignInUser,
        facebookSignInUser,
        facebookAuthProvider

    }
    // console.log(user)
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;