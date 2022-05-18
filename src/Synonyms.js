import React from "react";
import "./App.css";

export default function Synonyms(props) {
  if (props.data[0]) {
    return (
      <div className="Synonyms mt-3">
        <u>Synonyms:</u>
        {props.data.map(function (synonym, index) {
          return (
            <div className="ps-5">
              <li key={index}>{synonym}</li>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
