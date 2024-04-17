import React, { useEffect } from "react";
import withAuth from "../hoc/withAuth";
import axios from "axios";

function Profile() {
  useEffect(async() => {
    try {
      const token = localStorage.getItem("token");
      const headerOptions = {};
      axios.get("http")
    } catch (error) {}

    (() => {})(); //IIFE (Immediately Invoked Function Execution)
  }, []);
  return <div>Profile</div>;
}

export default withAuth(Profile);
