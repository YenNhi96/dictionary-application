import React from "react";
import "./App.css";

export default function Result(props) {
  if (props.info) {
    return (
      <div className="Result">
        {props.info.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <h4 className="text-capitalize">{meaning.partOfSpeech}</h4>
              {meaning.definitions.map(function (def, index) {
                return (
                  <div key={index}>
                    <br />
                    <p>
                      {index + 1}. {def.definition}
                    </p>
                    <em>{def.example}</em>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
