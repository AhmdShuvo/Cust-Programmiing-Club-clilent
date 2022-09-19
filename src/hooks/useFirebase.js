import React, { useEffect, useState } from 'react';
import initializeFirebase from "../Pages/LogIn/Firebase/firebase.init.js"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken, signOut, sendPasswordResetEmail } from "firebase/auth";





initializeFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [approved, setApproved] = useState('');
    const [token, setToken] = useState('');
    const auth = getAuth();
    const [admin,setIsAdmin]=useState(false)




    // register

    const registerUser = (email, password, name, history) => {
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

                history('/')
            })
            .catch((error) => {

                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false));
    }


    // User Login
    const loginUser = (email, password, location) => {
     
        return signInWithEmailAndPassword(auth,email,password)

    }


    const forgetPassword=(email)=>{
        sendPasswordResetEmail(auth, email)
        .then(() => {
          // Password reset email sent!

          // ..
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }

     // Observe user state

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


    const saveUsertoDb=(email,displayName,password)=>{

        const user={email,displayName,password};
      
        fetch('https://desolate-headland-20264.herokuapp.com/users',{
          method:'POST',
          headers:{ "content-type": 'application/json'},
                 body:JSON.stringify(user)
      
        })
      
            .then()
    }
  

    // CHECK FOR APPROVAL //
    useEffect(() => {
        fetch(`https://desolate-headland-20264.herokuapp.com/user/approv/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setApproved(data.approved)
            })
            .catch((e) => { })
    }, [user.email])

//  CHECK FOR ADMIN ACCCES ////
    useEffect(()=>{

        fetch(`https://desolate-headland-20264.herokuapp.com/user/admin/${user.email}`).then(res=>res.json()).then(data=>setIsAdmin(data.admin))
      
      },[user.email])

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
        setIsLoading,
       
        loginUser,
        token,
        approved,
        
        logOut,
        saveUsertoDb,forgetPassword

    }
};

export default useFirebase;