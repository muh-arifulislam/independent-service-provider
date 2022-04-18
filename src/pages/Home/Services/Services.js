import React from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from '../../../images/services/image1.jpg';
import image2 from '../../../images/services/image2.jpg';
import image3 from '../../../images/services/image3.jpg';
import Service from '../Service/Service';
const Services = () => {
    const services = [
        { id: 1, name: 'Wet Cupping Therapy', price: 290, description: ' Wet cupping combines an acupuncture technique called bleeding with cupping. A lancet is used to prick the skin before the cup is applied, which encourages a small amount of blood to flow from the area. This treatment is thought to dispel internal toxins.', img: image1 },
        { id: 2, name: 'Dry Cupping Therapy', price: 250, description: 'Wet cupping combines an acupuncture technique called bleeding with cupping. A lancet is used to prick the skin before the cup is applied, which encourages a small amount of blood to flow from the area. This treatment is thought to dispel internal toxins.', img: image3 },
        { id: 3, name: 'Fire Cupping Therapy', price: 280, description: 'Wet cupping combines an acupuncture technique called bleeding with cupping. A lancet is used to prick the skin before the cup is applied, which encourages a small amount of blood to flow from the area. This treatment is thought to dispel internal toxins.', img: image2 },
    ];

    return (
        <div className='container my-5'>
            <h2 className='text-center mb-5'>Services</h2>
            <div className='row g-3'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;