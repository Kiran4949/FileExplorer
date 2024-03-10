import React, { useEffect } from "react";
import { initializeTooltips } from "./InitializeTooltips";

const Footer = () => {
  useEffect(() => {
    initializeTooltips();
  }, []);

  return (
    <div className="fixed-bottom footer text-end ms-4 me-4 mb-3">
      <p className="fs-6 mb-0 text">Javascript React Assignment</p>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="LinkedIn">
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="p-1 text me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="GitHub">
        <i className="fa-brands fa-github"></i>
      </a>
      <a href="https://www.medium.com" target="_blank" rel="noopener noreferrer" className="text" data-bs-toggle="tooltip" data-bs-placement="top" title="Medium">
        <i className="fa-solid fa-m"></i>
      </a>
    </div>
  );
};

export default Footer;
