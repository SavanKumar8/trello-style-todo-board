import React from "react";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader-wrapper">
      <div className="loader-circle"></div>
      <p>Loading your board...</p>
    </div>
  );
}
