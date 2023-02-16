import React from "react";
import './adress.css';

class Adress extends React.Component {

  render() {
    return (
      <div>
      { this.props.amount &&
        <div className="adressStyle">
          <table className="tableForm">
            <tbody>
              <tr className="tableHead">
                <th className="tableHeadComp">IP-адресс</th>
                <th className="tableHeadComp">Код страны</th>
                <th className="tableHeadComp">Страна</th>
                <th className="tableHeadComp">Организация</th>
                <th className="tableHeadComp">Адрес</th>
                <th className="tableHeadComp">Координаты</th>              
              </tr>
              <tr className="tableBody">
                <td className="tableBodyComp">{this.props.ip}</td>
                <td className="tableBodyComp">{this.props.code}</td>
                <td className="tableBodyComp">{this.props.country}</td>
                <td className="tableBodyComp">{this.props.organization_name}</td>
                <td className="tableBodyComp">{this.props.country} {this.props.region} {this.props.city}</td>
                <td className="tableBodyComp">{this.props.latlong}</td>
              </tr>
            </tbody>
          </table>
        </div>
      }
        <div className="errorBlock">
          <p className="errorInfo">{this.props.error}</p>        
        </div>
      </div>
    );
  };
};

export default Adress;