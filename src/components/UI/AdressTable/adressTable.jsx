import React from "react";
import './adressTable.css';

class AdressTable extends React.Component {

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
                {this.props.children}
              </tbody>
            </table>
          </div> ||
          <div>
            <span>{this.props.error}</span>
          </div>
        }
      </div>
    );
  };
};

export default AdressTable;