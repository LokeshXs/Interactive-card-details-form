import React, { useState, useRef, useEffect } from "react";
import "./CardForm.css";

const CardForm = (props) => {
  const fullName = useRef();
  const getCardNumber = useRef();
  const expMonth = useRef();
  const expYear = useRef();
  const cvv = useRef();
  const [cardNumber, setCardNumber] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [expMonthError, setExpMonthError] = useState("");
  const [expYearError, setExpYearError] = useState("");
  const [cvvError, setCvvError] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cardCvv, setCardCvv] = useState("");

  const [formSubmittedState, setFormSubmittedState] = useState(false);

  const cardNumberInputHandler = (event) => {
    const input = event.target.value.replace(" ", ""); // Remove existing spaces
    const formattedInput = input.replace(/(\d{4})(?=\d)/g, "$1 "); // Insert spaces every four digits

    setCardNumber(formattedInput);
  };

  const cardOwnerInputChangeHandler = (event) => {
    setOwnerName(event.target.value);
  };

  const expMonthChangeHandler = (event) => {
    setExpiryMonth(event.target.value);
  };

  const expYearChangeHandler = (event) => {
    setExpiryYear(event.target.value);
  };

  const cvvChangeHandler = (event) => {
    setCardCvv(event.target.value);
  };

  const cardFormSubmitHandler = (event) => {
    event.preventDefault();

    setFullNameError(
      `${
        /^[A-Za-z]+(?:\s[A-Za-z]+)+$/.test(fullName.current.value)
          ? ""
          : "Enter your full name"
      }`
    );

    setCardNumberError(
      `${
        /^[0-9\s]+$/.test(getCardNumber.current.value)
          ? ""
          : "Wrong Format, numbers only"
      }`
    );

    setExpMonthError(
      `${
        /^(0[1-9]|1[0-2])$/.test(expMonth.current.value) ? "" : "Invalid Input"
      }`
    );

    setExpYearError(
      `${/^[0-9]{2}$/.test(expYear.current.value) ? "" : "Invalid Year"}`
    );
    setCvvError(`${/^\d{3}$/.test(cvv.current.value) ? "" : "Invalid CVV"}`);

    setFormSubmittedState(true);
  };

  useEffect(() => {
    props.updateCardInfo({
      cardNumber: cardNumber,
      ownerName: ownerName,
      expMonth: expiryMonth,
      expYear: expiryYear,
      cvv: cardCvv,
    });

    // console.log("USEEFFECT Running");

    if (formSubmittedState) {
      if (
        cardNumberError.length === 0 &&
        fullNameError.length === 0 &&
        expMonthError.length === 0 &&
        expYearError.length === 0 &&
        cvvError.length === 0
      ) {
        console.log("Form is valid");
        props.updateCardState(true);
      }
    }
    setFormSubmittedState(false);
  }, [
    cardNumber,
    ownerName,
    expiryMonth,
    expiryYear,
    cardCvv,
    formSubmittedState,
  ]);

  return (
    <form action="" className="cardForm" onSubmit={cardFormSubmitHandler}>
      <div className="input-container">
        <label htmlFor="cardHolderName" className="label">
          CARDHOLDER NAME
        </label>
        <input
          ref={fullName}
          type="text"
          id="cardHolderName"
          name="holderName"
          onChange={cardOwnerInputChangeHandler}
          value={ownerName}
          style={{ border: `${fullNameError ? "2px solid red" : ""}` }}
          placeholder="e.g. Jane Appleseed"
          required
        />
        {fullNameError && (
          <span className="error-message">{fullNameError}</span>
        )}
      </div>

      <div className="input-container">
        <label htmlFor="cardNumber" className="label">
          CARD NUMBER
        </label>
        <input
          ref={getCardNumber}
          type="text"
          id="cardNumber"
          name="cardNumber"
          placeholder="e.g. 1234 5678 9123 0000"
          onChange={cardNumberInputHandler}
          value={cardNumber}
          maxLength="19"
          style={{ border: `${cardNumberError ? "2px solid red" : ""}` }}
          // pattern="/^[A-Za-z]+(?:\s[A-Za-z]+)+$/"
          required
        />
        {cardNumberError && (
          <span className="error-message">{cardNumberError}</span>
        )}
      </div>

      <div className="input-container__parallel">
        <fieldset className="input-container-fieldset">
          <legend htmlFor="expiryDate" className="label">
            EXP. DATE (MM/YY)
          </legend>
          <div className="expiryDate-inputs">
            <div>
              <input
                ref={expMonth}
                type="text"
                id="expiryDate"
                name="expiryMonth"
                placeholder="MM"
                style={{ border: `${expMonthError ? "2px solid red" : ""}` }}
                onChange={expMonthChangeHandler}
                value={expiryMonth}
                // pattern="[0-9]{2}"
                title="Invalid"
                maxLength="2"
                required
              />
              {expMonthError && (
                <div className="error-message">{expMonthError}</div>
              )}
            </div>
            <div>
              <input
                ref={expYear}
                type="text"
                id="expiryDate"
                name="expiryYear"
                placeholder="YY"
                onChange={expYearChangeHandler}
                value={expiryYear}
                style={{ border: `${expYearError ? "2px solid red" : ""}` }}
                // pattern="[0-9]{2}"
                title="Invalid"
                maxLength="2"
                required
              />

              {expYearError && (
                <div className="error-message">{expYearError}</div>
              )}
            </div>
          </div>
        </fieldset>
        <div className="input-container">
          <label htmlFor="cvvNumber" className="label">
            CVV
          </label>
          <input
            ref={cvv}
            type="text"
            id="cvvNumber"
            name="cvv"
            maxLength="3"
            placeholder="e.g. 123"
            style={{ border: `${cvvError ? "2px solid red" : ""}` }}
            onChange={cvvChangeHandler}
            // pattern="[0-9]{3}"
            title="Invalid"
            required
          />
          {cvvError && <span className="error-message">{cvvError}</span>}
        </div>
      </div>
      <button type="submit" className="submit-btn">
        Confirm
      </button>
    </form>
  );
};

export default CardForm;
