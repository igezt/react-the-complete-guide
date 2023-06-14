import React from "react";
import { json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

const EventsPage = () => {
  const data = useLoaderData();
  console.log(data.events);

  return <EventsList events={data.events} />;
};

export default EventsPage;

export const loader = async ({ request, params }) => {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    return json({ message: "Oh no!", status: 500 });
  } else {
    return response;
  }
};
