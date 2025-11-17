"use client";

import Image from "next/image";
import Hero from "./Components/Hero/Hero";
import GetMore from "./Components/GetMore/GetMore";
import SelectCategory from "./Components/SelecCategory/SelectCategory";
import Explore from "./Components/Explore/Explore";
import FeaturesCourses from "./Components/FeaturesCourses/FeaturesCourses";
import Parsent from "./Components/Parsent/Parsent";
import LatestNewsSection from "./Components/LatestNewSection/LatestNewSection";



export default function Home() {
  return (
      <div>
        <Hero></Hero>
 <GetMore></GetMore>
 <SelectCategory></SelectCategory>
 <Explore></Explore>
 <FeaturesCourses></FeaturesCourses>
 <Parsent></Parsent>
 <LatestNewsSection></LatestNewsSection>
      </div>
  );
}
