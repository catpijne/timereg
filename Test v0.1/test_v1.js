document.body.style.background = "rgb(255, 255, 255)"; 
let Default_KM_traveld=0;
console.log(Default_KM_traveld);


Default_KM_traveld = localStorage.getItem("Declaratie_kilometers");




function addUserInterface(){
  let node = document.createElement("DIV");
  document.body.appendChild(node).setAttribute("class", "UI_interface");
  const UI_interface=document.getElementsByClassName("UI_interface")[0];
  node = document.createElement("INPUT");
  node.setAttribute("type", "text");
  node.setAttribute("value", "KM");
  node.setAttribute("id", "KM");
  UI_interface.appendChild(node);
  node = document.createElement("BUTTON");
  let textnode = document.createTextNode("New default");
  node.appendChild(textnode);
  UI_interface.appendChild(node).setAttribute("id", "ButtonDefault");
  document.getElementById("ButtonDefault").addEventListener("click", setDeaultKM);
}


function setDeaultKM(){
  
  Default_KM_traveld=document.getElementById("KM").value;
  localStorage.setItem("Declaratie_kilometers", Default_KM_traveld);
  setKMValueInSheet();
}
function setKMValueInSheet(){
  
  let maxLength =document.getElementsByClassName("PortletText2").length;
  console.log(maxLength);
  let i = maxLength-8;
  for( i; i < maxLength; i++){
  	document.getElementsByClassName("PortletText2")[i].lastChild.value = Default_KM_traveld;
	}
   
}
setKMValueInSheet();
addUserInterface();
