import React from 'react';


import FeaturesCourses from './FeaturesCourses/FeaturesCourses';
import Banner from '../Components/SharedFolder/Banner/Banner';

const page = () => {
    return (
        <div>
          <Banner title={"Course Page"} p={"Course"}></Banner>
          <FeaturesCourses></FeaturesCourses>
        </div>
    );
};

export default page;