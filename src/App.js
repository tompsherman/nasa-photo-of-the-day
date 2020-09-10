import React, { useState, useEffect } from "react";
import "./App.css";

import axios from "axios";

import Photo from "./Components/Photo";

function App() {
  const [apod, setApod] = useState([]);
  // const [description, setDescription] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=4oBPLY8OkS5iRrb7yfmDcnqa4lssj62BSY5UP4n7"
      )
      .then((response) => {
        console.log("1", response.data);
        setApod(response.data);
        return apod;
      })
      .catch((err) => {
        console.log("ERRRORRRR");
      });
  }, []);
  console.log("2", apod.title);

  return (
    <div className="App">
      <Photo apod={apod} title={"NASA A.P.O.D."} />
    </div>
  );
}

export default App;
