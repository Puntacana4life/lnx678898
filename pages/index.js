import React from "react";
import Banner from "../components/HomeOne/Banner";
import SingleTour from "../components/HomeOne/SingleTour";
import Promo from "../components/HomeOne/Promo";
import AdventureTour from "../components/HomeOne/AdventureTour";
import BestTour from "../components/HomeOne/BestTour";
import RecommendTour from "../components/HomeOne/RecommendTour";
import Service from "../components/HomeOne/Service";
import FeatureTour from "../components/HomeOne/FeatureTour";
import About from "../components/HomeOne/About";
import Product from "../components/Common/Product";
import Newsletter from "../components/Common/Newsletter";
import Blog from "../components/HomeOne/Blog";
import ProvidedService from "../components/HomeThree/ProvidedService";
import TripAdviced from "../components/Common/tripadviced";
import MostPopularAirportTransfers from "../components/Common/MostPopularAirportTransfers";

const Index = () => {
  return (
    <>
      <Banner />

     <About />  
<MostPopularAirportTransfers/>
      

      <RecommendTour />


      
      <Newsletter inputStyle="style2" />


      <TripAdviced/>

  
    </>
  );
};

export default Index;
