import React, { useState, useEffect } from "react";
import "./index.css";
import { initializeTooltips } from "./InitializeTooltips";

const Folder = ({ folder, onUpdate, onDelete }) => {
  const [isFolderOpen, setIsFolderOpen] = useState(true);

  useEffect(() => {
    initializeTooltips();
  }, [folder.items]);

  const toggleFolder = () => {
    setIsFolderOpen(!isFolderOpen);
  };

  const createFile = () => {
    const fileName = prompt("Enter file name:");
    if (fileName) {
      const newFile = { type: "file", name: fileName, icon: "far fa-file" };
      folder.items.push(newFile);
      onUpdate();
      initializeTooltips();
    }
  };

  const createSubFolder = () => {
    const folderName = prompt("Enter folder name:");
    if (folderName) {
      const newSubFolder = {
        type: "folder",
        name: folderName,
        icon: "far fa-folder",
        items: [],
      };
      folder.items.push(newSubFolder);
      onUpdate();
      initializeTooltips();
    }
  };

  const deleteItem = (itemIndex) => {
    folder.items.splice(itemIndex, 1);
    onUpdate();
    initializeTooltips();
  };

  const deleteFolder = () => {
    onDelete();
    initializeTooltips();
  };

  return (
    <div className="mt-3">
      <span className="text mx-1 ms-5 cursor-hover" onClick={toggleFolder}>
        <i className={`fas ${isFolderOpen ? "fa-chevron-down" : "fa-chevron-right"}`}></i>
      </span>
      <span className={`border-dotted dotted-border mx-2 px-3`}>
        <i className={folder.icon}></i> {folder.name}
      </span>
      <span className="mx-1 text cursor-hover" onClick={createFile} data-bs-toggle="tooltip" data-bs-placement="top" title="Add File">
        <i className="far fa-file"></i>
      </span>
      <span className="mx-1 text cursor-hover" onClick={createSubFolder} data-bs-toggle="tooltip" data-bs-placement="top" title="Add Folder">
        <i className="far fa-folder"></i>
      </span>
      <span className="mx-1 text cursor-hover" onClick={deleteFolder} data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
        <i className="fa-regular fa-trash-can"></i>
      </span>

      {isFolderOpen &&
        folder.items &&
        folder.items.map((item, index) => (
          <div key={index} className="text mt-3 ms-5">
            {item.type === "file" && (
              <div>
                <span className="mx-1 ms-5 text border-dotted dotted-border">
                  <i className={item.icon}></i> {item.name}
                </span>
                <span className="mx-1 text cursor-hover" onClick={() => deleteItem(index)} data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                  <i className="fa-regular fa-trash-can"></i>
                </span>
              </div>
            )}
            {item.type === "folder" && <Folder folder={item} onUpdate={onUpdate} onDelete={() => deleteItem(index)} />}
          </div>
        ))}
    </div>
  );
};

export default Folder;
