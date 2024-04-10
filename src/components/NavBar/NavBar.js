import React, { useState } from "react";
import { checkIfNameExists } from "../NavBarUtils/NavBarUtils";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

function NavBar({ rootFolder, toggleRootFolder }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTermLowerCase = searchTerm.toLowerCase();
    const isMatch = checkIfNameExists(rootFolder, searchTermLowerCase);

    if (isMatch) {
      alert(`File or folder with the name "${searchTerm}" exists.`);
    } else {
      alert(`File or folder with the name "${searchTerm}" does not exist.`);
    }
  };

  const collapseRootFolder = () => {
    toggleRootFolder();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mt-4 ms-4 me-4">
      <div className="container-fluid mx-3">
        <span className="navbar-brand fs-4">
          <i className="far fa-folder-open"></i> File Explorer
        </span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={collapseRootFolder}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex ms-auto" onSubmit={handleSearch}>
              <div className="input-group">
                <input className="form-control border border-end-0" type="search" placeholder="Search" aria-label="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <button className="border border-start-0 rounded-end bg-white" type="submit">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </form>
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
