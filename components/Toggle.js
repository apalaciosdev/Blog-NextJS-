import React, { useState } from 'react';
import { func, string } from 'prop-types';
import styled from "styled-components"
import Image from 'next/image'



const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 8rem;
  height: 4rem;

  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;
    
    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
      
    }
    
    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;


const Toggle = ({theme,  toggleTheme }) => {

  const [isChecked, setIsChecked] = useState(true);

    return (
      <div>      
        <input type="checkbox" id="toggle" className="toggle--checkbox" onClick={toggleTheme}
          onChange={(event) => setIsChecked(event.currentTarget.checked)}
          checked={theme === "light" ? false : true}
        />
        <label for="toggle" class="toggle--label" value="">
          <span className="toggle--label-background"></span>
        </label>
        <div className="background"></div>
      </div>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;