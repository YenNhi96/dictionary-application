import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms.js";
import "./App.css";

export default function Result(props) {
  if (props.info) {
    return (
      <div className="Result">
        {props.info.meanings.map(function (meaning, index) {
          return (
            <div className="SearchResult" key={index}>
              <h4 className="text-capitalize">{meaning.partOfSpeech}</h4>
              {meaning.definitions.map(function (def, index) {
                return (
                  <div key={index}>
                    <br />
                    <p className="mt-2">
                      {index + 1}. {def.definition}
                    </p>
                    <Example data={def.example} />
                    <Synonyms data={def.synonyms} />
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
