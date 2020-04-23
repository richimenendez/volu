import React, { useState } from "react";
import axios from "axios";

export default function NuevoPaciente() {
//seccion datos personales
  const [nombre, setNombre] = useState();
  const [sexo, setSexo] = useState();
  const [edad, setEdad] = useState();
  const [registro, setRegistro] = useState();
  const [residencia, setResidencia] = useState();
  const [encargado, setEncargado] = useState();
  const [parentesco, setParentesco] = useState();
  const [telefono, setTelefono] = useState();
  const [email, setEmail] = useState();
  const [fecha_nacimiento, setFechaNacimiento] = useState();

//seccion motivo de consulta
  const [sintomas, setSintomas] = useState();
  const [evolucion, setEvolucion] = useState();
  const [alergias, setAlergias] = useState();
  const [medicinas, setMedicinas] = useState();
  const [patologias, setPatologias] = useState();
  const [ultima_comida, setUltimaComida] = useState();
  const [eventos_asociados, setEventosAsociados] = useState();
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
          encargado: encargado,
          residencia: residencia,
          parentesco: parentesco,
          telefono: telefono,
          email: email,
          fecha_nacimiento: fecha_nacimiento,

          sintomas: sintomas,
          evolucion: evolucion,
          alergias: alergias,
          medicinas: medicinas,
          patologias: patologias,
          ultima_comida: ultima_comida,
          eventos_asociados: eventos_asociados,
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

        <div class="form-group">  {/*nombre*/}
          <label for="exampleFormControlInput1">Nombre Completo</label>
          <input
            class="form-control"
            id="exampleFormControlInput1"
            onChange={(event) => setNombre(event.target.value)}
          />
        </div>
        
        <div className="row">     
          <div class="form-group col-6"> {/*sexo*/}
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
          <div class="form-group col-6"> {/*edad*/}
            <label for="exampleFormControlSelect2">Edad</label>
            <input
              type="Number"
              class="form-control"
              id="exampleFormControlInput1"
              onChange={(event) => setEdad(event.target.value)}
            />
          </div>
        </div>

        <div className = "row">
          <div class="form-group col-6">  {/*num registro*/}
            <label for="exampleFormControlSelect2">Numero de Registro</label>
            <input
              type="Number"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="123456789"
              onChange={(event) => setRegistro(event.target.value)}
            />
          </div>
          <div class="form-group col-6"> {/*fecha nacimiento */}
            <label for="exampleFormControlSelect2">fecha Nacimiento</label>
            <input
              type="date"
              class="form-control"
              id="exampleFormControlInput1"
              onChange={(event) => setFechaNacimiento(event.target.value)}
            />
         
          </div>
        </div>

        <div class="form-group">  {/*residencia*/}
          <label for="exampleFormControlTextarea1"> Residencia</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="2"
            onChange={(event) => setResidencia(event.target.value)}
          ></textarea>
        </div>

        <div class="form-group">  {/*parentesco*/}
          <label for="exampleFormControlInput1">Parentesco</label>
          <input
            class="form-control"
            id="exampleFormControlInput1"
            onChange={(event) => setParentesco(event.target.value)}
          />
        </div>

        <div class="form-group">  {/*encargado*/}
          <label for="exampleFormControlInput1">Nombre Encargado</label>
          <input
            class="form-control"
            id="exampleFormControlInput1"
            onChange={(event) => setEncargado(event.target.value)}
          />
        </div>

        <div className="row">     
          <div class="form-group col-6" > {/*telefono*/}
          <label for="exampleFormControlInput1">Telefono</label>
          <input
            class="form-control"
            id="exampleFormControlInput1"
            type="text" maxLength="8"
            onChange={(event) => setTelefono(event.target.value)}
          />
          </div>
          <div class="form-group col-6"> {/*email*/}
          <label for="exampleFormControlInput1">Email</label>
          <input
            class="form-control"
            id="exampleFormControlInput1"
            onChange={(event) => setEmail(event.target.value)}
          />
          </div>
        </div>

        <h2> Motivo de Consulta</h2>  

        <div class="row">
        <div class="form-group col-6">  {/*Descripcion de sintomas*/}
          <label for="exampleFormControlTextarea1">Descripcion de Sintomas</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="2"
            onChange={(event) => setSintomas(event.target.value)}
          ></textarea>
        </div>
        <div class="form-group col-6">  {/*Tiempo de Evolucion de enfermedad*/}
            <label for="exampleFormControlInput1">Descripcion de Tiempo de Evolucion de enfermedad</label>
            <textarea
              class="form-control"
              id="exampleFormControlInput1"
              onChange={(event) => setEvolucion(event.target.value)}
            />
          </div>
        </div>

        <div class="row">
        <div class="form-group col-6">  {/*Alergias*/}
          <label for="exampleFormControlTextarea1">Descripcion de Alergias</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="2"
            onChange={(event) => setAlergias(event.target.value)}
          ></textarea>
        </div>
        <div class="form-group col-6">  {/*Medicinas*/}
            <label for="exampleFormControlInput1">Descripcion de Medicamentos</label>
            <textarea
              class="form-control"
              id="exampleFormControlInput1"
              onChange={(event) => setMedicinas(event.target.value)}
            />
          </div>
        </div>

        <div class="row">
        <div class="form-group col-6">  {/*Descripcion de Patologias*/}
          <label for="exampleFormControlTextarea1">Descripcion de Patologias</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="2"
            onChange={(event) => setPatologias(event.target.value)}
          ></textarea>
        </div>
        <div class="form-group col-6">  {/*Ultima comida*/}
            <label for="exampleFormControlInput1">Descripcion de Ultima comida</label>
            <input
              class="form-control"
              id="exampleFormControlInput1"
              onChange={(event) => setUltimaComida(event.target.value)}
            />
          </div>
        </div>

        <div class="form-group ">  {/*Eventos Asociados*/}
          <label for="exampleFormControlTextarea1">Descripcion de Eventos Asociados</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="2"
            onChange={(event) => setEventosAsociados(event.target.value)}
          ></textarea>
        </div>

        <div className="row"> 
          <div class="form-group col-6"> {/*Riesgo*/}
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
          <div class="form-group col-6"> {/*¿Estable?*/}
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
