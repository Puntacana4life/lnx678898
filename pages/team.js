import React from "react";
import PageBanner from "../components/Common/PageBanner";
import TeamMember from "../components/Team/TeamMember";

const Team = () => {
  return (
    <>
      <PageBanner bannerTitle="Our Team" pageName="Our Team" />

      <TeamMember />
    </>
  );
};

export default Team;
