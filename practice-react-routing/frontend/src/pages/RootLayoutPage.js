import React from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet, useNavigation } from "react-router";

const RootLayoutPage = () => {
  const navigation = useNavigation();
  const state = navigation.state;

  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
};

export default RootLayoutPage;
