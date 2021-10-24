import React from 'react';
import './NotFound.css'
import { Link } from 'react-router-dom';
import img from '../../images/404.png'
const NotFound = () => {
    return (
        <div className="not-found">
            <img style={{width: '80%'}} src={img} alt="" />
            <br />
            <Link to="/home">Go back</Link>
        </div>
    );
};

export default NotFound;