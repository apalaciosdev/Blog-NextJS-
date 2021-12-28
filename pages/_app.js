import { Header } from '../components/Header';
import { ThemeContext } from '../helpers/themeContext';
import Toggle from '../components/Toggle';
import { useDarkMode } from '../helpers/useDarkMode';


//Styles
import { GlobalStyle } from '../styles/GlobalStyle';
import { lightTheme, darkTheme } from '../styles/Themes';
import {ThemeProvider} from "styled-components";
import "../styles/prism-night-owl.css";
import '../styles/ToggleButton.css'
import "../styles/Header.css";




function MyApp({ Component, pageProps }) {

  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return(
    <ThemeContext.Provider value={{theme, themeToggler}}>
      
      <ThemeProvider theme={themeMode}>
        <GlobalStyle/>
        <Header theme={theme} toggleTheme={themeToggler}/>
        <Component {...pageProps} />
      </ThemeProvider>

    </ThemeContext.Provider>
  
  )
}

export default MyApp
