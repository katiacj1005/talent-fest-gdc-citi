
import "../../../Scss/Layout/transfer.scss";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "../../../Scss/Layout/DataTranfer.scss";
import SideBar from "../../SideBar";

const AccountRegister = () => {
  const navigate = useNavigate();
  const [dataRegister, setDataRegister] = useState({
    client:"",
    name: "",
    displayAccountNumber: "",
    cardType: "",
    typeAccount: false,
    MaximumAmount: "",
    displayAccountNumbe: "",
    email: "",
    // alias:''
  });

  
  return (
    <>
      <h1 className="entry-question"> ¿Qué deseas hacer?</h1>
      <hr />
      <section className="container-saider-form">
        <SideBar />
        <form className="all-form">
          <h1>Alta de cuenta Citibanamex</h1>
          <p>Indica los datos del alta y da click en "Continuar</p>
          <br />
          <br />
          <div className="container">
            <div className="col-md-5">
              <label>¿Qué dato tienes de la cuenta para darla de alta?</label>
              <select
                name="seleccione una opción"
                className="form-select"
                id="inputGroupSelect01"
                placeholder="Tarjeta de debito o crédito"
              >
                <option defaultValue="Seleccione una opción">
                  Seleccione una opción
                </option>
                <option>Mi Cuenta CitiBanamex</option>
                <option>Cuenta Priority CitiBanamex</option>
              </select>
            </div>
            <br />
            <p className="pLabels">Numero de tarjeta:</p>

            <input className="form-control" type="text"></input>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label">Cuenta propia</label>
            </div>
            <p className="pLabels">
              Titular de la cuenta
            </p>
            <input className="form-control" type="text"></input>
            <br />
            <p className="pLabels">
              Monto máximo que autorizas pagar a este beneficiario:
            </p>
            <div className="input-group mb-3 input-amount">

              <span className="input-group-text">MXN</span>
              <input type="text" aria-label="Amount (to the nearest dollar)" />
            </div>
            <br />
            <p className="pLabels">Correo electrónico (opcional):</p>
            <input type="email" className="form-control"></input>
            <p className="pLabels">Confirmar correo electrónico:</p>
            <input type="email" className="form-control"></input>

          </div>
          <div className="transferButtons">
            <button type="submit" className="continue">
              Continuar
            </button>
            <button type="button" className="cancel" onClick={()=>{navigate ("/services")}}>
              Cancelar
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default AccountRegister;
