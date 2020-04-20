import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NuevoPaciente from "./components/NuevoPaciente";
import ListaEspera from "./components/ListaEspera";

function App() {
  return (
    <Router>
      <div id="wrapper">
        <nav class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
          <div class="container-fluid d-flex flex-column p-0">
            <Link
              class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
              to="#"
            >
              <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laptop-medical"></i>
              </div>
              <div class="sidebar-brand-text mx-3">
                <span>
                  Hospital <br /> Roosevelt
                </span>
              </div>
            </Link>
            <hr class="sidebar-divider my-0" />
            <ul class="nav navbar-nav text-light" id="accordionSidebar">
              <li class="nav-item" role="presentation">
                <Link class="nav-link" to="/">
                  <i
                    class="fas fa-user-plus"
                    style={{ fontSize: 130 + "%" }}
                  ></i>
                  <span style={{ fontSize: 130 + "%" }}>
                    {" "}
                    Ingresar Paciente
                  </span>
                </Link>
              </li>
              <li class="nav-item" role="presentation">
                <Link class="nav-link" to="/listaUsuarios">
                  <i class="fas fa-users" style={{ fontSize: 130 + "%" }}></i>
                  <span style={{ fontSize: 130 + "%" }}>Lista de Espera</span>
                </Link>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link" href="table.html">
                  <i
                    class="fas fa-exclamation-circle"
                    style={{ fontSize: 130 + "%" }}
                  ></i>
                  <span style={{ fontSize: 130 + "%" }}>Bajo Atención</span>
                </a>
              </li>

              <li class="nav-item" role="presentation">
                <a class="nav-link" href="register.html">
                  <i
                    class="fas fa-book-medical"
                    style={{ fontSize: 130 + "%" }}
                  ></i>
                  <span style={{ fontSize: 130 + "%" }}>
                    Historial de Pacientes
                  </span>
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link" href="login.html">
                  <i class="fas fa-vials" style={{ fontSize: 130 + "%" }}></i>
                  <span style={{ fontSize: 130 + "%" }}>Pruebas</span>
                </a>

                <ul class=" text-light">
                  <li class="nav-item">
                    <a class="nav-link">
                      <i
                        class="fas fa-book-medical"
                        style={{ fontSize: 100 + "%" }}
                      ></i>
                      <span style={{ fontSize: 130 + "%" }}>COVID</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link">
                      <i
                        class="fas fa-book-medical"
                        style={{ fontSize: 100 + "%" }}
                      ></i>
                      <span style={{ fontSize: 130 + "%" }}>DENGUE</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div class="text-center d-none d-md-inline">
              <button
                class="btn rounded-circle border-0"
                id="sidebarToggle"
                type="button"
              ></button>
            </div>
          </div>
        </nav>
        <div class="d-flex flex-column" id="content-wrapper">
          <div id="content">
            <Switch>
              <Route path="/listaUsuarios">
                <ListaEspera></ListaEspera>
              </Route>
              <Route path="/">
                <NuevoPaciente></NuevoPaciente>
              </Route>
            </Switch>
          </div>
          <footer class="bg-white sticky-footer">
            <div class="container my-auto">
              <div class="text-center my-auto copyright">
                <span> Aplicación Desarrollada Como Voluntariado.</span>
              </div>
            </div>
          </footer>
        </div>
        <a class="border rounded d-inline scroll-to-top" href="#page-top">
          <i class="fas fa-angle-up"></i>
        </a>
      </div>
    </Router>
  );
}

export default App;
