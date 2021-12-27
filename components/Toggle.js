import React, { useContext } from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components"
import Image from 'next/image'
import { ThemeContext } from '../helpers/themeContext';






const Toggle = ({theme,  toggleTheme }) => {
  const {themeToggler} = useContext(ThemeContext)

    return (
      <div>
        <div className = 'toggle-switch'>
          <label>
            <input type = 'checkbox' onClick={themeToggler} defaultChecked={theme === "light" ? false : true}/>
            <span className = 'slider'></span>
          </label>
        </div>
        
      </div>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;