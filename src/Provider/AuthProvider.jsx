import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged,
signInWithEmailAndPassword, 
signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../config/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
const [user,setUser] =useState(null)
const [loading,setLoading]=useState(true)

const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, GoogleAuthProvider);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // const loguser =currentUser?.email ||user?.email
      // console.log(loguser);
      setUser(currentUser);
      setLoading(false);
const user ={user:currentUser?.email}
      if(currentUser) {
//  console.log(loguser);
        axios.post('https://ebrahim-blog0987665.vercel.app/jwt',user,{withCredentials:true})
        .then(res =>console.log(res.data))
      }
    });

    return () => {
      return unsubscribe();
    };
  }, [user]);

    const AuthInfo={
        createUser, login, user,loading, logout, googleLogin 
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;