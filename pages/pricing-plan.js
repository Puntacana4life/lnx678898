import React from "react";
import PageBanner from "../components/Common/PageBanner";
import PricingPlanTable from "../components/PricingPlan/PricingPlanTable";

const PricingPlan = () => {
  return (
    <>
      <PageBanner bannerTitle="Pricing Plan" pageName="Pricing Plan" />

      <PricingPlanTable />
    </>
  );
};

export default PricingPlan;
