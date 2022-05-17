import React, { useState } from "react";
import { useRef } from "react";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = props => {

    const uemail = useRef('');
    const upass = useRef('');

    const [loginError, setLoginError] = useState('');

    const submitForm = event => {
        event.preventDefault();
        setLoginError('');
        //console.log(uemail.current.value + "|" + upass.current.value);

        const userEmail = uemail.current.value;
        const userPass = upass.current.value;

        const validEmail = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}');

        if (userEmail === "" && userPass === "") setLoginError("Email and password are mandatory to login");
        else if (userEmail === "") setLoginError("Email is mandatory to login");
        else if (userPass === "") setLoginError("Password is mandatory to login");
        else if (!validEmail.test(userEmail)) setLoginError("Invalid email");
        else {
            const auth = getAuth(props.fb);

            signInWithEmailAndPassword(auth, userEmail, userPass)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    //props.onUserLoggedIn(user);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    //console.log(errorMessage);
                    if(errorMessage.indexOf("wrong-password") !== -1 || errorMessage.indexOf("user-not-found") !== -1){
                        setLoginError("Email or password is incorrect!");
                    }
                });
        }

    }

    return (
        <div className="m-0 p-0 h-screen w-screen bg-slate-900 flex flex-col justify-center">
            <form onSubmit={submitForm} className="m-auto max-w-lg bg-slate-600 p-4 flex gap-3 flex-col justify-center border-solid rounded-md shadow-lg">
                <div className="input-container">
                    <label className='text-cyan-200 text-left font-semibold text-lg'>Welcome back!</label>
                </div>
                <p className={(loginError === "" ? 'text-red-400 text-left w-64 hidden' : 'text-red-400 text-left w-64 block')}>{loginError}</p>
                <div className="input-container">
                    <label className='input-label'>Email</label>
                    <input type='text' ref={uemail} className="input-field" />
                </div>
                <div className="input-container">
                    <label className='input-label'>Password</label>
                    <input type='password' ref={upass} className="input-field" />
                </div>
                <div className="input-container">
                    <input className='input-button' type='submit' value='Login' />
                </div>
            </form>
        </div>
    );
}

export default Login;