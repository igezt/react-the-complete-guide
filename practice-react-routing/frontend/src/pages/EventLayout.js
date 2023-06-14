import React from "react";
import EventsNavigation from "../components/EventsNavigation";
import { Outlet } from "react-router";

const EventLayout = () => {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
};

export default EventLayout;
