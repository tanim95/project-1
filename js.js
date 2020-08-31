
function validate() {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;

  var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.trim() === "" || email.trim() == null) {
    document.getElementById("error").innerHTML = "**Email can not be blank";
    document.getElementById("error").style.color = "#570707";

    return false;
  }

  if (pass.trim() === "" || pass.trim() == null) {
    document.getElementById("passerror").innerHTML =
      "**password can not be blank";
    document.getElementById("passerror").style.color = "#570707";

    return false;
  }

  if (pass.trim().length > 15) {
    document.getElementById("passerror").innerHTML = "**password must be less than 15 character";
    document.getElementById("passerror").style.color = "#570707";

    return false;
  }

  if (pass.trim().length < 6) {
    document.getElementById("passerror").innerHTML = "**password is too short";
    document.getElementById("passerror").style.color = "#570707";

    return false;
  }

  if (reg.test(email)) {
    return true;
  } else {
    document.getElementById("error").innerHTML = "**please enter a valid email";
    document.getElementById("error").style.color = "#570707";
    return false;
  }

} 