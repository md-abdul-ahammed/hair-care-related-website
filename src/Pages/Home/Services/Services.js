import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import useServices from '../../../Hooks/useServices';
import './Services.css'

const Services = () => {
    const [services] = useServices();

    return (
        <div className='mb-5 py-5 default-bg-color' id='services'>
            <div className='container mx-auto'>
                <div className='d-flex flex-sm-row flex-column sm-align-start justify-content-between align-items-center px-4'>
                    <div>
                        <h3>Hair Loss Treatments</h3>
                        <p>Our haircare clinic’s team provides many kinds of hair care treatments.</p>
                    </div>
                    <div>
                        <button className='btn default-btn-regular text-white res-fs-3'>View All Services</button>
                    </div>
                </div>
                <div className='px-4'>
                    <hr />
                </div>
                <Row xs={1} md={3} className="g-4 px-4">
                    {
                        services.map(service =>
                            <div key={service.id}>
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={service.img} />
                                        <Card.Body>
                                            <Card.Title>{service.name}</Card.Title>
                                            <Card.Text>
                                                {service.short_description}
                                            </Card.Text>
                                            <Card.Text>
                                                <button className='btn default-btn-regular text-white res-fs-3'>Details</button>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </div>
                        )
                    }
                </Row>
            </div>
        </div>
    );
};

export default Services;