import React from "react";
import "./styles.css";
import { useState } from "react";

const seriesList = {
  Crime: [
    { name: "Naruto", rating: "8.3" },
    { name: "NCIS", rating: "7.8" }
  ],

  Comedy: [
    { name: "The Office", rating: "8.9" },
    { name: "The Big Bang Theory", rating: "8.1" }
  ],

  Drama: [
    { name: "Game of Thrones", rating: "9.3" },
    { name: "Queen's Gambit", rating: "8.7" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Drama");
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>TV Series Recommendations</h1>
      <h2>Along with IMDB ratings</h2>

      <div>
        {Object.keys(seriesList).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#0c2624",
              color: "#d40f0f",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {seriesList[selectedGenre].map((series) => (
            <li
              key={series.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {series.name} </div>
              <div style={{ fontSize: "smaller" }}> {series.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
