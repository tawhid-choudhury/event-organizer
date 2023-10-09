import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    // console.log(children);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);


    // facebook
    const facebookSignin = () => {
        setLoader(true);
        return signInWithPopup(auth, facebookProvider);
    }

    // Google
    const googleSignin = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider);
    }

    // email registration
    const regEmailPass = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // email login
    const loginEmailPass = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout
    const logout = () => {
        setLoader(true);
        return signOut(auth);
    }

    // track user login
    useEffect(() => {
        const uns = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoader(false);
        });
        return () => {
            uns();
        }
    }, [])

    const p = { user, setUser, regEmailPass, loginEmailPass, logout, loader, googleSignin, facebookSignin }

    return (
        <AuthContext.Provider value={p}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node,
}