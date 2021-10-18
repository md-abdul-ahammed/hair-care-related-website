import React from 'react';
import { Carousel } from 'react-bootstrap';
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
                        <h3 className='res-m-0 res-fs-4'>First slide label</h3>
                        <p className='res-m-0 res-fs-3'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                        <h3 className='res-m-0 res-fs-4'>Second slide label</h3>
                        <p className='res-m-0 res-fs-3'>Lorem ipsum dolor sit amet.</p>
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
                        <h3 className='res-m-0 res-fs-4'>Third slide label</h3>
                        <p className='res-m-0 res-fs-3'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <button className='btn default-btn-regular text-white res-fs-3'>View Before / After Gallery</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;