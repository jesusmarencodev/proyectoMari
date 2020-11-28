import React, { useState } from "react";
import Fomulario from "../components/Fomulario";
import Temperatura from "../components/Temperatura";

const Home = () => {

  const [temp, setTemp] = useState(0.0);

  return (
    <div className="container">
      <h1 className="text-center">Control de temperatura</h1>
      <div className="row">
        <div className="col-6 divisionform">
          <Fomulario setTemp={setTemp} temp={temp} />
        </div>
        <div className="col-6 divisiontemp">
          <Temperatura setTemp={setTemp} temp={temp} />
        </div>
      </div>
    </div>
  );
};

export default Home;
