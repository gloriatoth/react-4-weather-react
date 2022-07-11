import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function Index() {
  return (
    <div className="App">
      <App />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
