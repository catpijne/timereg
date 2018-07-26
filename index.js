(function () {
  document.body.style.background = "rgb(255, 255, 0)";

  let defaultKilometersComment = getDefaultComment();
  let defaultKilometersTravelled = getDefaultKilometers();
  const kilometerTextboxIdentifier = "KM";
  const commentTextboxIdentifier = "Commend";
  const getClassNameTimereg = "PortletText2";
  const defaultButtonId= "ButtonDefault";
  const textInputType= "text";
  const checkboxInput= "checkbox"

  setKMValueInSheet(defaultKilometersTravelled, defaultKilometersComment);
  addUserInterface();

  function addUserInterface() {
    let node = document.createElement("DIV");
    document.body.appendChild(node).setAttribute("class", "UI_interface");
    const userInterfaceRootElement = document.getElementsByClassName("UI_interface")[0];
    addCheckboxInterface(userInterfaceRootElement);
    AddInputBox(userInterfaceRootElement, kilometerTextboxIdentifier, textInputType);
    AddInputBox(userInterfaceRootElement, commentTextboxIdentifier, textInputType);
    AddButton(userInterfaceRootElement, defaultButtonId);
  }

  function AddInputBox(parentElement, Id, InputType) {
    let node = document.createElement("INPUT");
    node.setAttribute("type", InputType);
    node.setAttribute("value", Id);
    node.setAttribute("id", Id);
    parentElement.appendChild(node);
  }

  function AddButton(parentElement, buttonId) {
    let node = document.createElement("BUTTON");
    let textnode = document.createTextNode("New default");
    node.appendChild(textnode);
    parentElement.appendChild(node).setAttribute("id", buttonId);
    document.getElementById(buttonId).addEventListener("click", setStorageValues);
  }

  function setStorageValues() {
    defaultKilometersComment = document.getElementById(commentTextboxIdentifier).value;
    defaultKilometersTravelled = document.getElementById(kilometerTextboxIdentifier).value;

    setDefaultComment(defaultKilometersComment);
    setDefaultKilometers(defaultKilometersTravelled);
    setKMValueInSheet(defaultKilometersTravelled, defaultKilometersComment);
  }

  function setKMValueInSheet(kilometers, comment) {
    let maxLength = document.getElementsByClassName(getClassNameTimereg).length;

    let i = maxLength - 8;
    for (i; i < maxLength - 3; i++) {
      document.getElementsByClassName(getClassNameTimereg)[i].lastChild.value = kilometers;
    }

    document.getElementsByClassName(getClassNameTimereg)[maxLength - 2].lastChild.value = comment;
  }

  function getDefaultComment() {
    return localStorage.getItem("defaultKilometersComment") ? localStorage.getItem("defaultKilometersComment") : "";
  }

  function getDefaultKilometers() {
    return localStorage.getItem("defaultKilometersTravelled") ? localStorage.getItem("defaultKilometersTravelled") : 0;
  }

  function setDefaultComment(value) {
    return localStorage.setItem("defaultKilometersComment", value);
  }

  function setDefaultKilometers(value) {
    return localStorage.setItem("defaultKilometersTravelled", value);
  }
  function addCheckboxInterface(userInterfaceRootElement){
    let node = document.createElement("Table");
    userInterfaceRootElement.appendChild(node).setAttribute("class", "UI_checkbox_table");
    node = document.createElement("tr");
    document.getElementsByClassName("UI_checkbox_table")[0].appendChild(node).setAttribute("id", "UI_checkbox_header");
    const userInterfaceTableHeaderElement = document.getElementById("UI_checkbox_header");
    AddTableHeaderCheckbox(userInterfaceTableHeaderElement, "location naam");
    AddTableHeaderCheckbox(userInterfaceTableHeaderElement, "KM");
    AddTableHeaderCheckbox(userInterfaceTableHeaderElement, "Commentaar");
    AddTableHeaderCheckbox(userInterfaceTableHeaderElement, "maandag");
    AddTableHeaderCheckbox(userInterfaceTableHeaderElement, "dinsdag");
    AddTableHeaderCheckbox(userInterfaceTableHeaderElement, "woensdag");
    AddTableHeaderCheckbox(userInterfaceTableHeaderElement, "donderdag");
    AddTableHeaderCheckbox(userInterfaceTableHeaderElement, "vrijdag");
    
    node = document.createElement("tr");
    document.getElementsByClassName("UI_checkbox_table")[0].setAttribute("id", "UI_checkbox");
    const userInterfaceCheckboxElement = document.getElementById("UI_checkbox");
    AddInputCheckBox( userInterfaceCheckboxElement, "locationName", textInputType);
    AddInputCheckBox( userInterfaceCheckboxElement, kilometerTextboxIdentifier, textInputType);
    AddInputCheckBox( userInterfaceCheckboxElement, commentTextboxIdentifier, textInputType);
    AddInputCheckBox( userInterfaceCheckboxElement, "Maandag", checkboxInput);
    AddInputCheckBox(userInterfaceCheckboxElement, "Dinsdag", checkboxInput);
    AddInputCheckBox( userInterfaceCheckboxElement, "Woensdag", checkboxInput);
    AddInputCheckBox(userInterfaceCheckboxElement, "Donderdag", checkboxInput);
    AddInputCheckBox( userInterfaceCheckboxElement, "Vrijdag", checkboxInput);
  }
  function AddInputCheckBox(parentElement, Id, InputType) {
    let node = document.createElement("td");
    parentElement.appendChild(node).setAttribute("class", Id);
    parentElement=document.getElementsByClassName(Id)[0];
    node = document.createElement("INPUT");
    node.setAttribute("type", InputType);
    node.setAttribute("id", Id);
    parentElement.appendChild(node);
  }
  function AddTableHeaderCheckbox(parentElement, contextHeader){
    let node = document.createElement("th");
    node.textContent+=contextHeader
    parentElement.appendChild(node);
  }

  

  
})();