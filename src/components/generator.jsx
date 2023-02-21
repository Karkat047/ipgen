import React from "react";
import Form from "./UI/Form/form";
import getAddress from "../api";
import AdressTable from "./UI/AdressTable/adressTable";
import AdressRow from "./UI/AdressRow/adressRow";

class Generator extends React.Component {

  state = {
    amount: undefined,
    ip: undefined,
    code: undefined,
    country: undefined,
    organization_name: undefined,
    city: undefined,
    region: undefined,
    latlong: undefined,
    error: undefined,
    ip_adresses: []
  };
  
  gettingIp = async (amount) => {
    let ip_adresses = [];
    
    if (amount) {
      const data = await getAddress();

      for (let i = 0; i < amount; i++) {
        ip_adresses.push(await getAddress());
      }

      this.setState({amount: amount, ip_adresses: ip_adresses, ...data});       
    } else {
      this.setState({
        error: "Непредвиденная ситуация"
      })
    }
  };

  render () {
    return (
      <div>
        <Form ipMethod={(amount) => this.gettingIp(amount)} />
        <AdressTable
          amount={this.state.amount}
          error={this.state.error}
        >
          {
            this.state.ip_adresses.map(address => <AdressRow key={address.ip} {...address}/>)
          }
        </AdressTable>
      </div>
    );
  };
};

export default Generator;