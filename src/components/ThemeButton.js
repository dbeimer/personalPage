import React from "react";
import { UseDarkMode } from "../hooks/UseDarkMode";

export const ThemeButton = () => {
  const [colorTheme, setTheme] = UseDarkMode();
  return colorTheme === "light" ? (
    <img
      className="icon"
      onClick={() => {
        setTheme(colorTheme);
      }}
      src="./images/sun.svg"
      width="30px"
    />
  ) : (
    <img
      className="icon"
      onClick={() => {
        setTheme(colorTheme);
      }}
      src="./images/moon.svg"
      width="30px"
    />
  );
};
