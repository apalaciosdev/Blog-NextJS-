import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import styled from "styled-components";
import px2vw from '../utils/px2vw';


const Div = styled.div`

  

`


const Pre = styled.pre`
  border-radius: 8px;


`;



export const CodeVisualizer = ({ code, language }) => {
  useEffect(() => {
    Prism.manual = true;
    Prism.highlightAll();
  }, []);
  return (
    <Div>
      <Pre>
        <code className={`language-${language}`}>{code}</code>
      </Pre>
    </Div>
  );
}
