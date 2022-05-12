import React from "react";
import "./App.css";

export default function Result(props) {
  if (props.info) {
    return (
      <div className="Result">
        <h2>Type</h2>
        <p>Definition</p>
      </div>
    );
  } else {
    return null;
  }
}
