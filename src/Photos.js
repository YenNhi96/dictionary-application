import React from "react";
import "./App.css";

export default function Photos(props) {
  if (props.data) {
    return (
      <section className="Photos">
        <div className="row">
          {props.data.map(function (photo, index) {
            return (
              <div className="display-photos col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt="visualized-desciption"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
