import React, { useState } from "react";
import { fetchPetitionGetTemp } from "../helpers/fetchPetition";

const Temperatura = ({setTemp, temp}) => {

  const [temperature, setTemperature] = useState({})

  const hanldeTemperature = async(e) => {
    e.preventDefault();
    const response = await fetchPetitionGetTemp('temperatura', 'GET');

    const resp = await response.json();
    
    const { img, pasa, temperature } = resp; 
    
    console.log(resp);

    setTemperature({
      ...temperature,
      img,
      pasa,
      temperature 
    })
    
    console.log(temperature.toFixed(2));

    setTemp(temperature.toFixed(2));
    
    console.log(temp.toFixed(2));
   
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
          <div className="temp-image">
            <img height='100%' width='100%' src={`data:image/jpeg;base64,${temperature.img}`} alt="image"/>
          </div>
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
