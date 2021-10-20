import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [name, setName] = useState('')
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();


    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false))
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleRegistration = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password at least 6 characters long.')
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user
                console.log(result.user)
                setError('')
                setUserName()



            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
                // ..
            });
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => {
                // Profile updated!
                // ...
            }).catch((error) => {
                // An error occurred
                // ...
            });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user
                console.log(result.user)
                setError('')
            })
            .catch((error) => {
                const errorMessage = error.message;

                // ..
            });
    }

    //observed user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [])

    const logout = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {

            }).catch((error) => {
                // An error happened.
            })
            .finally(() => setIsLoading(false))
    }





    return {
        user,
        setUser,
        signInUsingGoogle,
        logout,
        isLoading,
        handleRegistration,
        handleEmailChange,
        handlePasswordChange,
        handleLogin,
        handleNameChange,
        error,
        name
    }
};

export default useFirebase;