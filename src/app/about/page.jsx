import React from 'react';
import Banner from '../Components/SharedFolder/Banner/Banner';
import GetMore from '../Components/GetMore/GetMore';
import Parsent from '../Components/Parsent/Parsent';
import InstructorsSection from './InstructorsSection/InstructorsSection';
import OurFeaturesSection from './OurFeaturersSection/OurFeaturesSection';
import FeatureSteps from './FeatureStep/FeatureStep';

const page = () => {
    return (
        <div>
          <Banner title={"About us "} p={"About"}></Banner>
          <GetMore></GetMore>
          <Parsent></Parsent>
          <FeatureSteps></FeatureSteps>
          <InstructorsSection></InstructorsSection>
          <OurFeaturesSection></OurFeaturesSection>
        </div>
    );
};

export default page;