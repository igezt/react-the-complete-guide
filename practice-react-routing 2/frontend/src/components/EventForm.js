import {
  Form,
  json,
  redirect,
  useNavigate,
  useNavigation,
} from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm({ method, event }) {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method={method} className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event ? event.title : "1"}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={
            event
              ? event.image
              : "https://www.phind.com/_next/static/media/phind_v2.45c8fa3b.svg"
          }
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event ? event.date : "2023-02-22"}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event ? event.description : "123"}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "isSubmitting..." : "Submit"}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;

export async function action({ request, params }) {
  const data = await request.formData();
  const method = request.method;

  const newEvent = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  let url = "http://localhost:8080/events/";

  if (method === "PATCH") {
    url += params.id;
  }

  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(newEvent),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    console.log("Could not add new event");
    throw json({ message: "Could not add new event", status: 400 });
  } else {
    return redirect("/events");
  }
}
