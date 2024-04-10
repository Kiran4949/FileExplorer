export const checkIfNameExists = (folder, searchTerm) => {
  if (!folder || !folder.name) {
    return false;
  }

  if (folder.name.toLowerCase() === searchTerm) {
    return true;
  }

  for (const item of folder.items || []) {
    if (item.type === "folder" && checkIfNameExists(item, searchTerm)) {
      return true;
    } else if (item.type === "file" && item.name && item.name.toLowerCase() === searchTerm) {
      return true;
    }
  }

  return false;
};
