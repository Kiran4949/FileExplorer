import React, { useState, useEffect, useCallback } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const updateStyles = useCallback(() => {
    const body = document.body;
    const allTextElements = document.querySelectorAll(".text");
    const dottedBorderElements = document.querySelectorAll(".dotted-border");

    body.style.background = isDarkMode ? "#101720" : "white";
    body.style.color = isDarkMode ? "white" : "#101720";

    allTextElements.forEach((textElement) => {
      textElement.style.color = isDarkMode ? "white" : "#101720";
    });

    dottedBorderElements.forEach((borderElement) => {
      borderElement.style.borderColor = isDarkMode ? "white" : "#101720";
    });
  }, [isDarkMode]);

  useEffect(() => {
    updateStyles();
  }, [updateStyles]);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return <i className={`bi ${isDarkMode ? "bi-moon" : "bi-brightness-high-fill"} custom-icon`} id="toggleDark" onClick={handleToggle}></i>;
};

export default DarkModeToggle;
