import React from 'react';
import image from '../../images/profile.jpg';
import './About.css';
const About = () => {
    return (
        <div className='p-5 border my-5 w-50 mx-auto rounded text-center'>
            <div className='w-50 mx-auto my-2'>
                <img src={image} className='w-100 d-block' alt="" />
            </div>
            <h3>Md. Ariful Islam</h3>
            <p>Hello everyone. I am Md. Ariful Islam here. I have been started my journey to become a full stack web developer.</p>
        </div>
    );
};

export default About;