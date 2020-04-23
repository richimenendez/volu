import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default function ListaEspera() {
  const [pacientes = [], setPacientes] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios
      .get(
        "https://3aq0p4k16e.execute-api.us-east-2.amazonaws.com/default/voluntariadoGetPost"
      )
      .then((res) => {
        console.log(res.data.Items);
        setPacientes(res.data.Items);
      });
  }, []);

  function ingresar(paramas) {
    axios
      .put(
        "https://3aq0p4k16e.execute-api.us-east-2.amazonaws.com/default/voluntariadoGetPost",
        { date: paramas, estadoHospital: "Ingresado" }
      )
      .then(
        axios
          .get(
            "https://3aq0p4k16e.execute-api.us-east-2.amazonaws.com/default/voluntariadoGetPost"
          )
          .then((res) => {
            console.log(res.data.Items);
            setPacientes(res.data.Items);
          })
      );
  }

  function getColor(params) {
    if (params === "Alto") {
      return "bg-danger";
    } else if (params === "Medio") {
      return "bg-warning";
    } else {
      return "bg-primary";
    }
  }

  function getColorT(params) {
    if (params === "Alto") {
      return "text-white";
    } else if (params === "Medio") {
      return "text-dark";
    } else {
      return "text-white";
    }
  }
  const lista = pacientes.map((element) => {
    if (element.paciente.estadoHospital === "Cola") {
      return (
        <div className="col-md-3 card datos" >
          <h3
           /*onClick={handleShow}*/
            className={`card-header  ${getColor(
              element.paciente.riesgo
            )} ${getColorT(element.paciente.riesgo)}`}
          >
            {" "}
            {element.paciente.nombre}
          </h3>

          
          <div className="row">
          <h5 class="col-lg-6"> Sexo </h5 >    
          <p class="col-lg-6"  > {element.paciente.sexo}</p>
          </div>
          
          <div className="row">
          <h5 class="col-lg-6"> Registro </h5 >    
          <p class="col-lg-6"  > {element.paciente.registro}</p>
          </div>

          <div className="row">
          <h5 class="col-lg-6"> Telefono </h5 >    
          <p class="col-lg-6"  > {element.paciente.telefono}</p>
          </div>

          <div className="row">
          <h5 class="col-lg-6"> sintomas </h5 >    
          <p class="col-lg-6"  > {element.paciente.sintomas}</p>
          </div>

          <div className="row">
          <h5 class="col-lg-6"> riesgo </h5 >    
          <p class="col-lg-6"  > {element.paciente.riesgo}</p>
          </div>


            

          <div className="row">
            <div className="col-lg-6">
              <a
                class="badge badge-success"
                onClick={() => {
                  ingresar(element.date);
                }}
              >
                Ingresar
              </a>
            </div>
            <div className="col-lg-6">
              <a
                class="badge badge-danger"
                onClick={() => {
                  alert("Sacar Paciente");
                }}
              >
                Exgreso
              </a>
            </div>
          </div>
        </div>

        

      );
    }
  });

  return (
    <div className="row">
      <h2 className="datos text-secondary" align="center">
        {" "}
        Cola de Izquierda a Derecha!
      </h2>
      {lista}

    </div>
  );
}
