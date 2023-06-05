import React, { useState } from "react";
import "./App.css";
import CardForm from "./Components/CardForm/CardForm";
import CardFront from "./Components/CardFront/CardFront";
import CardBack from "./Components/CardBack/CardBack";
import ThankYou from "./Components/ThankYou/ThankYou";

const cardInfo = {
  cardNumber: "",
  ownerName: "",
  expMonth: "",
  expYear: "",
  cvv: "",
};
function App() {
  const [cardInformation, setCardInformation] = useState(cardInfo);
  const [cardAddedState, setCardAddedState] = useState(false);

  const updateCardInfo = (newInfo) => {
    setCardInformation(newInfo);
  };

  const updateCardState = (state) => {
    setCardAddedState(state);
  };

  return (
    <div className="app">
      <div className="card-section">
        <CardFront cardInformation={cardInformation} />
        <CardBack cardInformation={cardInformation} />
      </div>

      <div className="cardForm-section">
        {cardAddedState || (
          <CardForm
            updateCardInfo={updateCardInfo}
            updateCardState={updateCardState}
          />
        )}

        {cardAddedState && <ThankYou updateCardState={updateCardState} />}
      </div>
    </div>
  );
}

export default App;
