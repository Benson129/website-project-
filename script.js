function login() {

    let username = document.getElementById("username").value;

    let password = document.getElementById("password").value;

    if(username == "Uchenna" && password == "Python123"){

        window.location.href = "home.html";

    }

    else{

        alert("❌ Wrong Username or Password!🤬🤬");

    }

}