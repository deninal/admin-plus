import React from "react";
import CountryItem from "./CountryItem";

function CardCountries({title}) {
  return (
    <div className="card">
      <div className="cardTitle" style={{ marginBottom: 10 }}>
        <h3>{title}</h3>
      </div>
      <CountryItem countryName="United States" visitorNr="220,000" source="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png" />
      <CountryItem countryName="India" visitorNr="180,000" source="https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png" />
      <CountryItem countryName="Germany" visitorNr="143,000" source="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png" />
      <CountryItem countryName="South Africa" visitorNr="108,050" source="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/2560px-Flag_of_South_Africa.svg.png" />
      <CountryItem countryName="Canada" visitorNr="87,300" source="https://upload.wikimedia.org/wikipedia/commons/3/3d/Canadian_Flag.png" />
      <CountryItem countryName="United Kingdom" visitorNr="63,000" source="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/640px-Flag_of_the_United_Kingdom.svg.png" />
    </div>
  );
}

export default CardCountries;
