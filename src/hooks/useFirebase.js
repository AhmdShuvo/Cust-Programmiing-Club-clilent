 import React, { useEffect, useState } from 'react';
 import initializeFirebase from "../Pages/LogIn/Firebase/firebase.init.js"
 import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken, signOut } from "firebase/auth";





 initializeFirebase()
 const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [userType, setUserType] = useState('');
    const [token, setToken] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();




// register

    const registerUser = (email, password, name, ) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name }
                setUser(newUser);

                // Save user to the database
                // saveUser(email, name, 'POST');

                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: "https://i.postimg.cc/yx3nsc6K/avatar.png"
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });

                // history.replace('/');
            })
            .catch((error) => {

                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false));
    }


    // User Login
    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // const redirect_uri = location.state?.from || '/home';
                // history.replace(redirect_uri);
                setAuthError('');
            })
            .catch((error) => {

                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');

                // const destination = location?.history?.from || '/appointment';
                // history.replace(destination);
                setAuthError('');

            }).catch((error) => {

                setAuthError(error.message)

            }).finally(() => setIsLoading(false));
    }


     // Observe user state

     useEffect(() => {
        const unsubcribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            } else {
                setUser({})
            }
            setIsLoading(false);
        });

        return () => unsubcribed;

    }, [auth])


    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('https://shielded-falls-80975.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    console.log(user.email)
    useEffect(() => {
        fetch(`https://shielded-falls-80975.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUserType(data)
            })
            .catch((e) => { })
    }, [user.email])

    // User Logout
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.

        })
            .finally(() => setIsLoading(false));
    }
    return {
        user,
        authError,
        isLoading,
        
        registerUser,
        signInWithGoogle,
        loginUser,
        token,
        userType,
        
        logOut

    }
 };
 
 export default useFirebase;