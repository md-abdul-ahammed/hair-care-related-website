import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useServices from '../../../Hooks/useServices';

const Service = () => {
    const [services] = useServices();
    const { serviceId } = useParams();
    const [serviceDetails, setServiceDetails] = useState({});



    useEffect(() => {
        setServiceDetails(services.find(service => service.id === +serviceId))
    }, [services])

    return (
        <div className='p-5'>
            <div className='row container mx-auto justify-content-between align-items-center pt-5'>
                <div className="col-md-7">
                    <h1 className='fw-bold'>
                        {serviceDetails?.name}
                    </h1>
                    <p className='text-muted'>
                        {serviceDetails?.long_description}
                    </p>
                    <button className='btn default-btn-regular text-white px-5 fw-bold mb-4'>Pricing {serviceDetails?.name}</button>
                </div>
                <div className="col-md-5">
                    <img src={serviceDetails?.img} className='w-100' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Service;