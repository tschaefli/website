function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username=="admin123") {
        wronguser = false;
        if(password=="root") {
            wrongpw = false;
            alert("sucessfull");
        } else {
            wrongpw = true;
        }
    } else {
        wronguser = true;
    }
}