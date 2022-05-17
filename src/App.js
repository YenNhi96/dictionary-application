import "./App.css";
import Search from "./Search.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <em className="footer">
          <a href="https://github.com/YenNhi96/dictionary-application">
            Open-source code
          </a>{" "}
          by Nhi Nguyen
        </em>
      </div>
    </div>
  );
}

export default App;
