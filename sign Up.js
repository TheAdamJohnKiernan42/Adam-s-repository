function signUp() {
    if (document.getElementById("fullname").value == "") {
        return false;
    }
    else if (document.getElementById("email").value == "") {
        return false;
    }
    else if (document.getElementById("username").value == "") {
        return false;
    }
    else if (document.getElementById("password").value == ""){
        return false;
    }
    else{
        alert("Thank you for signing up")
    }
}