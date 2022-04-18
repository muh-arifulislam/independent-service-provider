import React, { useState } from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../images/google-logo.png';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleLoading, googleRrror] = useSignInWithGoogle(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleSubmit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
            .then(() => {
                event.target.reset();
            })
    }
    return (
        <div className='border w-50 d-flex flex-column jutify-content-center align-items-center p-3 mt-5 mx-auto'>
            <form onSubmit={handleSubmit} className='w-100 p-5'>
                <h2 className='text-center'>Please Login!</h2>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input onBlur={handleEmailBlur} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" className="form-control" id="exampleInputPassword1" required />
                </div>
                <div>
                    <p>Don't you have any account? <Link to='/signup'>create</Link> account</p>
                    <p>{error?.message}</p>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <div className='d-flex justify-content-center mt-2'>
                    <div className='w-25'><hr /></div>
                    <p className='mx-5'>or</p>
                    <div className='w-25'> <hr /></div>
                </div>
            </form>
            <div className=' d-flex justify-content-center'>
                <button onClick={() => signInWithGoogle()} className='p-2 btn border'>
                    <img src={logo} width='50px' height='50px' alt="" />
                </button>
            </div>
        </div>
    );
};

export default Login;