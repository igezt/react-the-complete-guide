import React from "react";

import MainNavigation from "../components/MainNavigation";
import { Outlet, useNavigate, useNavigation } from "react-router-dom";

const RootLayout = () => {
  const navigation = useNavigation();
  return (
    <>
      <MainNavigation />
      {navigation.state === "loading" && <p>Loading</p>}
      <Outlet />
    </>
  );
};

export default RootLayout;
