import React from "react";

export default function NavBar() {
  return (
    <section class="bg-light">
      <nav class="navbar navbar-expand-lg navbar-light container">
        <a class="navbar-brand" href="index.html">
          Beimer Campos
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#about">
              Sobre mí <span class="sr-only">(current)</span>
            </a>
            <a class="nav-item nav-link" href="#skills">
              Habilidades
            </a>
            <a class="nav-item nav-link" href="#courses">
              Cursos & Diplomas
            </a>
            <a
              class="nav-item nav-link"
              target="_blank"
              href="https://medium.com/@dbeimer"
            >
              Blog
            </a>
            <a class="nav-item nav-link" href="#contacto">
              Contactame
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
}
