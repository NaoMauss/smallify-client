import React from "react";
import "../App.css";

import axios from "axios";
import { useState } from "react";
const API_URL = "https://smallify.link";

export default function Home() {
  const [urlinput, seturlInput] = useState("");
  const [linkid, setlinkid] = useState({});

  function postdata(url) {
    axios
      .post(`${API_URL}/api/link/createlink/`, {
        url: url,
      })
      .then(
        (response) => {
          console.log(response);
          setlinkid(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      postdata(urlinput);
    }
  };

  const handleCopyClick = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied successfully!");
      })
      .catch((error) => {
        console.error("Error copying text:", error);
      });
  };

  return (
    <div className="App">
      <h1>SMALLIFY</h1>
      <div>
        <div className="container">
          <div className="input-and-button">
            <input
              onChange={(e) => seturlInput(e.target.value)}
              value={urlinput}
              type="url"
              name="url"
              id="url"
              placeholder="https://example.com/"
              onKeyDown={handleKeyDown}
              // pattern=""
              size="30"
              autoComplete="off"
              required
            />
            <button onClick={() => postdata(urlinput)}>CONVERT</button>
          </div>
          <div className="result">
            <a
              className="result-text"
              rel="noreferrer"
              target="_blank"
              href={linkid.data}
            >
              {linkid.data}
            </a>
            {linkid.data ? (
              <button
                onClick={() => handleCopyClick(linkid.data)}
                className="button-copy"
              >
                Copy
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
