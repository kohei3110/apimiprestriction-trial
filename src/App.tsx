import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios, { AxiosResponse } from "axios";

function App() {
  const instance = axios.create({
    baseURL:
      "https://apim-gmoapp-trial-eastus2-001.azure-api.net/fn-gmoapp-trial-eastus2-001",
    timeout: 1000,
  });

  try {
    instance.get("/GetHeader");
  } catch (e) {
    console.log(e);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
