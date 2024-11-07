import React from "react";
import Banner from "../components/HomeTwo/Banner";
import Promo from "../components/Common/Promo";
import TourSlider from "../components/HomeTwo/TourSlider";
import BestTour from "../components/Common/BestTour";
import AdventureTour from "../components/Common/AdventureTour";
import Service from "../components/Common/Service";
import RecommendTour from "../components/Common/RecommendTour";
import FeatureTour from "../components/Common/FeatureTour";
import About from "../components/Common/About";
import Product from "../components/Common/Product";
import Blog from "../components/Common/Blog";
import Newsletter from "../components/Common/Newsletter";

const Index2 = () => {
  return (
    <>
      <Banner />

      <Promo bgStyle="style2" />

      <TourSlider />

      <BestTour cardStyle="style2" shape={false} />

      <AdventureTour radiusStyle="style4" />

      <Service />

      <RecommendTour
        title="OUR ALL"
        subTitle="Recommended Destinations"
        bgStyle="bg-heath"
      />

      <div className="ptb-100">
        <FeatureTour viewButton={true} />
      </div>

      <About featureStyle="style2" />

      <Product />

      <Blog blogStyle="style2" />

      <Newsletter inputStyle="style2" shape={false} />
    </>
  );
};

export default Index2;
