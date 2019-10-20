
function registerHandlers(){
    document.getElementById("username").onblur=validUN;
    document.getElementById("email").onblur=validEM;
    document.getElementById("password").onblur=validPW;
    document.getElementById("password_repeat").onblur=validRPW;
    document.getElementById("firstname").onblur=validFN;
    document.getElementById("lastname").onblur=validLN;
    document.getElementById("address1").onblur=validAD;
    document.getElementById("address2").onblur=validAD2;
    document.getElementById("state").onblur=validST;
    document.getElementById("city").onblur=validCT;
    document.getElementById("zipcode").onblur=validPW;
    document.getElementById("phonenumber").onblur=validPW;
    document.getElementById("password").onblur=validPW;

}

function validUN(){
    var userName = document.getElementById('username').value;
    if(userName == "") {
        document.getElementById('username').style.borderColor = "red";
        document.getElementById('UNerror').innerText="Username is required";
    }
    else if(userName.length > 50 || userName.length < 6){
        document.getElementById('username').style.borderColor = "red";
        document.getElementById('UNerror').innerText="Username must be between 6 and 50 characters."

    }else{
        document.getElementById('username').style.borderColor = "green";
        document.getElementById('UNerror').innerHTML="&nbsp";
    }
}
function validEM() {
    var email = document.getElementById('email').value;
    if(email == ""){
        document.getElementById('email').style.borderColor = "red";
        document.getElementById('EMerror').style.color = "red";
        document.getElementById('EMerror').innerText="Email is required.";
    }
    else{
        document.getElementById('email').style.borderColor = "green";
        document.getElementById('EMerror').innerHtml="&nbsp";
    }
}

function regexPW(password) {
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s)$/;
    if(password.test(regex)){   // this ish dont work
        return true;
    }else
        return false;
}

function validPW(){
    var password = document.getElementById('password').value;
    if(password == ""){
        document.getElementById('PWerror').style.borderColor = "red";
        document.getElementById('PWerror').style.color = "red";
        document.getElementById('PWerror').innerText="Password is required.";
    }
    else if(password.length > 50 || password.length < 8){
        document.getElementById('password').style.borderColor = "red";
        document.getElementById('PWerror').innerText="Password must be between 8 and 50 characters.";
    }
    else if(regexPW(password)){
        document.getElementById('password').style.borderColor = "red";
        document.getElementById('PWerror').innerText="Must have 1 capital, 1 lower, 1 digit, and 1 spec char.";
    }
    else{
        document.getElementById('password').style.borderColor = "green";
        document.getElementById('PWerror').innerHtml="&nbsp";
    }
}

function validFN(){
    var firstName = document.getElementById('firstname').value;
    if(firstName == "") {
        document.getElementById('firstname').style.borderColor = "red";
        document.getElementById('error').innerText="first must be between 8 a";
    }else{
        document.getElementById('firstname').style.borderColor = "green";
    }
}
