

function registration() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var Cpass = document.getElementById("cpassword").value;

    if (name === "" || name == null) {
        document.getElementById("nameerror").innerHTML = "**username  can not be blank";
        document.getElementById("nameerror").style.color = "#000 ";

        return false;

    }
    if (email.trim() === "" || email.trim() == null) {
        document.getElementById("emailerror").innerHTML = "**Email can not be blank";
        document.getElementById("emailerror").style.color = "#000 ";

        return false;

    }
    if (pass.trim() === "" || pass.trim() == null) {
        document.getElementById("paserror").innerHTML = "**password can not be blank";
        document.getElementById("paserror").style.color = "#000 ";

        return false;


    }
    if (Cpass.trim() === "" || Cpass.trim() == null) {
        document.getElementById("cpaserror").innerHTML = "**password can not be blank";
        document.getElementById("cpaserror").style.color = "#000 ";

        return false;

    }
    if (pass !== Cpass) {
        document.getElementById("cpaserror").innerHTML = "**password did not matched";
        document.getElementById("cpaserror").style.color = "#000 ";

        return false;
    } else {
        return true
    }
}