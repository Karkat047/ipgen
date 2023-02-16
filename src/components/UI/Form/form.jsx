import React from "react";
import "./form.css"

const Form = props => (
  <form className="form" onSubmit={props.ipMethod}>
    <input className="amountInput" type="text" name="amount" placeholder="0"/>
    <button className="btn" > Сгенеририровать </button>
  </form>
);

export default Form;