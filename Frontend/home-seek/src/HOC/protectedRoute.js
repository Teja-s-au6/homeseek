import React from "react";
import { Redirect } from "react-router-dom";

const withProtected = (ProtectedComponent) => {
  const user = JSON.parse(localStorage.getItem('user'))
  return (args) => {
    return !user || !user.token ? <Redirect to="/signIn" /> : <ProtectedComponent {...args}/>;
  };
};

export default withProtected;