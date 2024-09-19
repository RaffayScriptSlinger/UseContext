

import { createContext,useState } from "react";

export const ThemeContext = createContext();

function ThemeContextProvider({children}){
  const [theme,setTheme] = useState(``)
  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return(
    <ThemeContext.Provider value={{theme,setTheme,toggleTheme}}>
      {children}

    </ThemeContext.Provider>
  );
}
export default ThemeContextProvider