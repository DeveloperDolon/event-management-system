import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const twitterProvider = new TwitterAuthProvider();

    const createUserWithEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logInWithEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const logInWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    }

    const logInWithTwitter = () => {
        return signInWithPopup(auth, twitterProvider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = {
        createUserWithEmailPassword,
        logInWithEmailPassword,
        user,
        logOut,
        logInWithGoogle,
        logInWithGithub,
        logInWithTwitter
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log("right now current user ",currentUser);
        })

        return () => {
            unSubscribe;
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
}