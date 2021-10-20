import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Checkout = () => {
    return (
        <div className='pt-5'>
            <div className='mt-5 pt-3 mb-5 pb-3 bg-img'>
                <div className='container pt-5 pb-5'>
                    <h3 className='fw-bold'>OUR <span className='default-s-color'>BEFORE AFTER </span> GALLERY</h3>
                    <p className='text-muted'>A little look at some of the results we have achieved.</p>
                </div>
            </div>
            <CardGroup className='container mb-5'>
                <Card>
                    <Card.Img variant="top" src='https://i.ibb.co/51zNjrr/gallery-3-3.jpg' />
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://i.ibb.co/Wf2rnN7/gallery-3-2.jpg" />
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://i.ibb.co/rMXcNHh/gallery-3-1.jpg" />
                </Card>
            </CardGroup>
        </div>
    );
};

export default Checkout;