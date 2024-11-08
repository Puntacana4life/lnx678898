import React from "react";
import PageBanner from "../components/Common/PageBanner";
import LoginArea from "../components/Authentication/LoginArea";

const Login = () => {
  return (
    <>
      <PageBanner bannerTitle="Get Connected" pageName="Log In" />

      <LoginArea />
    </>
  );
};

export default Login;
