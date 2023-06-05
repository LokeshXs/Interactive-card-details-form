import React from "react";
import "./CardFront.css";

const CardFront = (props) => {
  return (
    <div className="cardFront">
      <div className="card-details-section">
        <strong className="card-number">
          {props.cardInformation.cardNumber}
        </strong>
        <div className="card-owner-details--section">
          <p className="owner-name">{props.cardInformation.ownerName}</p>
          <p className="expiry-date">{`${props.cardInformation.expMonth}/${props.cardInformation.expYear}`}</p>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
