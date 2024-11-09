
import {GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase..init";
import { useState } from "react";


const Login = () => {
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()

    const handleGoogleSignIn = () => {

        signInWithPopup(auth, googleProvider)
        .then(result =>{
            console.log(result);
            setUser(result.user)
        })
        .catch(error =>{
            console.log(error);   
            setUser(null)
        })
    }
    // sign out
    const handleSignOut = () =>{
        signOut(auth)
        .then(() => {
            console.log('Sign out Done');
            setUser(null)
        })
        .catch((error) => {
            console.log(error);
        });
    }



    // Github SignIn
    const handleGithubSignIn = ()=>{
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            console.log(result.user);
            setUser(result.user)
        })
        .catch(error => {
            console.log(error);
        })
    }




    // id user exists

    return (
        <div>
            {/* <button onClick={handleGoogleSignIn}>Login with Google</button>
            <button onClick={handleSignOut}>Sign Out</button> */}
            {
                user ? <button onClick={handleSignOut}>Sign Out</button> : 
                <>
                <button onClick={handleGoogleSignIn}>Login with Google</button>
                <button onClick={handleGithubSignIn}>Login With Github</button>
                </>
            }
            {
                user && <div>
                    <h3>User Name: {user.displayName}</h3>
                    <h4>Email: {user.email}</h4>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;
