
import "../styles/prism-night-owl.css";
import { GlobalStyle } from '../styles/GlobalStyle';
import Toggle from '../components/Toggle';
import { lightTheme, darkTheme, darkColors } from '../styles/Themes';
import { useDarkMode } from '../helpers/useDarkMode';
import {ThemeProvider} from "styled-components";
import '../styles/ToggleButton.css'
import "../styles/Header.css";
import { Header } from '../components/Header';
import { ThemeContext } from '../helpers/themeContext';
import React, { useEffect, useReducer } from 'react'

function MyApp({ Component, pageProps }) {

  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return(
    <ThemeContext.Provider value={{theme, themeToggler, darkColors}}>
      
    <ThemeProvider theme={themeMode}>
      <GlobalStyle/>
      <Header theme={theme} toggleTheme={themeToggler}/>
      {/* <Toggle theme={theme} toggleTheme={themeToggler} /> */}
      <Component {...pageProps} ></Component>
    </ThemeProvider>
    </ThemeContext.Provider>
  
  )
}

export default MyApp
