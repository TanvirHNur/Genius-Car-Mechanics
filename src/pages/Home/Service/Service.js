import React from 'react';
import { Link } from 'react-router-dom';
import './service.css'

const Service = ({service}) => {
    const { _id, name, price, img, description}=service
    return (
        <div className="service pb-3">
           <img src={img} alt="" />
           <h3>{name}</h3>
           <h5>${price}</h5>
           <p className="px-3">{description}</p>
           <Link to={`booking/${_id}`}>
           <button className="btn btn-info">Book {name}</button>
           </Link>
        </div>
    );
};

export default Service;