import React from 'react';
import './Pricing.css';
import { GoPrimitiveDot } from "react-icons/go";
import { Card, Col, Row } from 'react-bootstrap';

const Pricing = () => {
    return (
        <div className='pt-5'>
            <div className='mt-5 pt-3 pb-3 bg-img mb-5'>
                <div className='container pt-5 pb-5'>
                    <h3 className='fw-bold default-s-color'>PRICING</h3>
                    <p className='text-muted'>The easiest way to find out what the price and duration of a hair care’s treatment course.</p>
                </div>
            </div>
            <div className='mb-5 py-5 default-bg-color' id='services'>
                <div className='container mx-auto'>
                    <div className='d-flex flex-sm-row flex-column sm-align-start justify-content-start align-items-center px-4'>
                        <div>
                            <h3 className='fw-bold'>The Cost of Hair Treatments With The Haircare</h3>
                            <p className='text-muted'>Setamet consectetur adipiscing eorbi vitae metus quamonec dignissim sagitiec suscinteger.</p>
                        </div>
                    </div>
                    <div className='px-4'>
                        <hr />
                    </div>
                    <Row xs={1} md={4} className="g-4 px-4 pt-4">
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title> <span className='fs-6 fw-bold'>HAIR TRANSPLANTATION</span> </Card.Title>
                                    <hr />
                                    <Card.Text className='d-flex justify-content-start align-items-center text-muted'>
                                        <GoPrimitiveDot className='fs-4 me-2 default-s-color' />  Doctor Consultation
                                    </Card.Text>
                                    <Card.Text className='d-flex justify-content-start align-items-center text-muted'>
                                        <GoPrimitiveDot className='fs-4 me-2 default-s-color' />  Hair Transplantaion Surgery
                                    </Card.Text>
                                    <Card.Text className='d-flex justify-content-start align-items-center text-muted'>
                                        <GoPrimitiveDot className='fs-4 me-2 default-s-color' />  Dressing
                                    </Card.Text>
                                    <Card.Text className='d-flex justify-content-start align-items-center text-muted'>
                                        <GoPrimitiveDot className='fs-4 me-2 default-s-color' />  After Care Treatment
                                    </Card.Text>
                                    <Card.Text className='d-flex justify-content-start align-items-center text-muted'>
                                        <GoPrimitiveDot className='fs-4 me-2 default-s-color' />  Medicines
                                    </Card.Text>
                                    <Card.Footer>
                                        <small className="default-p-color fw-bold d-flex justify-content-center fs-5">$999</small>
                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title> <span className='fs-6 fw-bold'>HAIR REPLACEMENT</span> </Card.Title>
                                    <hr />
                                    <Card.Text className='d-flex justify-content-start align-items-center text-muted'>
                                        <GoPrimitiveDot className='fs-4 me-2 default-s-color' />  Hair Transplantaion Surgery
                                    </Card.Text>
                                    <Card.Text className='d-flex justify-content-start align-items-center text-muted'>
                                        <GoPrimitiveDot className='fs-4 me-2 default-s-color' />  Doctor Consultation
                                    </Card.Text>
                                    <Card.Text className='d-flex justify-content-start align-items-center text-muted'>
                                        <GoPrimitiveDot className='fs-4 me-2 default-s-color' />  After Care Treatment
                                    </Card.Text>
                                    <Card.Text className='d-flex justify-content-start align-items-center text-muted'>
                                        <GoPrimitiveDot className='fs-4 me-2 default-s-color' />  Medicines
                                    </Card.Text>
                                    <Card.Text className='d-flex justify-content-start align-items-center text-muted'>
                                        <GoPrimitiveDot className='fs-4 me-2 default-s-color' />  Dressing
                                    </Card.Text>
                                    <Card.Footer>
                                        <small className="default-p-color fw-bold d-flex justify-content-center fs-5">$979</small>
                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title> <span className='fs-6 fw-bold'>HAIR RESTORATION</span> </Card.Title>
                                    <hr />
                                    <Card.Text className='d-flex justify-content-start align-items-center text-muted'>
                                        <GoPrimitiveDot className='fs-4 me-2 default-s-color' />  Dressing
                                    </Card.Text>
                                    <Card.Text className='d-flex justify-content-start align-items-center text-muted'>
                                        <GoPrimitiveDot className='fs-4 me-2 default-s-color' />  After Care Treatment
                                    </Card.Text>
                                    <Card.Text className='d-flex justify-content-start align-items-center text-muted'>
                                        <GoPrimitiveDot className='fs-4 me-2 default-s-color' />  Hair Transplantaion Surgery
                                    </Card.Text>
                                    <Card.Text className='d-flex justify-content-start align-items-center text-muted'>
                                        <GoPrimitiveDot className='fs-4 me-2 default-s-color' />  Medicines
                                    </Card.Text>
                                    <Card.Text className='d-flex justify-content-start align-items-center text-muted'>
                                        <GoPrimitiveDot className='fs-4 me-2 default-s-color' />  Doctor Consultation
                                    </Card.Text>
                                    <Card.Footer>
                                        <small className="default-p-color fw-bold d-flex justify-content-center fs-5">$990</small>
                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title> <span className='fs-6 fw-bold'>LASER HAIR TREATMENT</span> </Card.Title>
                                    <hr />
                                    <Card.Text className='d-flex justify-content-start align-items-center text-muted'>
                                        <GoPrimitiveDot className='fs-4 me-2 default-s-color' />  After Care Treatment
                                    </Card.Text>
                                    <Card.Text className='d-flex justify-content-start align-items-center text-muted'>
                                        <GoPrimitiveDot className='fs-4 me-2 default-s-color' />  Doctor Consultation
                                    </Card.Text>
                                    <Card.Text className='d-flex justify-content-start align-items-center text-muted'>
                                        <GoPrimitiveDot className='fs-4 me-2 default-s-color' />  Hair Transplantaion Surgery
                                    </Card.Text>
                                    <Card.Text className='d-flex justify-content-start align-items-center text-muted'>
                                        <GoPrimitiveDot className='fs-4 me-2 default-s-color' />  Dressing
                                    </Card.Text>
                                    <Card.Text className='d-flex justify-content-start align-items-center text-muted'>
                                        <GoPrimitiveDot className='fs-4 me-2 default-s-color' />  Medicines
                                    </Card.Text>
                                    <Card.Footer>
                                        <small className="default-p-color fw-bold d-flex justify-content-center fs-5">$989</small>
                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Pricing;