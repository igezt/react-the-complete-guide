import React from "react";
import { json, useRouteLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";
import EventForm from "../components/EventForm";

const EditEventPage = () => {
  const data = useRouteLoaderData("event-detail");

  return <EventForm event={data.event} method={"PATCH"} />;
};

export default EditEventPage;

// async function action({ param, request }) {
//   const response = await fetch("http://localhost:8080/events", {
//     method: "PUT",
//   });
//   if (!response.ok) {
//     return json({ message: "Oh no!", status: 500 });
//   } else {
//     return response;
//   }
// }
