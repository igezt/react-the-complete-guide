import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <p>Something went wrong!</p>
      {error.status}
      {error.message}
    </div>
  );
};

export default ErrorPage;
