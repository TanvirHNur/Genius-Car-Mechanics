import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import Service from '../../Home/Service/Service';

const Booking = () => {
    const {serviceId}=useParams();
    const [service, setService]= useState({})
    useEffect( ()=>{
        // const url =`http://localhost:5000/services/${serviceId}`
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res=> res.json())
        .then(data => setService(data))
        console.log(service)

    } , [])
    return (
        <div>
            <h2>Details of: {service.firstName}</h2>
        </div>
    );
};

export default Booking;