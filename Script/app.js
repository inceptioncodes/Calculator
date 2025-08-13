const lightTheme = "Style/lightModeStyle.css";
const darkTheme = "Style/darkModeStyle.css";
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

// Dark And Light Mode Switch

const toast = document.getElementById("head");
const theme = document.getElementById("theme");
const themeIcon = document.getElementById("theme-style");

themeIcon.addEventListener("click",() =>{
    setTimeout(() => {
    toast.innerHTML = "Calculator";
  }, 1000);
  if (theme.getAttribute("href") === lightTheme) {
    theme.setAttribute("href", darkTheme);
    themeIcon.classList.replace("fa-moon","fa-sun");
    toast.innerHTML = "Dark Mode 🌙";
  } else {
    theme.setAttribute("href", lightTheme);
    themeIcon.classList.replace("fa-sun","fa-moon");
    toast.innerHTML = "Light Mode ☀️";
  }
});

// Calculator logic part

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    });
});