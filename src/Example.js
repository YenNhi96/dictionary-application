import React from "react";
import "./App.css";

export default function Example(props) {
  if (props.data) {
    return (
      <div className="Example">
        <em>
          <strong>Example: </strong>
          {props.data}
        </em>
      </div>
    );
  } else {
    return null;
  }
}
