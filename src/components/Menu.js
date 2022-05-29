import React from "react";

function clickedCloseButton() {
  let menu = document.getElementById("menu");
  menu.classList.toggle("show");
}

function Menu() {
  return (
    <div id="menu" className="menu bg-light position-fixed fixed-top">
      <div className="container text-right">
        <button onClick={clickedCloseButton}>X</button>
      </div>
      <ul>
        <li>
          <a class="nav-item nav-link active" href="#about">
            Sobre mí <span class="sr-only">(current)</span>
          </a>
        </li>
        <li>
          <a class="nav-item nav-link" href="#skills">
            Habilidades
          </a>
        </li>
        <li>
          <a class="nav-item nav-link" href="#courses">
            Cursos & Diplomas
          </a>
        </li>
        <li>
          <a
            class="nav-item nav-link"
            target="_blank"
            href="https://medium.com/@dbeimer"
          >
            Blog
          </a>
        </li>
        <li>
          <a class="nav-item nav-link" href="#contacto">
            Contactame
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
