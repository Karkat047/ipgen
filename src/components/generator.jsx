import React from "react";
import Form from "./UI/Form/form";
import Adress from "./UI/Adress/adress";




class Generator extends React.Component {


  state = {
    amount: undefined,
    ip: undefined,
    code: undefined,
    country: undefined,
    organization_name: undefined, //подробнее
    city: undefined, //подробнее
    region: undefined, //подробнее
    latlong: undefined, //подробнее
    error: undefined
  };
  

  gettingIp = async (e) => {
    e.preventDefault(); 
    let amount = e.target.elements.amount.value;
    let ip_adress = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));

    if (amount) {
      const api_url = await
      fetch (`https://get.geojs.io/v1/ip/geo/${ip_adress}.json`);
      const data = await api_url.json();
      
      let lat = data.latitude;
      let long = data.longitude;
      let latlong = lat + ", " + long;
      let country = data.country_code3
      

      if (country) {
        this.setState({
          amount: amount,
          ip: data.ip,
          code: data.country_code3,
          city: data.city,
          organization_name: data.organization_name,
          country: data.country,
          region: data.region,
          latlong: latlong,
          error: ""
        });
      } else {
        
        this.setState({
          amount: undefined,
          ip: undefined,
          code: undefined,
          city: undefined,
          organization_name: undefined,
          country: undefined,
          region: undefined, 
          latlong: undefined,
          error: "Вас постигла неудача"
        });
      };
      
    } else {
      this.setState({
        amount: undefined,
        ip: undefined,
        code: undefined,
        city: undefined,
        organization_name: undefined,
        country: undefined,
        region: undefined, 
        latlong: undefined,
        error: "Введите корректное число от 01 до 20"
      });
    };
  };

  render () {
    return (
      <div>
        <Form ipMethod={this.gettingIp} />
        <Adress
          amount={this.state.amount}
          ip={this.state.ip}
          code={this.state.code}
          city={this.state.city}
          organization_name={this.state.organization_name}
          country={this.state.country}
          region={this.state.region}
          latlong={this.state.latlong}
          error={this.state.error}
        />
      </div>
    );
  };
};

export default Generator;
