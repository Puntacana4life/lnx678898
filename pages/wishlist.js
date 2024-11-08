import React from "react";
import PageBanner from "../components/Common/PageBanner";
import WishlistContent from "../components/Wishlist/WishlistContent";

const Wishlist = () => {
  return (
    <>
      <PageBanner bannerTitle="Wishlist" pageName="wishlist" />

      <WishlistContent />
    </>
  );
};

export default Wishlist;
