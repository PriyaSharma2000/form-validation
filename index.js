let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let errorMsg = document.querySelectorAll('.error');
let btn = document.querySelector('.btn');
let form = document.querySelector('.form');

let engine = (id, errorIndex, message) => {
    if(id.value.trim() === ""){
        errorMsg[errorIndex].innerHTML = message;
        id.style.border = "2px solid red";
    }
    else{
        errorMsg[errorIndex].innerHTML = "";
        id.style.border = "2px solid green";
    }
}

form.addEventListener("submit",(e) => {
    e.preventDefault();
    engine(username, 0, "Username cannot be blank");
    engine(email, 1, "Email cannot be blank");
    engine(password, 2, "Password cannot be blank");
    alert(`Username --> ${username.value}
Email --> ${email.value}
Password --> ${password.value}`)
});