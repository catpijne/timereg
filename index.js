(function () {
  document.body.style.background = "rgb(255, 255, 0)";

  let defaultKilometersComment = getDefaultComment();
  let defaultKilometersTravelled = getDefaultKilometers();

  setKMValueInSheet(defaultKilometersTravelled, defaultKilometersComment);
  addUserInterface();

  function addUserInterface() {
    let node = document.createElement("DIV");
    document.body.appendChild(node).setAttribute("class", "UI_interface");
    const UI_interface = document.getElementsByClassName("UI_interface")[0];
    node = document.createElement("INPUT");
    node.setAttribute("type", "text");
    node.setAttribute("value", "KM");
    node.setAttribute("id", "KM");
    UI_interface.appendChild(node);
    node = document.createElement("INPUT");
    node.setAttribute("type", "text");
    node.setAttribute("value", "Commend");
    node.setAttribute("id", "Commend");
    UI_interface.appendChild(node);
    node = document.createElement("BUTTON");
    let textnode = document.createTextNode("New default");
    node.appendChild(textnode);
    UI_interface.appendChild(node).setAttribute("id", "ButtonDefault");
    document.getElementById("ButtonDefault").addEventListener("click", setStorageValues);
  }

  function setStorageValues() {
    defaultKilometersComment = document.getElementById("Commend").value;
    defaultKilometersTravelled = document.getElementById("KM").value;
    let Default_KM = {
      defaultKilometersComment,
      defaultKilometersTravelled
    }
    console.log(Default_KM);

    setDefaultComment(defaultKilometersComment);
    setDefaultKilometers(defaultKilometersTravelled);

    setKMValueInSheet(defaultKilometersTravelled, defaultKilometersComment);
  }

  function setKMValueInSheet(kilometers, comment) {
    let maxLength = document.getElementsByClassName("PortletText2").length;
    console.log(maxLength);
    let i = maxLength - 8;
    for (i; i < maxLength - 3; i++) {
      document.getElementsByClassName("PortletText2")[i].lastChild.value = kilometers;
    }
    document.getElementsByClassName("PortletText2")[maxLength - 2].lastChild.value = comment;

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