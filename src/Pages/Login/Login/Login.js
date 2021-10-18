import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { BsGoogle } from "react-icons/bs";
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../Images/logo.png'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className='d-flex justify-content-around res-flex-column container align-items-center pt-5'>
            <form className='mt-5 mb-3'>
                <img className='logo2-fluid mb-3' src={logo} alt="" />
                <input className='simple-border focus-input primary-input py-3 px-4 d-block mb-3' placeholder='Email' type="email" />
                <input className='simple-border focus-input primary-input py-3 px-4 d-block mb-3' placeholder='Password' type="password" />
                <button className='primary-input py-3 px-3 d-block mb-3 default-btn-regular rounded-pill text-white'>Log In</button>
                <p>Are you New Member? Please, <Link className='fw-bold default-text-color' to='/register'>Create an account</Link></p>
            </form>
            <div>
                <h1 className='text-center'>Or, Login With</h1>
                <button onClick={signInUsingGoogle} className='primary-input py-2 px-1 rounded-pill d-block mb-3 bg-danger border-none text-white border-0'><span className='fs-5'><BsGoogle /></span> Login With Google</button>
            </div>
        </div>
    );
};

export default Login;