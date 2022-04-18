import React from 'react';
import Carousels from '../Carousels/Carousels';
import Services from '../Services/Services';
import image from '../../../images/therapy.jpg';
const Home = () => {
    return (
        <div>
            <Carousels></Carousels>
            <div className='container my-5'>
                <div className='row'>
                    <div className="col-lg-6 d-flex align-items-center">
                        <div>
                            <h2 className='mb-3'>Why do you have Cupping Therapy?</h2>
                            <p style={{ fontSize: '17px' }}>Cupping therapy is an ancient form of alternative medicine in which a therapist puts special cups on your skin for a few minutes to create suction. People get it for many purposes, including to help with pain, inflammation, blood flow, relaxation and well-being, and as a type of deep-tissue massage...</p>
                            <button className='btn btn-primary'>Read More</button>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-end">
                        <img src={image} alt="" className='d-block w-100' />
                    </div>
                </div>
            </div>
            <Services></Services>
        </div>
    );
};

export default Home;