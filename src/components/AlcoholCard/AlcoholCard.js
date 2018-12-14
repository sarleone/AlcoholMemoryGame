import React from "react";
import "./AlcoholCard.css";

const AlcoholCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={()=> props.onClickHandler(props.id)}/>
    </div>
  </div>
);

export default AlcoholCard;