import React from "react";

function Skills() {
  return (
    <section className="my-skills mb-5" id="skills">
      <div className="container">
        <div className="row pt-5 pb-5">
          <div className="col-lg-6">
            <center>
              <h4>Mis habilidades</h4>
            </center>

            <div className="progress shadow mb-3">
              <div className="progress-bar">HTML5</div>
            </div>
            <div className="progress shadow mb-3">
              <div className="progress-bar" role="progressbar">
                PHP
              </div>
            </div>
            <div className="progress shadow mb-3">
              <div className="progress-bar" role="progressbar">
                JavaScript
              </div>
            </div>
            <div className="progress shadow mb-3">
              <div className="progress-bar" role="progressbar">
                Python
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card shadow p-3 border-0 servicios">
              <b>Servicios</b>
              ----------------------
              <li>> Consultoría de sistemas</li>
              <li>> Programación de sistemas web</li>
              <li>> Programación de paginas web informativas</li>
              <li>> Análisis de diseño de datos SQL y MySQL</li>
              <li>> Diseño de Logos</li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
