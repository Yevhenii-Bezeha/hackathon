const createFile = (blob: string, name: string) => {
  const saver = document.createElement('a');
  const blobURL = (saver.href = window.URL.createObjectURL(new Blob([blob])));
  const body = document.body;
  saver.download = name;
  body.appendChild(saver);
  saver.dispatchEvent(new MouseEvent('click'));
  body.removeChild(saver);
  window.URL.revokeObjectURL(blobURL);
};

export default createFile;
