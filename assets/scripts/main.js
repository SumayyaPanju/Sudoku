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
  }
  // HTML elements converted to arrays for on Hover and off Hover
  Array.from(buttonsText).forEach((button) => {
    // On Hover
    button.addEventListener("mouseenter", () => {
      button.style.backgroundColor = "#1c1414";
      button.style.color = "#ECDFCC";
    });

    // Off hover
    button.addEventListener("mouseleave", () => {
      button.style.backgroundColor = "#ECDFCC";
      button.style.color = "#1c1414";
    });
  });
  console.log("Dark mode activated");
}

//Switch back to light mode - deactivate dark mode. 
function lightThemeActivation() {
    myBody.style.backgroundColor = "";
    homeContainer.style.backgroundColor = "";
  
    for (let item of buttonsText) {
      item.style.backgroundColor = "";
      item.style.color = "";
    }
  
    for (let item of labels) {
      item.style.color = "";
    }
  
    Array.from(buttonsText).forEach((button) => {
      // On Hover
      button.addEventListener("mouseenter", () => {
        button.style.backgroundColor = "";
        button.style.color = "";
      });
  
      // Off hover
      button.addEventListener("mouseleave", () => {
        button.style.backgroundColor = "";
        button.style.color = "";
      });
    });
    console.log("Light mode activated");
  }