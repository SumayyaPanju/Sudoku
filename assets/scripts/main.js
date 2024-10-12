/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------Changing themes*/

//Variables defined
const myBody = document.getElementsByTagName("body")[0];
const homeContainer = document.getElementById("home-container");
const buttonsText = document.getElementsByClassName("buttons-text");
const labels = document.getElementsByTagName("label");
const lightModeOption = document.getElementById("light-mode");
const darkModeOption = document.getElementById("dark-mode");

//Functions to activate Dark Theme
function darkThemeActivation() {
    //Change background background colour
    myBody.style.backgroundColor = "#1c1414";
    //Change container background colour
    homeContainer.style.backgroundColor = "#1c1414";
    //Loop that allows all classes of 'buttons-text' to be selected and styled
    for (let item of buttonsText) {
      item.style.backgroundColor = "#ECDFCC";
      item.style.color = "#1c1414";
    }
    //Loop that allows all tags of 'label' to be selected and styled
    for (let item of labels) {
      item.style.color = "#ECDFCC";
    }}