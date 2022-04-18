import React from 'react';
import image from '../../images/profile.jpg';
import './About.css';
const About = () => {
    return (
        <div className='p-5 border my-5 mx-auto rounded text-center login-container'>
            <div className='w-50 mx-auto my-2'>
                <img src={image} className='w-100 d-block' alt="" />
            </div>
            <h3>Md. Ariful Islam</h3>
            <p>Hello!. My goal is to become a full stack developer. To achieve my goal I stareted my journey with Programming Hero. I am trying my best to reach my destination. Insha Allah I will be successed.</p>
        </div>
    );
};

export default About;