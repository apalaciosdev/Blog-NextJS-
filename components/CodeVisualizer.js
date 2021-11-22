import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";



export const CodeVisualizer = ({ code, language }) => {
  useEffect(() => {
    Prism.manual = true;
    Prism.highlightAll();
  }, []);
  return (
    <div className="code">
      <pre className="code code-css">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
