import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function withAuth(OldComp) {
  // receives an old component
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  return () => {
    // return a NEW/MODIFIED/OLD component
    useEffect(() => {
      if (!token) {
        navigate("/customers/login");
        return;
      }
    }, [token]);

    return <OldComp />;
  };
}
