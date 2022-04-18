import React, { useState } from 'react';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../images/google-logo.png';
import './Login.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { async } from '@firebase/util';
import { Button, Toast } from 'react-bootstrap';
const Login = () => {
    // previous page 
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    // sign in with email and password 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleSubmit = async event => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
            })



    }
    // sign in with google 
    const [signInWithGoogle, googleLoading, googleRrror] = useSignInWithGoogle(auth);
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true });
            })
    }
    // password reset 
    const [displayToast, setDisplayToast] = useState(false);
    const [sendPasswordResetEmail, sending, error4] = useSendPasswordResetEmail(
        auth
    );
    const handleResetPasswordToast = async () => {
        setDisplayToast(true)
    }
    const handleResetPassword = () => {
        if (email) {
            sendPasswordResetEmail(email)
        }
        else {
            setError('enter email then clicked on reset password')
            setDisplayToast(false);
        }
    }
    return (
        <div className='login-container border d-flex flex-column jutify-content-center align-items-center p-3 my-5 mx-auto '>
            {
                displayToast && <div>
                    <Toast>
                        <Toast.Header>
                            <strong className="me-auto">Do you want to continue</strong>
                        </Toast.Header>
                        <Toast.Body className='text-center'>
                            <button onClick={handleResetPassword} className='btn btn-primary me-3'>Yes</button>
                            <button onClick={() => setDisplayToast(false)} className='btn btn-primary'>No</button>
                        </Toast.Body>
                    </Toast>
                </div>
            }
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
                    <p>Forgotten you password? <span onClick={handleResetPasswordToast} className='reset-btn'>reset password</span></p>
                </div>
                <div>
                    <p className='text-center text-danger'>{error && error}</p>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <div className='d-flex justify-content-center mt-2'>
                    <div className='w-25'><hr /></div>
                    <p className='mx-5'>or</p>
                    <div className='w-25'> <hr /></div>
                </div>
            </form>
            <div className=' d-flex justify-content-center'>
                <button onClick={() => handleGoogleSignIn()} className='p-2 btn border'>
                    <img src={logo} width='50px' height='50px' alt="" />
                </button>
            </div>
        </div>
    );
};

export default Login;