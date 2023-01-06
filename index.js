let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let errorMsg = document.querySelectorAll(".error");
let btn = document.querySelector(".btn");
let form = document.querySelector(".form");

function nameValidate(){
    let username = document.querySelector("#username").value.trim();
    if(username === ""){
        errorMsg[0].innerHTML = "**Username cannot be blank";
        document.querySelector("#username").style.border = "2px solid red";
    }
    else if(!isNaN(username)){
        errorMsg[0].innerHTML = "**Only characters are allowed";
        document.querySelector("#username").style.border = "2px solid red"
    }
    else{
        errorMsg[0].innerHTML = "";
        document.querySelector("#username").style.border = "2px solid green";
        alert(`Username --> ${username}`);
    }
}

function emailValidate(){
    let email = document.querySelector("#email").value.trim();
    if(email === ""){
        errorMsg[1].innerHTML = "Email cannot be blank";
        document.querySelector("#email").style.border = "2px solid red";
    }
    else {
        errorMsg[1].innerHTML = "";
        document.querySelector("#email").style.border = "2px solid green";
        alert(`Email --> ${email}`);
    }
}

function passwordValidate(){
    let password = document.querySelector("#password").value.trim();
    if(password === ""){
        errorMsg[2].innerHTML = "**Password cannot be blank";
        document.querySelector("#password").style.border = "2px solid red";
    }
    else if(password.length < 8){
        errorMsg[2].innerHTML = "**Password length must be atleast 8 characters"
        document.querySelector("#password").style.border = "2px solid red";
    }
    else if(password.length > 15){
        errorMsg[2].innerHTML = "**Password length must not exceed 15 characters";
        document.querySelector("#password").style.border = "2px solid red";
    }
    else{
        errorMsg[2].innerHTML = "";
        document.querySelector("#password").style.border = "2px solid green";
        alert(`Password --> ${password}`);
    }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  nameValidate();
  emailValidate();
  passwordValidate();
});

function resetFunction() {
  username.innerHTML = "";
  email.innerHTML = "";
  password.innerHTML = "";
}