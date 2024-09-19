

import React, { useContext } from "react";
import './App.css';
import ThemeContextProvider, { ThemeContext } from "./context/themeContext";
function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const handleThemeChange = (newTheme) => {
    toggleTheme(newTheme);
  };
  return (
    <ThemeContextProvider>
      <div className={theme === "Light" ? "Light-theme" : "dark-theme"   } id="mainDiv"  >
  
        <h1>Color Changer & Use State Practice</h1>
        <div className="btnDiv ">
          <button onClick={() => handleThemeChange("Light")}>Light Theme</button>
          <button onClick={() => handleThemeChange("dark")}>Dark Theme</button>
        </div>

      </div>
    </ThemeContextProvider>
  )
}
export default App