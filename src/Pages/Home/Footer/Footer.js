import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Images/footer-logo.png'

const Footer = () => {
    return (
        <div className='bg-dark px-3 py-5'>
            <div className='row container-fluid g-5 mx-auto text-white justify-content-between'>
                <div className='col-md-3'>
                    <img src={logo} alt="" />
                    <hr />
                    <p className='text-muted'>We have over 35 years’ experience in hair restoration, 25 clinics globally and have treated over 100,000 satisfied patients.</p>
                </div>
                <div className='col-md-2'>
                    <h6 className='text-warning'>CONTACT INFO</h6>
                    <hr />
                    <p className="text-muted">
                        9870 st vincent place,
                        Glasgow, DC 45 FR 45
                        1800-123-4567
                        info@hairloss.com
                    </p>
                </div>
                <div className='col-md-2'>
                    <h6 className='text-warning'>QUICK LINKS</h6>
                    <hr />
                    <Link className='d-block text-decoration-none text-muted mb-1' to='/home'>Home</Link>
                    <Link className='d-block text-decoration-none text-muted mb-1' to='/home'>Pricing</Link>
                    <Link className='d-block text-decoration-none text-muted mb-1' to='/home'>Services</Link>
                    <Link className='d-block text-decoration-none text-muted mb-1' to='/home'>Contact Us</Link>
                </div>
                <div className='col-md-3'>
                    <h6 className='text-warning'>NEWSLETTER</h6>
                    <hr />
                    <p className='text-muted'>Sign up for Newsletter to know updates from here...</p>
                    <input type="email" className='form-control ' name="" id="" />
                    <button className='btn default-btn-regular text-white res-fs-3 mt-3'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Footer;