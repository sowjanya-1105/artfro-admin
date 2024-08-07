document.addEventListener("DOMContentLoaded", function() {
    // e function lekapote by default call aypotadi painadi
    const check = document.getElementById("check");
    const pass = document.getElementById("pass");

    check.addEventListener("click", togglepassword);

    function togglepassword() {
        if (check.checked) {
            
            pass.type = "text";
        } else {
            pass.type = "password";
        }
    }


});