import { useEffect, useState } from "react";
export const UseDarkMode = () => {
  const [theme, setTheme] = useState("light");
  const colorTheme = theme === "light" ? "dark" : "light";

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute("data-theme", theme);
  }, [theme]);

  return [colorTheme, setTheme];
};
