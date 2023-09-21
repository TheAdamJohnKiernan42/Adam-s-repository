function signIn() {

    if (document.getElementById("username").value == "") {
        return false;
    }
    else if (document.getElementById("password").value == ""){
        return false;
    }
    else{
        alert("Thank you for signing in")
    }
}