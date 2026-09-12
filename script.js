var a = document.GetElementById("loginBtn");
var b = document.GetElementById("registerBtn");
var x = document.GetElementById("login");
var y = document.GetElementById("register");

function login() {
    x.style.left = "4px";
    y.style.right = "-520px";
}

function register() {
    x.style.left = "-510px";
    y.style.right = "5px";
}