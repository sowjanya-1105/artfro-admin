



// function store(){
//     if(sessionStorage.getItem("is_user_id")){
//         console.log("ggggg");
//         window.location.href = "home.html";

//     }else{
//         console.log("else");
//         window.location.href = "index.html";

//     }

// }
// document.addEventListener('DOMContentLoaded', function(){
//     console.log("load");
//     if(sessionStorage.getItem("is_user_id")){
//         console.log("ggggg");
//         window.location.href = "home.html";

//     }else{
//         console.log("else");
//         window.location.href = "index.html";

//     }
// })
document.addEventListener('DOMContentLoaded', function () {

    const currentPage = window.location.pathname;
    console.log("session", sessionStorage.getItem("is_user_id"));

    if (sessionStorage.getItem("is_user_id") != null) {
        console.log("if");

        if (!currentPage.includes("home.html")) {
            window.location.href = "home.html";
        }
    } else {
        console.log("else");

        if (!currentPage.includes("index.html")) {
            window.location.href = "index.html";
        }
    }
});




let userEnteredEmail = document.getElementById("user_email");
let userEnteredPassword = document.getElementById("user_password");

document.addEventListener('input', (evt) => {

    if (evt.target.value === "") {
        if (evt.target.id === "user_email") {
            showError("user_email_error", "Enter emails",)
        }

        if (evt.target.id === "user_password") {
            showError("user_password_error", "Enter password",)
        }

    }


    if (evt.target.value !== "") {
        if (evt.target.id === "user_email") {
            showError("user_email_error", "",)
        }

        if (evt.target.id === "user_password") {
            showError("user_password_error", "",)
        }

    }

    function showError(error_id, message) {
        document.getElementById(error_id).textContent = message;
        return
    }
})

// userEnteredEmail.addEventListener('input', (evt) => {

//     if (evt.target.value === "") {
//         document.getElementById("user_email_error").textContent = "Enter email"
//     }

//     else {
//         document.getElementById("user_email_error").textContent = ""
//     }

// })



// userEnteredPassword.addEventListener('input', (evt) => {

//     if (evt.target.value === "") {
//         document.getElementById("user_password_error").textContent = "Enter password"
//     }
//     else {
//         document.getElementById("user_password_error").textContent = ""
//     }

// })
// console.log("delete",sessionStorage.setItem("key" ,"name"));
// console.log("item",sessionStorage.getItem("key"));
// console.log("hhh",sessionStorage.removeItem("key"));
// console.log("item",sessionStorage.getItem("key"));

// function store(){
//     if (sessionStorage.getItem ("key")=== null){
//         window.location.href = "index.html";

//     }

// }
// console.log("jjj" ,store());





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
    } else if (userEnteredEmail.value == email) {



        // document.getElementById("loading_gif_id").style.display = "block";
        document.getElementById("loading_gif_id").style.display = "block";
        document.getElementById("submit_btn").disabled = true;


        function changeLod() {
            setTimeout(function () {
                userEnteredEmail.value = "";
                userEnteredPassword.value = "";
                document.getElementById("loading_gif_id").style.display = "none";
                sessionStorage.setItem("is_user_id","true");
                window.location.href = "home.html";
            }, 2000);

        }
        changeLod()

    }





});
document.addEventListener('DOMContentLoaded', function () {

    const change_eye_icon = document.getElementById("show_password_eye");

    const password = document.getElementById("user_password");

    change_eye_icon.addEventListener("click", function () {

        if (password.type === "password") {

            password.type = "text";
            change_eye_icon.className = "fa-solid fa-eye";
            console.log("open eye", change_eye_icon.className);

        } else {
            password.type = "password";
            change_eye_icon.className = "fa-solid fa-eye-slash";
            console.log("close", change_eye_icon.className);
            return

        }
    })





});



console.log("iiiii");


    // const active_items = document.querySelectorAll(".nav_list_items");


    // active_items.addEventListener("click",function(){
    //     console.log("itemmmmm",active_items);
        
    //     active_items.forEach(item =>{
    //         item.classList.remove("active");
    //         this.item.classList.add("active");
    //     })
    // })

    


  
    
function pageChange(){
    sessionStorage.clear();
    window.location.href = "index.html";


}














