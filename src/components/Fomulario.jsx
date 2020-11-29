import React, { useEffect, useState }  from "react";
import { fetchPetitionOthers, fetchPetitionGet } from "../helpers/fetchPetition";
import { useForm } from "../hooks/useForm";
import Swal from 'sweetalert2';

const tdocumentos = [
  { value:'1', nombre : 'Cedula' },
  { value:'2', nombre : 'Tarjeta de identidad' }
];

const Fomulario = ({temp, setTemp}) => {

  const [formValue, setFormValue] = useState({
    tipoDoc : '1',
    documento : '',
    nomUsuario : '',
    tel : '',
    correo : '',
    temp : temp,
  })
  const { tipoDoc, documento,  nomUsuario,  tel,  correo } = formValue;

  const handleInputChange = ({target}) => {
		setFormValue({
			...formValue,
			[target.name] : target.value
		})
	}


  const reset = () =>{
    setFormValue({
      tipoDoc : '1',
      documento : '',
      nomUsuario : '',
      tel : '',
      correo : '',
      temp : temp,
    })
  }
  
  

  useEffect(() => {
    let e = {
      target :{
        name : 'temp',
        value : temp
      }
    }

  
    handleInputChange(e);

  }, [temp]);

  const handleRegister = async(e) => {
    e.preventDefault();
    const response = await fetchPetitionOthers('users/', formValue, 'POST');
    
    if(response.status === 201){
      Swal.fire('Good', 'Usuario Registrado', 'success');
      reset();
      setTemp(0.0);
      
    }

    //resetFormulario

  }

  const handleKyePress = async(e) => {

    if(e.key==='Enter' && documento.length < 4){
      Swal.fire('Error', 'Documento incorrecto', 'error');
      return
    }
    
    if(e.key==='Enter' && documento.length > 3){
      const response = await fetchPetitionGet(`users/${1}`, 'GET');
      const resp = await response.json();console.log(resp)      
      setFormValue(resp)
    }

  }

  return (
    <>
      <form className="formulario" onSubmit={ handleRegister }>
        <div className="form-group row">
          <label className="col-sm-6 col-form-label">Tipo de documento</label>
          <div className="col-sm-6 displayCenter displayFlex">
          <select
            className="custom-select custom-select-lg mb-2"
            name="tipoDoc"
            value={tipoDoc}
            onChange={handleInputChange}
          >
            <option value="1">Cedula</option>
            <option value="2">Tarjeta de identidad</option>
          </select>
{/*             <input
              type="text"
              className="form-control"
              id="tipoDoc"
              name="tipoDoc"
              value={tipoDoc}
              onChange={handleInputChange}
              required
            /> */}
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-6 col-form-label">Numero de documento</label>
          <div className="col-sm-6 displayCenter displayFlex">
            <input
              type="number"
              className="form-control"
              id="documento"
              name="documento"
              value={documento}
              min='0'
              onChange={handleInputChange}
              onKeyPress={handleKyePress}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-6 col-form-label">Nombre completo</label>
          <div className="col-sm-6 displayCenter displayFlex">
            <input
              type="text"
              className="form-control"
              id="nomUsuario"
              name="nomUsuario"
              value={nomUsuario}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-6 col-form-label">Telefono</label>
          <div className="col-sm-6 displayCenter displayFlex">
            <input
              type="number"
              className="form-control"
              id="tel"
              name="tel"
              value={tel}
              min='0'
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-6 col-form-label">Correo electronico</label>
          <div className="col-sm-6 displayCenter displayFlex">
            <input
              type="email"
              className="form-control"
              id="correo"
              name="correo"
              value={correo}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center mt-2 mb-2">
            <button disabled={temp === 0} className="btn btn-guardar">Guardar</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Fomulario;
