import React, { useState } from "react";
import Folder from "./Folder.js";
import NavBar from "./NavBar.js";

const FileExplorer = () => {
  const [rootFolder, setRootFolder] = useState({
    type: "folder",
    name: "Root Folder",
    items: [],
  });

  const [isRootFolderExpanded, setIsRootFolderExpanded] = useState(true);

  const toggleRootFolder = () => {
    setIsRootFolderExpanded(!isRootFolderExpanded);
  };

  const forceUpdate = () => {
    setRootFolder({ ...rootFolder });
  };

  const deleteRootFolder = () => {
    forceUpdate();
  };

  return (
    <>
      <NavBar rootFolder={rootFolder} setRootFolder={setRootFolder} isRootFolderExpanded={isRootFolderExpanded} toggleRootFolder={toggleRootFolder} />
      <Folder folder={rootFolder} onUpdate={forceUpdate} onDelete={deleteRootFolder} />
    </>
  );
};

export default FileExplorer;
