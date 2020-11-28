import React from "react";
import { fetchPetitionGet } from "../helpers/fetchPetition";

const Temperatura = ({setTemp, temp}) => {

  


  const hanldeTemperature = async(e) => {
    e.preventDefault();
    const response = await fetchPetitionGet('temperatures/', 'GET');

    let resp = await response.json();

    setTemp(resp);



    //resetFormulario

  }


  return (
    <div className="padre-temp">
      <div className="row padre-temp">
        <div className="col-4 divisiontemp1">
          <div className="showTemp">
            <h4>{temp}</h4>
          </div>
        </div>
        <div className="col-8 divisiontemp2">
          <div className="temp-image"></div>
        </div>
        <div className="col-12 text-center cont-boton">
          <button
            onClick={ hanldeTemperature }
            className="btn btn-temp"
          >
            Obtener temperatura
          </button>
        </div>
      </div>
    </div>
  );
};

export default Temperatura;
