import React from "react";

export default function Footer() {
  return (
    <footer
      className="page-footer font-small mdb-color pt-4 shadow"
      id="contacto"
    >
      <div className="container text-center text-md-left">
        <div className="row">
          <div class="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">
            <h5 class="font-weight-bold text-uppercase mb-4">
              ¡Trabajemos juntos!
            </h5>
            <p>
              Si eres alguien que tiene habilidades en desarrollo de sistemas ya
              sea frontend o backend, contactame para que puedas formar parte de
              mi equipo de desarrollo.
            </p>
          </div>
          <hr class="clearfix w-100 d-md-none" />
          <div class="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
            <h5 class="font-weight-bold text-uppercase mb-4">sobre mí</h5>

            <ul class="list-unstyled">
              <li>
                <p>
                  <a href="#!">Habilidades</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#!">Cursos y Diplomas</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#!">Blog</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#!">Contactame</a>
                </p>
              </li>
            </ul>
          </div>
          <hr class="clearfix w-100 d-md-none" />
          <div class="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">
            <h5 class="font-weight-bold text-uppercase mb-4">Datos</h5>

            <ul class="list-unstyled">
              <li>
                <p>
                  <i class="fas fa-home mr-3"></i> Jr. Manuel del Pino 550, Lima
                </p>
              </li>
              <li>
                <p>
                  <i class="fas fa-envelope mr-3"></i>{" "}
                  beimer.developer@gmail.com
                </p>
              </li>
              <li>
                <p>
                  <i class="fas fa-print mr-3"></i> + 51 943577003
                </p>
              </li>
            </ul>
          </div>
          <hr class="clearfix w-100 d-md-none" />
          <div class="col-md-2 col-lg-2 text-center mx-auto my-4">
            <h5 class="font-weight-bold text-uppercase mb-4">Sigueme en:</h5>
            <a
              href="https://www.facebook.com/Beimer-Campos-Mezones-1014707632070646/"
              class="social-net"
            >
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a
              href="https://www.instagram.com/beimer_campos/"
              class="social-net"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="https://twitter.com/BeimerCampos" class="social-net">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="https://github.com/dbeimer" class="social-net">
              <ion-icon name="logo-github"></ion-icon>
            </a>
            <a
              href="https://www.linkedin.com/in/beimer-campos-mezones-8b9324154/"
              class="social-net"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3">
        © 2019 Copyright:
        <a href="http://beimercampos.com/"> beimercampos.com</a>
      </div>
    </footer>
  );
}
