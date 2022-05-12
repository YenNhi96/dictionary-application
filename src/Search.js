import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import Result from "./Result.js";

export default function Search() {
  let [word, setWord] = useState("");
  let [result, setResult] = useState(null);
  let [headWord, setHeadWord] = useState("Landscape");
  let [pronounce, setPronounce] = useState("ˈlændskeɪp");

  function searchWord(response) {
    setResult(response.data);
    setHeadWord(response.data[0].meta.stems[0]);
    setPronounce(response.data[0].hwi.prs[0].ipa);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "c46996d4-6ecb-4f72-80e7-07ebf069ae04";
    let apiUrl = `https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=${apiKey}`;
    axios.get(apiUrl).then(searchWord);
  }

  function wordTyping(event) {
    setWord(event.target.value);
  }
  return (
    <div className="Search">
      <div className="wordDisplay">
        <strong>{headWord}</strong>
        <p className="Pronounce">/{pronounce}/</p>
        <form className="mb-3" onSubmit={handleSubmit}>
          <div className="row justify-content-center">
            <div className="col-6">
              <input
                type="search"
                className="form-control"
                autoComplete="off"
                onChange={wordTyping}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
      </div>
      <Result info={result} />
    </div>
  );
}
