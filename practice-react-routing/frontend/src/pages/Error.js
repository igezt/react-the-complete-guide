import React from "react";
import PageContent from "./PageContent";
import { useRouteError } from "react-router";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  const error = useRouteError();
  const status = error.status;
  console.log(error);

  let title = "An error occurred";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 400) {
    title = "Not found!";
    message = "Could not find resource or page!";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
        <p>{error.status}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;
