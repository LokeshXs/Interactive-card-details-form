import React from "react";
import "./ThankYou.css";
import icon from "../../assets/icon-complete.svg";

const ThankYou = (props) => {
  const continueClickHandler = () => {
    props.updateCardState(false);
  };

  return (
    <div className="thank-you-section">
      <img src={icon} alt="icon" />
      <p className="thank-msg">THANK YOU!</p>
      <p className="success-msg">We've added your card details</p>

      <button className="btn-continue" onClick={continueClickHandler}>
        Continue
      </button>
    </div>
  );
};

export default ThankYou;
