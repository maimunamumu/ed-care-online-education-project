import React from 'react';
import Banner from '../Components/SharedFolder/Banner/Banner';
import ContactSection from './ContactSection/ContactSection';

const page = () => {
    return (
        <div>
           <Banner title={"Contact Page"} p={"Contact"}></Banner>
           <ContactSection></ContactSection>
        </div>
    );
};

export default page;