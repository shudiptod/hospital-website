import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState, useEffect } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    //const location = useLocation();
    const history = useHistory();
    //const redirect_url = location.state?.form || "/home";

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .finally(() => {
                setIsLoading(false);
                history.push("/home");
            });
    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth]);

    const signUpWithEmail = (name, email, password) => {


        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => { });

                signInWithEmail(email, password);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    const signInWithEmail = (email, password) => {
        let check = false;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);
                check = false;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                check = true;
            })
            .finally(() => {
                setIsLoading(false);
            });
        return check;
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        signUpWithEmail,
        signInUsingGoogle,
        signInWithEmail,
        logOut
    }
}

export default useFirebase;