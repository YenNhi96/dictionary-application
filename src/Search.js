import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import Result from "./Result.js";
import AudioPlay from "./AudioPlay.js";
import Photos from "./Photos.js";

export default function Search() {
  let [word, setWord] = useState("");
  let [result, setResult] = useState(null);
  let [headWord, setHeadWord] = useState("");
  let [pronounce, setPronounce] = useState("");
  let [audio, setAudio] = useState("");
  let [photo, setPhoto] = useState(null);

  useEffect(() => {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/cool`;
    axios.get(apiUrl).then(searchWord);

    let imageApikey =
      "563492ad6f91700001000001f6f2f71e6e23437d8d3cc6caec8ed9a3 ";
    let imageUrl = `https://api.pexels.com/v1/search?query=cool&per_page=9`;
    let author = {
      headers: { Authorization: `Bearer ${imageApikey}` },
    };
    axios.get(imageUrl, author).then(photoResponse);
  }, []);

  function searchWord(response) {
    setResult(response.data[0]);
    setHeadWord(response.data[0].word);
    setPronounce(response.data[0].phonetic);
    setAudio(response.data[0].phonetics[0].audio);
  }

  function photoResponse(response) {
    setPhoto(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(searchWord);

    let imageApikey =
      "563492ad6f91700001000001f6f2f71e6e23437d8d3cc6caec8ed9a3 ";
    let imageUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;
    let author = {
      headers: { Authorization: `Bearer ${imageApikey}` },
    };
    axios.get(imageUrl, author).then(photoResponse);
  }

  function wordTyping(event) {
    setWord(event.target.value);
  }
  return (
    <div className="Search">
      <div className="wordDisplay">
        <strong>{headWord}</strong>
        <div className="Pronounce">
          <p className="phonetic">{pronounce}</p>
          <AudioPlay source={audio} />
        </div>

        <form className="mb-3" onSubmit={handleSubmit}>
          <div className="row justify-content-center">
            <div className="col-6">
              <input
                type="search"
                className="form-control"
                autoComplete="off"
                placeholder="Type your word..."
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
      <Photos data={photo} />
    </div>
  );
}
