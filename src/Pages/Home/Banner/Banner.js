import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className='mb-5 pt-5'>
            <Carousel className='pt-2'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/RT62JMJ/slider-1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-black res-p-0'>
                        <h3 className='res-m-0 res-fs-4 fw-bold'>Control your hair loss before it’s too late</h3>
                        <p className='res-m-0 res-fs-3 text-muted'>We can solve it - let us show you how.</p>
                        <button className='btn default-btn-regular text-white res-fs-3'>View Services</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/zRmHkMv/slider-2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption className='text-black res-p-0'>
                        <h3 className='res-m-0 res-fs-4 fw-bold'>Do you suffer hair loss?</h3>
                        <p className='res-m-0 res-fs-3 text-muted'>Our clinic’s team provides many kinds of hair care treatments.</p>
                        <button className='btn default-btn-regular text-white res-fs-3'>Book Free Consultation</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/H4D7LJ8/slider-3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className='res-p-0 text-black'>
                        <h3 className='res-m-0 res-fs-4 fw-bold'>Our Patient’s Results</h3>
                        <p className='res-m-0 res-fs-3 text-muted'>“I tell you how much better I feel thanks to haircare. I feel younger”</p>
                        <Link to='/gallery' className='btn default-btn-regular text-white res-fs-3'>View Before / After Gallery</Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;