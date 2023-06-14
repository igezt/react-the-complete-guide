import { useLoaderData, useRouteLoaderData } from "react-router";
import EventForm from "../components/EventForm";

const EditEventsPage = () => {
  const data = useRouteLoaderData("event-detail");

  return <EventForm event={data.event} />;
};

export default EditEventsPage;
