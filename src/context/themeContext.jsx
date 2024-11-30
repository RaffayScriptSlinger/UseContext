
import React, { createContext, useState }  from "react";
 export const ThemeContext = createContext()

function ThemeContextProvider({children}){
  const [theme,setTheme]= useState("Light")

const toggleTheme = ()=>{
  setTheme((prvTheme) => (prvTheme == "Light" ? "Dark": "Light" ))
}
  return(
    <ThemeContext.Provider value={{theme,setTheme,toggleTheme}}>
      {children}
      </ThemeContext.Provider>
  )
}

export default ThemeContextProvider