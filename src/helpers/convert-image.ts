const convertImageToBase64 = (value: FileList) => {
  const file = value[0];

  const reader = new FileReader();
  reader.onloadend = () => {
    return reader.result;
  };
  reader.readAsDataURL(file);
};

export default convertImageToBase64;
