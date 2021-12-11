
import "../styles/prism-night-owl.css";
import { GlobalStyle } from '../styles/GlobalStyle';
import Toggle from '../components/Toggle';
import { lightTheme, darkTheme } from '../styles/Themes';
import { useDarkMode } from '../helpers/useDarkMode';
import {ThemeProvider} from "styled-components";
import '../styles/ToggleButton.css'

function MyApp({ Component, pageProps }) {

  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return(
    <ThemeProvider theme={themeMode}>
      <GlobalStyle/>
      <Toggle theme={theme} toggleTheme={themeToggler} />
      <Component {...pageProps} />
    </ThemeProvider>
  
  )
}

export default MyApp
