
document.addEventListener("DOMContentLoaded", ()=> {
    
    let password = document.querySelector("#password").value;
    let confPassword = document.querySelector("#confPassword").value;
    
    let errorMessage = document.querySelector(".error-message");

    if(password == "" && confPassword == ""){
        errorMessage.innerHTML = "*Passwords do not match";
    }else if(password === confPassword){
        errorMessage.innerHTML = "";
    }
})