import React from 'react';

import BooksSection from './BooksSection/BooksSection';
import Banner from '../Components/SharedFolder/Banner/Banner';

const page = () => {
    return (
        <div>
        <Banner title={"Product Page"} p={"Product"}></Banner>
          <BooksSection></BooksSection>
        </div>
    );
};

export default page;