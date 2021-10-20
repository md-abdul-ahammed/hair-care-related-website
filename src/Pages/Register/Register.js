import React from 'react';
import { Link } from 'react-router-dom';
import { BsGoogle } from "react-icons/bs";
import useAuth from '../../Hooks/useAuth';
import logo from '../../Images/logo.png'

const Register = () => {
    const { signInUsingGoogle, handleRegistration, handleEmailChange, handlePasswordChange, error, handleNameChange } = useAuth();
    return (
        <div className='d-flex justify-content-around res-flex-column container align-items-center mt-5'>
            <form className='mt-5 mb-4' onSubmit={handleRegistration}>
                <img className='logo2-fluid mb-3' src={logo} alt="" />
                <input onBlur={handleNameChange} className='simple-border focus-input primary-input py-3 px-4 d-block mb-3' placeholder='Name' type="text" />
                <input onBlur={handleEmailChange} required className='simple-border focus-input primary-input py-3 px-4 d-block mb-3' placeholder='Email' type="email" />
                <input required onBlur={handlePasswordChange} className='simple-border focus-input primary-input py-3 px-4 d-block mb-3' placeholder='Password' type="password" />
                <input type='submit' value='Sign Up' className='primary-input py-3 px-3 d-block mb-3 default-btn-regular rounded-pill text-white' />
                <p className='text-danger'>{error}</p>
                <p className='text-center'>Already Registered? <Link className='fw-bold default-text-color' to='/login'>Login here</Link></p>
            </form>
            <div>
                <h1 className='text-center'>Or, Login With</h1>
                <button onClick={signInUsingGoogle} className='primary-input py-2 px-1 rounded-pill d-block mb-3 bg-danger border-none text-white border-0'><span className='fs-5'><BsGoogle /></span> Login With Google</button>
            </div>
        </div>
    );
};

export default Register;