document.addEventListener("DOMContentLoaded", function () {

    console.log("bydefault call");

    const check = document.getElementById("check");
    const user_password = document.getElementById("user_password");

    check.addEventListener("click", togglepassword);

    function togglepassword() {
        if (check.checked) {

            user_password.type = "text";
        } else {
            user_password.type = "password";
        }
    }

});



let email = "test@gmail.com";
let password = 123456;


console.log("kkkk", document.getElementById("submit_login_form"));

document.getElementById("user_email_error").textContent = "";


document.getElementById("submit_login_form").addEventListener("submit", function (event) {

    event.preventDefault();


    let userEnteredEmail = document.getElementById("user_email").value;
    let userEnteredPassword = document.getElementById("user_password").value;


    if (userEnteredEmail === "") {
        document.getElementById("user_email_error").textContent = "Enter email";
        return
        
    }


    if (userEnteredPassword === "") {
        document.getElementById("user_password_error").textContent = "Enter password";
        return
    }


    console.log("details", userEnteredEmail, userEnteredPassword);





})









