import React, { useState, useEffect } from "react";
import NextLink from "next/link";

import { CSSTransition } from "react-transition-group";
import Image from 'next/image'
import Toggle from './Toggle';

export const Header = ({theme, toggleTheme}) => {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          {/* <a>

          <NextLink href="/"><a> Home </a></NextLink>
          </a> */}
          <a href="/">Home</a>
          <a href="/">Articles</a>
          <a href="/">About</a>
          <span><Toggle theme={theme} toggleTheme={toggleTheme} /></span>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        🍔
      </button>
    </header>
  );
}