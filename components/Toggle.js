import React from 'react';
import { func, string } from 'prop-types';
import styled from "styled-components"
import Image from 'next/image'






const Toggle = ({theme,  toggleTheme }) => {


    return (
      <div>
   
        <div className = 'toggle-switch'>
            <label>
                <input type = 'checkbox' onClick={toggleTheme} defaultChecked={theme === "light" ? false : true}/>
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