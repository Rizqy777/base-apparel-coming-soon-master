const inputElement = document.getElementById("input");
const button = document.querySelector(".button");
const containerMain = document.querySelector(".container_main");
const containerMainHidden = document.querySelector(".container_main_hidden");
const email = document.querySelector(".email");
const invalidEmail = document.querySelector(".valid_email");
const errorIcon = document.querySelector(".error");
const inputContainer = document.querySelector(".input-container")

button.addEventListener("click", () => {
    const inputValue = inputElement.value.trim();
    if (inputValue !== "") {
        if (inputValue.includes("gmail.com") || inputValue.includes("hotmail.com")) {
            containerMain.classList.toggle("desactived");
            containerMainHidden.classList.toggle("active");
            email.textContent = inputValue; 
            invalidEmail.style.display = "none"; 
            errorIcon.style.display = "none";
            
        } else {
            invalidEmail.style.display = "block";
            errorIcon.style.display = "block";
        
            inputContainer.style.border= "1px solid red"
        }
    }
});


inputElement.addEventListener("click", () => {
    invalidEmail.style.display = "none"; 
    errorIcon.style.display = "none";
    inputContainer.style.border= "1px solid grey"
    
});