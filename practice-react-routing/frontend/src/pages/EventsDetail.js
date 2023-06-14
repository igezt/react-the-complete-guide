import {
  json,
  redirect,
  useLoaderData,
  useParams,
  useRouteLoaderData,
} from "react-router";
import EventItem from "../components/EventItem";

const EventsDetailsPage = () => {
  const data = useRouteLoaderData("event-detail");

  return <EventItem event={data.event} />;
};

export default EventsDetailsPage;

export async function loader({ request, params }) {
  const route = params.id;

  const response = await fetch("http://localhost:8080/events/" + route);

  if (!response.ok) {
    throw json({
      message: "Could not fetch details for selected event.",
      status: 500,
    });
  } else {
    return response;
  }
}

export async function action({ params, request }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw json({
      message: "Could not delete the selected event.",
      status: 500,
    });
  }
  return redirect("/events");
}
