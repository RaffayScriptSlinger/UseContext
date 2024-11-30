import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/themeContext'

function Header() {

     const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
        Header
        Current Theme is: {theme}
        <button onClick={toggleTheme}>Change Theme</button>

    </div>
  )
}

export default Header
