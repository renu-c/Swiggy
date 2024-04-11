import { useRouteError } from "react-router-dom";
import React from "react";

const Error = () => {
    const err=useRouteError();
    console.log(err);
  return (
    <div>
      <div>Oppss!!</div>
      <h2>{err.status}:{err.text}</h2>
    </div>
  );
};

export default Error;
