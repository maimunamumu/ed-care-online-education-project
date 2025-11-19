import React from 'react';
import Banner from '../Components/SharedFolder/Banner/Banner';
import BlogCard from './BlogCard/BlogCard';

const page = () => {
    return (
        <div>
          <Banner title={"Blog Grid"} p={"Blog Grid"}></Banner>
          <BlogCard></BlogCard>
        </div>
    );
};

export default page;