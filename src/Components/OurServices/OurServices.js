import React from 'react';
import './OurServices.css';
import Card from '../UI/Card';

const OurServices = () => {
    return (
      <div className='our-services'>
        <h1 className='our-services-title'>Our Services</h1>
        <p className='our-services-text'>At Novakyn, we take pride in offering a comprehensive range of services designed to meet your specific needs and propel your business to new heights. Our talented team of professionals brings expertise in a variety of areas, ensuring that we can provide the perfect solutions to help you thrive in today's competitive landscape.
Here they are a list of our available services:</p>
        <Card className='container'>
            <h2 className='our-services-titles'>
                Software Delivery Lifecycle
            </h2>
            <hr class='solid'></hr>
            <p className='our-services-texts'>We take care of all the software development step-by-step process: Analysis, Requirement, Design, Implementation, Testing, Deployment and Maintenance.</p>
        </Card>
        <Card className='container'>
            <h2 className='our-services-titles'>
            Product Iteration
            </h2>
            <hr class='solid'></hr>
            <p className='our-services-texts'>Do you require some features to be added or removed from a particular product? Does your business need to update/modify a module or product iteration from and existing software? Our team can deal with, not only analyzing the existing product and providing the optimal solution, but also is able to develop new software iterations.</p>
        </Card>
        <Card className='container'>
            <h2 className='our-services-titles'>
            Tech consulting
            </h2>
            <hr class='solid'></hr>
            <p className='our-services-texts'>Our team is made of high-quality professionals, focused in specialized areas: from programming and software development, to design. Project management and support. We are able to solve your software inquires and worries, while your business is concentrated in other initiatives and endeavors.</p>
        </Card>
    </div>
    )
}

export default OurServices;