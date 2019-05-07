import React from "react";
import ReactDOM from "react-dom";
import Posts from "./components/post";
import PostForm from "./components/postform";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Posts />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
