import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiFillMessage } from "react-icons/ai";

const Blog = () => {
    return (
        <div className='mb-5 py-5 default-bg-color' id='blog'>
            <div className='container mx-auto'>
                <div className='d-flex flex-sm-row flex-column sm-align-start justify-content-between align-items-center px-4'>
                    <div>
                        <h3>Haircare Latest News</h3>
                        <p>Latest haircare news, photos, blogposts, videos, thoughts, stories & ideas.</p>
                    </div>
                    <div>
                        <button className='btn default-btn-regular text-white res-fs-3'>View All Blog Post</button>
                    </div>
                </div>
                <div className='px-4'>
                    <hr />
                </div>
                <Row xs={1} md={3} className="g-4 px-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src='https://i.ibb.co/1TMkKp5/blog-post-1.jpg' />
                            <Card.Body>
                                <Link to='/home' className='fs-5 text-decoration-none text-black'>
                                    What to Expect When Your Hair Transplant Done?
                                </Link>
                                <hr />
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div >
                                        16 . DECEMBER . 2021
                                    </div>
                                    <div>
                                        <AiFillMessage className='fs-5' /> 06
                                    </div>
                                </div>
                            </Card.Body>

                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src='https://i.ibb.co/kHXxZYc/blog-post-2.jpg' />
                            <Card.Body>
                                <Link to='/home' className='fs-5 text-decoration-none text-black'>Scared of Surgery? Try Non Surgical Hair Loss Treatments</Link>
                                <hr />
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div >
                                        15 . DECEMBER . 2021
                                    </div>
                                    <div>
                                        <AiFillMessage className='fs-5' /> 05
                                    </div>
                                </div>
                            </Card.Body>

                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src='https://i.ibb.co/K98ZwFY/blog-post-3.jpg' />
                            <Card.Body>
                                <Link to='/home' className='fs-5 text-decoration-none text-black'>The Hair Transplant Patient Journey</Link>
                                <hr />
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div >
                                        14 . DECEMBER . 2021
                                    </div>
                                    <div>
                                        <AiFillMessage className='fs-5' /> 07
                                    </div>
                                </div>
                            </Card.Body>

                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Blog;