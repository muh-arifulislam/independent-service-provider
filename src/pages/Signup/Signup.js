import { updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/google-logo.png';
const Signup = () => {
    // previous page 
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [signInWithGoogle, googleLoading, googleRrror] = useSignInWithGoogle(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error2, setError2] = useState(false);
    const handleNameBlur = event => {
        setName(event.target.value);
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }
    const [updateProfile, updating, error1] = useUpdateProfile(auth);
    const handleSubmit = async event => {
        event.preventDefault();
        if (password === confirmPassword) {
            console.log('hhh');
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name })
            await navigate(from, { replace: true });
        }
        else {
            setError2(true);
            event.target.reset();
        }


    }
    const handleSignInWithGoogle = async () => {
        await signInWithGoogle();
        await navigate(from, { replace: true });
    }
    return (
        <div className='border d-flex flex-column jutify-content-center align-items-center p-3 my-5 mx-auto login-container'>
            <form onSubmit={handleSubmit} className='w-100 p-5'>
                <h2 className='text-center'>Please Sign up!</h2>
                <div className="mb-3">
                    <label className="form-label">Your Name</label>
                    <input onBlur={handleNameBlur} type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input onBlur={handleEmailBlur} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" className="form-control" id="exampleInputPassword1" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input onBlur={handleConfirmPasswordBlur} type="password" className="form-control" id="exampleInputPassword2" required />
                </div>
                <div>
                    <p>{error?.message}</p>
                </div>
                <div>
                    <p className='text-center text-danger'>{error2 && 'Your password do not matched!!!'}</p>
                </div>
                <button type="submit" className="btn btn-primary">Sign up</button>
                <div className='d-flex justify-content-center mt-2'>
                    <div className='w-25'><hr /></div>
                    <p className='mx-5'>or</p>
                    <div className='w-25'> <hr /></div>
                </div>
            </form>
            <div className=' d-flex justify-content-center'>
                <button onClick={handleSignInWithGoogle} className='p-2 btn border'>
                    <img src={logo} width='50px' height='50px' alt="" />
                </button>
            </div>
        </div>
    );
};

export default Signup;