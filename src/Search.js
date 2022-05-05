import React, { useState } from "react";

export default function Search() {
  let [word, setWord] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(word);
  }

  function wordSearch(event) {
    setWord(event.target.value);
  }
  return (
    <div className="Search">
      <form className="mb-3" onSubmit={handleSubmit}>
        <div className="row justify-content-center">
          <div className="col-6">
            <input
              type="search"
              className="form-control"
              autoComplete="off"
              onChange={wordSearch}
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
  );
}
