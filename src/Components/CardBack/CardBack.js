import React from "react";
import "./CardBack.css";

const CardBack = (props) =>{

  return(
    <div className="cardBack">
      <p className="card-cvv-number">{props.cardInformation.cvv}</p>
    </div>
  )
};

export default CardBack;