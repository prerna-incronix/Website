// Import necessary modules
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HomePage from "./home";
function ScrollToTop() {
  const { HomePage } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [HomePage]);

  return null;
}

export default ScrollToTop;
