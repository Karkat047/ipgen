import React from "react";
import "./form.css"

const Form = props => {
  const [amount, setAmount] = React.useState(1);

  return <div className="form">
    { amount > 1 &&
      <button className="btn btnActive btnMinus" onClick={()=>setAmount(amount-1)}> - </button> ||
      <button className="btn btnDisable btnMinus" tabIndex={-1}> - </button>
    }
    <input className="amountInput" type="text" name="amount" readOnly={true} value={amount} tabIndex={-1}/>
    { amount < 20 &&
      <button className="btn btnActive" onClick={()=>setAmount(amount+1)}> + </button> ||
      <button className="btn btnDisable" tabIndex={-1}> + </button>
    }
    <button className="btn btnActive"  onClick={() => props.ipMethod(amount)}> Сгенеририровать </button>
  </div>
};

export default Form;