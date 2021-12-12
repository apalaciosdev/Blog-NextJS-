import React from 'react';
import { func, string } from 'prop-types';
import styled from "styled-components"
import Image from 'next/image'


const ToggleContainer = styled.div`
  width: 10px;
  
`;



const Toggle = ({theme,  toggleTheme }) => {


    return (
      <div>
        <ToggleContainer>

       
        

        
      
        


        <div class = 'toggle-switch'>
            <label>
                <input type = 'checkbox' onClick={toggleTheme} checked={theme === "light" ? true : false}/>
                <span class = 'slider'></span>
            </label>
        </div>
  


        </ToggleContainer>
      </div>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;