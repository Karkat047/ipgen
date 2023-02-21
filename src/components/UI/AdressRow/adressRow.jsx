import React from "react";
import './adressRow.css';

function AdressRow(props) {
  return (
    <tr className="tableBody">
      <td className="tableBodyComp">{props.ip}</td>
      <td className="tableBodyComp">{props.code}</td>
      <td className="tableBodyComp">{props.country}</td>
      <td className="tableBodyComp">{props.organization_name}</td>
      <td className="tableBodyComp">{props.country} {props.region} {props.city}</td>
      <td className="tableBodyComp">{props.latlong}</td>
    </tr>
  )
}

export default AdressRow;