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





    let userEnteredEmail = document.getElementById("user_email");
    let userEnteredPassword = document.getElementById("user_password");

    userEnteredEmail.addEventListener('input', (evt) => {

        if (evt.target.value === "") {
            document.getElementById("user_email_error").textContent = "Enter email"
        }

        else {
            document.getElementById("user_email_error").textContent = ""
        }

    })



    userEnteredPassword.addEventListener('input', (evt) => {

        if (evt.target.value === "") {
            document.getElementById("user_password_error").textContent = "Enter password"
        }
        else {
            document.getElementById("user_password_error").textContent = ""
        }

    })







    let email = "test@gmail.com";
    let password = 123456;


    // console.log("kkkk", document.getElementById("submit_login_form"));




    document.getElementById("submit_login_form").addEventListener("submit", function (event) {

        event.preventDefault();

        let email = 'test@gmail.com';
        let password = 123456;
        console.log("email", email, password);


        if (userEnteredEmail.value === "") {
            document.getElementById("user_email_error").textContent = "Enter email";
            return


        } else if (userEnteredEmail.value != email) {
            document.getElementById("user_email_error").textContent = "invalid email"
            return

        }
       

        if (userEnteredPassword.value === "") {
            document.getElementById("user_password_error").textContent = "Enter password";
            return;
        } else if (userEnteredPassword.value != password) {
            document.getElementById("user_password_error").textContent = "invalid password"
        } else if(userEnteredEmail.value == email) {
            userEnteredEmail.value = "";
            userEnteredPassword.value = "";
            // alert("submitted successfully")

            window.location.href = "home.html";

        }

      

    });

   

















