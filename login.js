function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username=="admin123" && password=="root") {
        alert("done");
    } else {
        alert("failed");
    }
}