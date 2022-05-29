import React from "react";
import perfil from "./images/perfil.jpeg";

export default function Hero() {
  return (
    <section className="hero d-flex align-items-center bg-dark text-white mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 text-center">
            <img
              src={perfil}
              className="rounded-circle w-50 shadow m-4"
              alt=" no hay imagen"
            />
          </div>
          <div className="col-lg-9 col-12 mb-2">
            <div className="row">
              <p className="col-lg-12 pt-4">
                > Hola, mi nombre es <b>Beimer Campos Mezones</b>, soy{" "}
                <b>ANALISTA & PROGRAMADOR</b>, actualmente me encuentro
                laborando como programador PHP, soy alguien a quien le gusta
                aprender y compartir lo aprendido, si tienes una empresa puedo
                ayudarte con mis servicios y si eres programador podemos
                compartir retos juntos.
              </p>
              <div className="col-lg-12 p-4">
                <h5 className="escrito">
                  "No siempre puedes conseguir lo que quieres, pero si lo
                  intentas puedes conseguir lo que necesitas"
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
