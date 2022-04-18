import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
const Service = ({ service }) => {
    const { name, price, id, img, description } = service;
    return (
        <div className='col-lg-4'>
            <div className="card p-3">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-title">Price: ${price}</h6>
                    <p className="card-text service-description">Description: {description}</p>
                    <Link to='/checkout'><button className='btn btn-primary'>Book Appoinment</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;