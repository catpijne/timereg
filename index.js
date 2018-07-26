(function () {
  document.body.style.background = "rgb(255, 255, 0)";

  let defaultKilometersComment = getDefaultComment();
  let defaultKilometersTravelled = getDefaultKilometers();
  const kilometerTextboxIdentifier = "KM";
  const commentTextboxIdentifier = "Commend";
  const getClassNameTimereg = "PortletText2";
  const defaultButtonId= "ButtonDefault";

  setKMValueInSheet(defaultKilometersTravelled, defaultKilometersComment);
  addUserInterface();

  function addUserInterface() {
    let node = document.createElement("DIV");
    document.body.appendChild(node).setAttribute("class", "UI_interface");
    const userInterfaceRootElement = document.getElementsByClassName("UI_interface")[0];
    AddInputBox(userInterfaceRootElement, kilometerTextboxIdentifier);
    AddInputBox(userInterfaceRootElement, commentTextboxIdentifier);
    AddButton(userInterfaceRootElement, defaultButtonId);
  }

  function AddInputBox(parentElement, Id) {
    let node = document.createElement("INPUT");
    node.setAttribute("type", "text");
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
})();