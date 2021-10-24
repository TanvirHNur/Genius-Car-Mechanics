import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ManageServices = () => {
    const [services,setServices]=useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then(res=> res.json())
        .then(data => setServices(data))
    },[])

    const handleDelete =(id) =>{
        console.log('hell');
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            
            if(data.deletedCount > 0){
                const remainingServices = services.filter(service => service._id !== id);
            setServices(remainingServices)
                alert('Deleted')
            }
        })
    }

    return (
        <div>
            <h2>Manage Services</h2>
            {
                services.map(service => <div key={service._id}>
                    <h4>{service.firstName} </h4>
                    <button onClick={()=> handleDelete(service._id)}>Delete</button>
                    </div>)
            }
        </div>
    );
};

export default ManageServices;