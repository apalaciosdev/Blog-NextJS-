import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import styled from "styled-components";
import px2vw from '../utils/px2vw';
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwlLight";


const Div = styled.div`

  

`


const Pre = styled.pre`
  border-radius: 8px;


`;



export const CodeVisualizer = ({ children }) => {
  const code = children.props.children;
  const language = children.props.className?.replace("language-", "").trim();

  return (
    <Highlight {...defaultProps} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <CodeSnippetContainer>
          {language && (
            <LanguageHeadingContainer>{language.toUpperCase()}</LanguageHeadingContainer>
          )}
          <PreBlock className={className} style={{ ...style }}>
            {tokens.slice(0, -1).map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
            
          </PreBlock>
        </CodeSnippetContainer>
      )}
    </Highlight>
  );
};