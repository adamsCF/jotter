const campaignBtnPatient = document.querySelector(".campaign-type-btn-patient");
const campaignBtnClassroom = document.querySelector(
  ".campaign-type-btn-classroom"
);

if (campaignBtnPatient) {
  campaignBtnPatient.addEventListener("click", () => {
    typeSelection(campaignBtnPatient, campaignBtnClassroom);
  });
}

if (campaignBtnClassroom) {
  campaignBtnClassroom.addEventListener("click", () => {
    typeSelection(campaignBtnClassroom, campaignBtnPatient);
  });
}

/////////////////// Patient /////////////////////////////////////////
const patientBtnYourself = document.querySelector(".patient-type-btn-yourself");
const patientBtnSomeone = document.querySelector(".patient-type-btn-someone");

if (patientBtnYourself) {
  patientBtnYourself.addEventListener("click", () => {
    typeSelection(patientBtnYourself, patientBtnSomeone);
  });
}

if (patientBtnSomeone) {
  patientBtnSomeone.addEventListener("click", () => {
    typeSelection(patientBtnSomeone, patientBtnYourself);
  });
}

function typeSelection(primaryBtn, secondaryBtn) {
  primaryBtn.classList.add("active-btn");
  secondaryBtn.classList.remove("active-btn");
}

///////////////////////// Classroom Projects /////////////////////////////////////////////////

document.querySelector(".add_more_field").onclick = function () {
  createInput();
};

count = 0;

function createInput() {
  field_area = document.querySelector(".supplies-items");
  var li = document.createElement("li");

  li.className = "input-field";

  var inputItem = document.createElement("input");
  inputItem.id = "item" + count;
  inputItem.name = "item" + count;
  inputItem.className = "item-name form-control"
  inputItem.placeholder = "item name"
  inputItem.type = "text";

  var inputQuantity = document.createElement("input");
  inputQuantity.id = "quantity" + count;
  inputQuantity.name = "quantity" + count;
  inputQuantity.className = "item-quantity form-control"
  inputQuantity.placeholder = "quantity"
  inputQuantity.type = "number";

  li.appendChild(inputItem);
  li.appendChild(inputQuantity);
  field_area.appendChild(li);
  //create the removal link
  var removalLink = document.createElement("a");
  removalLink.onclick = function () {
    this.parentNode.parentNode.removeChild(this.parentNode);
  };
  var removalIcon = document.createElement("span")
  removalIcon.className = "fas fa-times"
  removalLink.appendChild(removalIcon);
  li.appendChild(removalLink);
  count++;
}
