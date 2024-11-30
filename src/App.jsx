import React from "react";
import './App.css';
import ThemeContextProvider from "./context/themeContext";
import Header from "./components/header";
function App() {

  return (
    <ThemeContextProvider>
      <Header />
    </ThemeContextProvider>
  ) 
}
export default App