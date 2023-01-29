import React, { useState, useEffect } from "react";
import "./Cards.css";
import axios from "axios"

import Card from "../Card/Card";

const Cards = () => {
  const [factures, setFactures] = useState([]);
  console.log(factures)
  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/factures").then((res) => {
      setFactures(res.data);
    });
  }, []);

  return (
    <div className="Cards">
      {factures.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.category}
              color="red"
              barValue={card.nemuro}
              value={card.nemuro}
              series={card.status}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
