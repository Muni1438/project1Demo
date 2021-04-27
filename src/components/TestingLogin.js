import React from "react";
import { Redirect } from "react-router-dom";
function TestingLogin({ auth }) {
  if (!auth) {
    return <Redirect to="/login" />;
  }
  return <Redirect to="/" exact />;
}

export default TestingLogin;
