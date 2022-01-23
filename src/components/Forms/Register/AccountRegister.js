import React from "react";
import "../../../Scss/Layout/transfer.scss";
import "../../../Scss/Layout/DataTranfer.scss";
import SideBar from "../../SideBar";
import { ModalSia } from "../../modal/ModalSia";
import "../../../Scss/Layout/Modal.scss";

const AccountRegister = () => {
  return (
    <>
      <h1 className="entry-question"> ¿Qué deseas hacer?</h1>
      <hr />
      <section className="container-saider-form">
        <SideBar />
        <form>
          <h1>Alta de cuenta Citibanamex</h1>
          <p>Indica los datos del alta y da click en "Continuar</p>
          <br />
          <br />
          <div className="container">
            <div className="col-md-5">
              <label>¿Qué dato tienes de la cuenta para darla de alta?</label>
              <select
                name="seleccione una opción"
                className="form-control"
                placeholder="Tarjeta de debito o crédito"
              >
                <option defaultValue="Seleccione una opción">
                  Seleccione una opción
                </option>
                <option>Débito</option>
                <option>Crédito</option>
              </select>
            </div>
            <br />
            <p className="pLabels">Numero de tarjeta:</p>
            <input className="form-control-sm"></input>
            <p className="pLabels">
              Nombre con el que identificarás este pago (alias):
            </p>
            <input className="form-control-sm"></input>
            <br />
            <p className="pLabels">
              {" "}
              Monto máximo que autorizas pagar a este beneficiario:
            </p>
            <div className="input-group mb-3">
              <span className="input-group-text">MXN</span>
              <input
                type="text"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
              />
            </div>
            <br />
            <p className="pLabels">Correo electrónico (opcional):</p>
            <input className="form-control-sm"></input>
            <p className="pLabels">Confirmar correo electrónico:</p>
            <input className="form-control-sm"></input>
          </div>
          <hr />
          <div className="transferButtons">
            <button type="button" className="continue">
              Continuar
            </button>
            <button type="button" className="cancel">
              Cancelar
            </button>
          </div>
        </form>
        <ModalSia />
      </section>
    </>
  );
};

export default AccountRegister;
