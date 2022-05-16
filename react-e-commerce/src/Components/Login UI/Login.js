import React from "react";
import { useRef } from "react";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = props => {

    const uemail = useRef('');
    const upass = useRef('');

    const submitForm = event => {
        event.preventDefault();

        console.log(uemail.current.value + "|" + upass.current.value);

        const userEmail = uemail.current.value;
        const userPass = upass.current.value;

        const auth = getAuth(props.fb);

        signInWithEmailAndPassword(auth, userEmail, userPass)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                props.onUserLoggedIn(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });

    }

    return (
        <div className="p-4 dark:bg-slte-700 w-3/12">
            <form onSubmit={submitForm}>
                <div>
                    <label className='text-cyan-200'>Email</label>
                    <input type='text' ref={uemail} />
                </div>
                <div>
                    <label className='text-cyan-200'>Password</label>
                    <input type='password' ref={upass} />
                </div>
                <div>
                    <input className='text-cyan-200' type='submit' value='Login' />
                </div>
            </form>
        </div>
    );
}

export default Login;