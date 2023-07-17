const fileLabel = document.querySelector(".file-label");
const fileImg = document.querySelector(".file-img");

const fileInput = document.getElementById("doc-upload");
fileInput.onchange = () => {
  const selectedFile = fileInput.files[0];
  console.log(selectedFile.name);
  fileLabel.classList.add("d-none");
  fileImg.classList.remove("d-none");

  document.getElementById("file-name").innerHTML+=selectedFile.name
};
