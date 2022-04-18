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
                            <p style={{ fontSize: '17px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, animi error tempore consectetur eos explicabo at aliquam quasi non pariatur, adipisci ad placeat est, aliquid reprehenderit dicta iure soluta. Architecto, quo placeat. A, ipsa quas tempore laboriosam quidem odit dignissimos illo libero asperiores. Quam ullam atque earum nesciunt ratione. Fugiat?</p>
                            <button className='btn btn-primary'>Read More</button>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-end">
                        <img src={image} alt="" className='d-block' />
                    </div>
                </div>
            </div>
            <Services></Services>
        </div>
    );
};

export default Home;