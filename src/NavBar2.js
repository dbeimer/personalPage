import React from "react";
import { ThemeButton } from "./components/ThemeButton";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-2">
          <svg
            className="icon"
            width="44"
            height="20"
            viewBox="0 0 44 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              let menu = document.getElementById("menu");
              menu.classList.toggle("show");
            }}
          >
            <path
              d="M1 1H43M1 19H26.2M1 10H17.8"
              stroke={"currentColor"}
              strokeWidth="2"
              strokeWidth="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="brand">Beimer Campos</span>
          <ThemeButton />
        </div>
      </div>
    </div>
  );
}
