import React, { useState } from "react";
import axios from "axios";

export default function NuevoPaciente() {
  const [nombre, setNombre] = useState();
  const [sexo, setSexo] = useState();
  const [edad, setEdad] = useState();
  const [registro, setRegistro] = useState();
  const [residencia, setResidencia] = useState();
  const [encargado, setEncargado] = useState();
  const [parentesco, setParentesco] = useState();
  const [telefono, setTelefono] = useState();
  const [email, setEmail] = useState();
  const [riesgo, setRiesgo] = useState();
  const [estable, setEstable] = useState();

  function crearUsuario() {
    axios
      .post(
        "https://3aq0p4k16e.execute-api.us-east-2.amazonaws.com/default/voluntariadoGetPost",
        {
          nombre: nombre,
          sexo: sexo,
          edad: edad,
          registro: registro,
          residencia: residencia,
          riesgo: riesgo,
          estable: estable,
          estadoHospital: "Cola",
        }
      )
      .then()
      .catch();
  }
  return (
    <div className="formulario">
      <form autoComplete="off">
        <h1 align="center">Ingresar Paciente </h1>
        <h2>Datos Personales</h2>
        <div class="form-group">
          <label for="exampleFormControlInput1">Nombre Completo</label>
          <input
            class="form-control"
            id="exampleFormControlInput1"
            onChange={(event) => setNombre(event.target.value)}
          />
        </div>

        <div className="row">
          <div class="form-group col-6">
            <label for="exampleFormControlSelect1">Sexo</label>
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              onChange={(event) => setSexo(event.target.value)}
            >
              <option>Masculino</option>
              <option>Femenino</option>
            </select>
          </div>
          <div class="form-group col-6">
            <label for="exampleFormControlSelect2">Edad</label>
            <input
              type="Number"
              class="form-control"
              id="exampleFormControlInput1"
              onChange={(event) => setEdad(event.target.value)}
            />
          </div>
        </div>

        <div class="form-group">
          <label for="exampleFormControlSelect2">Numero de Registro</label>
          <input
            type="Number"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="123456789"
            onChange={(event) => setRegistro(event.target.value)}
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1"> Residencia</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="2"
            onChange={(event) => setResidencia(event.target.value)}
          ></textarea>
        </div>

        <h2> Motivo de Consulta</h2>
        <div className="row">
          <div class="form-group col-6">
            <label for="exampleFormControlSelect1">Riesgo</label>
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              onChange={(event) => setRiesgo(event.target.value)}
            >
              <option>Alto</option>
              <option>Medio</option>
              <option>Bajo</option>
            </select>
          </div>
          <div class="form-group col-6">
            <label for="exampleFormControlSelect1">¿Estable?</label>
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              onChange={(event) => setEstable(event.target.value)}
            >
              <option>No Estable</option>
              <option>Estable</option>
            </select>
          </div>
        </div>
      </form>
      <button className="btn-primary" onClick={() => crearUsuario()}>
        {" "}
        Ingresar
      </button>
    </div>
  );
}
