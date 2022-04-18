import React from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from '../../../images/services/image1.jpg';
import image2 from '../../../images/services/image2.jpg';
import image3 from '../../../images/services/image3.jpg';
import Service from '../Service/Service';
const Services = () => {
    const services = [
        { id: 1, name: 'Wet Cupping Therapy', price: 290, description: ' Wet cupping combines an acupuncture technique called bleeding with cupping. A lancet is used to prick the skin before the cup is applied, which encourages a small amount of blood to flow from the area. This treatment is thought to dispel internal toxins.', img: image1 },
        { id: 2, name: 'Dry Cupping Therapy', price: 250, description: 'You may have noticed athletes with circular bruise-like marks or raised circles on their backs or shoulders. These marks are likely from dry cupping therapy. Dry cupping is a complementary healing modality rooted in traditional Chinese medicine.', img: image3 },
        { id: 3, name: 'Fire Cupping Therapy', price: 280, description: 'Fire cupping is an alternative, non-invasive treatment technique that uses special cups placed on the skin to encourage blood flow to damaged areas. This unique therapy is often recommended to patients who suffer from various types of pain', img: image2 },
    ];

    return (
        <div id='services' className='container my-5'>
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