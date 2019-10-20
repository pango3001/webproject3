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
    document.getElementById("zipcode").onblur=validZP;
    document.getElementById("phonenumber").onblur=validPN;
    document.getElementById("gender").onblur=validGN;
    document.getElementById("marital_status").onblur=validMS;
    document.getElementById("birth_day").onblur=validBD;
}

function validUN(){
    var userName = document.getElementById('username').value;
    if(userName == ""){
        document.getElementById('username').style.borderColor = "red";
        document.getElementById('UNerror').innerText="Username is required";
        document.getElementById('UNerror').style.color = "red";
    }
    else if(userName.length > 50 || userName.length < 6){
        document.getElementById('username').style.borderColor = "red";
        document.getElementById('UNerror').innerText="Username must be between 6 and 50 characters."
        document.getElementById('UNerror').style.color = "red";

    }else{
        document.getElementById('username').style.borderColor = "green";
        document.getElementById('UNerror').innerText="Valid input";
        document.getElementById('UNerror').style.color = "green";
    }
}

function validEM() {
    var email = document.getElementById('email').value;
    if(email == ""){
        document.getElementById('email').style.borderColor = "red";
        document.getElementById('EMerror').innerText="Email is required.";
        document.getElementById('EMerror').style.color = "red";
    }
    else if(!(isEmail(email))){
        document.getElementById('email').style.borderColor = "red";
        document.getElementById('EMerror').innerText="Email must be in x@x.xyz format";
        document.getElementById('EMerror').style.color = "red";
    }
    else{
        document.getElementById('email').style.borderColor = "green";
        document.getElementById('EMerror').innerText="Valid input";
        document.getElementById('EMerror').style.color = "green";
    }
}

function validPW(){
    var password = document.getElementById('password').value;
    if(password == ""){
        document.getElementById('password').style.borderColor = "red";
        document.getElementById('PWerror').innerText="Password is required.";
        document.getElementById('Pwerror').style.color = "red";
    }
    else if(password.length > 50 || password.length < 8){
        document.getElementById('password').style.borderColor = "red";
        document.getElementById('PWerror').innerText="Password must be between 8 and 50 characters.";
        document.getElementById('PWerror').style.color = "red";
    }
    else if(!(regexPW(password))){
        document.getElementById('password').style.borderColor = "red";
        document.getElementById('PWerror').innerText="Must have 1 capital, 1 lower, 1 digit, and 1 special char.";
    }
    else{
        document.getElementById('password').style.borderColor = "green";
        document.getElementById('PWerror').innerText="Valid input";
        document.getElementById('PWerror').style.color = "green";
    }
}

function validRPW(){
    var password2 = document.getElementById('password_repeat').value;
    var password = document.getElementById('password').value;
    if(password == ""){
        document.getElementById('password_repeat').style.borderColor = "red";
        document.getElementById('RPWerror').innerText="Please retype password.";
        document.getElementById('RPwerror').style.color = "red";
    }
    else if(password != password2){
        document.getElementById('password_repeat').style.borderColor = "red";
        document.getElementById('RPWerror').innerText="Passwords must match.";
        document.getElementById('RPWerror').style.color = "red";
    }
    else if(password.length > 50 || password.length < 8){
        document.getElementById('password_repeat').style.borderColor = "red";
        document.getElementById('RPWerror').innerText="Password must be between 8 and 50 characters.";
        document.getElementById('RPWerror').style.color = "red";
    }
    else if(!(regexPW(password2))){
        document.getElementById('password_repeat').style.borderColor = "red";
        document.getElementById('RPWerror').innerText="Must have 1 capital, 1 lower, 1 digit, and 1 special char.";
    }
    else{
        document.getElementById('password_repeat').style.borderColor = "green";
        document.getElementById('RPWerror').innerText="Valid input";
        document.getElementById('RPWerror').style.color = "green";
    }
}

function validFN(){
    var firstname = document.getElementById('firstname').value;
    if(firstname == ""){
        document.getElementById('firstname').style.borderColor = "red";
        document.getElementById('FNerror').innerText="First name is required.";
        document.getElementById('FNerror').style.color = "red";
    }
    else if(firstname.length > 50){
        document.getElementById('firstname').style.borderColor = "red";
        document.getElementById('FNerror').innerText="First name cannot exceed 50 characters.";
        document.getElementById('FNerror').style.color = "red";
    }
    else{
        document.getElementById('firstname').style.borderColor = "green";
        document.getElementById('FNerror').innerText="Valid input";
        document.getElementById('FNerror').style.color = "green";
    }
}

function validLN(){
    var lastname = document.getElementById('lastname').value;
    if(lastname == ""){
        document.getElementById('lastname').style.borderColor = "red";
        document.getElementById('LNerror').innerText="Last name is required.";
    }
    else if(lastname.length > 50){
        document.getElementById('lastname').style.borderColor = "red";
        document.getElementById('LNerror').innerText="Last name cannot exceed 50 characters.";
    }
    else{
        document.getElementById('lastname').style.borderColor = "green";
        document.getElementById('LNerror').innerText="Valid input";
        document.getElementById('LNerror').style.color = "green";
    }
}

function validAD(){
    var address = document.getElementById('address1').value;
    if(address == ""){
        document.getElementById('address1').style.borderColor = "red";
        document.getElementById('ADerror').innerText="Address is required.";
    }
    else if(address.length > 100){
        document.getElementById('address1').style.borderColor = "red";
        document.getElementById('ADerror').innerText="Last name cannot exceed 100 characters.";
        document.getElementById('ADerror').style.color = "red";
    }
    else{
        document.getElementById('address1').style.borderColor = "green";
        document.getElementById('ADerror').innerText="Valid input";
        document.getElementById('ADerror').style.color = "green";
    }
}

function validAD2(){
    var address = document.getElementById('address2').value;
    if(address.length > 100){
        document.getElementById('address2').style.borderColor = "red";
        document.getElementById('AD2error').innerText="Address 2 cannot exceed 100 characters.";
        document.getElementById('AD2error').style.color = "red";
    }
    else{
        document.getElementById('address2').style.borderColor = "green";
        document.getElementById('AD2error').innerText="Valid input";
        document.getElementById('AD2error').style.color = "green";
    }
}

function validST(){
    var state = document.getElementById('state').value;
    if(state == "NN"){
        document.getElementById('state').style.borderColor = "red";
        document.getElementById('STerror').innerText="Please select a state.";
        document.getElementById('STerror').style.color = "red";
    }
    else{
        document.getElementById('state').style.borderColor = "green";
        document.getElementById('STerror').innerText="Valid input";
        document.getElementById('STerror').style.color = "green";
    }
}

function validCT(){
    var city = document.getElementById('city').value;
    if(city == ""){
        document.getElementById('city').style.borderColor = "red";
        document.getElementById('CTerror').innerText="City is required.";
        document.getElementById('CTerror').style.color = "red";
    }
    else if(city.length > 50){
        document.getElementById('city').style.borderColor = "red";
        document.getElementById('CTerror').innerText="City cannot exceed 50 characters.";
        document.getElementById('CTerror').style.color = "red";
    }
    else{
        document.getElementById('city').style.borderColor = "green";
        document.getElementById('CTerror').innerText="Valid input";
        document.getElementById('CTerror').style.color = "green";
    }
}

function validZP(){
    var zip = document.getElementById('zipcode').value;
    if(zip == ""){
        document.getElementById('zipcode').style.borderColor = "red";
        document.getElementById('ZPerror').innerText="Zip code is required.";
        document.getElementById('ZPerror').style.color = "red";
    }
    else if(isZip(zip)){
        document.getElementById('zipcode').style.borderColor = "green";
        document.getElementById('ZPerror').innerText="Valid input";
        document.getElementById('ZPerror').style.color = "green";
    }
    else if(!(isdigit(zip))){
        document.getElementById('zipcode').style.borderColor = "red";
        document.getElementById('ZPerror').innerText="Zip code must be numeric.";
        document.getElementById('ZPerror').style.color = "red";
    }
    else if(!(zip.length == 5 || zip.length == 9)){
        document.getElementById('zipcode').style.borderColor = "red";
        document.getElementById('ZPerror').innerText="Zip code must be 5 or 9 digits";
        document.getElementById('ZPerror').style.color = "red";
    }
    else if(zip.length == 9){
        var zipNum = document.getElementById('zipcode');
        var format = zip.substr(0, 5) + '-' + zip.substr(5, 4);
        zipNum.value = format;
        document.getElementById('zipcode').style.borderColor = "green";
        document.getElementById('ZPerror').innerText="Valid input";
        document.getElementById('ZPerror').style.color = "green";
    }
    else{
        document.getElementById('zipcode').style.borderColor = "green";
        document.getElementById('ZPerror').innerText="Valid input";
        document.getElementById('ZPerror').style.color = "green";
    }
}

function validPN(){
    var phone = document.getElementById('phonenumber').value;
    if(phone.length == ""){
        document.getElementById('phonenumber').style.borderColor = "red";
        document.getElementById('PNerror').innerText="Phone number is required.";
        document.getElementById('PNerror').style.color = "red";
    }
    else if(isPhone(phone)){
        document.getElementById('phonenumber').style.borderColor = "green";
        document.getElementById('PNerror').innerText="Valid input";
        document.getElementById('PNerror').style.color = "green";
    }
    else if(!(phone.length == 10)){
        document.getElementById('phonenumber').style.borderColor = "red";
        document.getElementById('PNerror').innerText="Phone number must be 10 digits.";
        document.getElementById('PNerror').style.color = "red";
    }
    else if(!(isdigit(phone))){
        document.getElementById('phonenumber').style.borderColor = "red";
        document.getElementById('PNerror').innerText="Phone number must be numeric.";
        document.getElementById('PNerror').style.color = "red";
    }
    else{
        var phoneNum = document.getElementById('phonenumber');
        var formatted = phone.substr(0, 3) + '-' + phone.substr(3, 3) + '-' + phone.substr(6,4);
        phoneNum.value = formatted;
        document.getElementById('phonenumber').style.borderColor = "green";
        document.getElementById('PNerror').innerText="Valid input";
        document.getElementById('PNerror').style.color = "green";
    }
}

function validGN(){
    var gender = document.getElementById('gender').value;
    if(gender == ""){
        document.getElementById('gender').style.borderColor = "red";
        document.getElementById('GNerror').innerText="Gender is required.";
        document.getElementById('GNerror').style.color = "red";
    }
    else if(firstname.length > 50){
        document.getElementById('gender').style.borderColor = "red";
        document.getElementById('GNerror').innerText="Gender cannot exceed 50 characters.";
        document.getElementById('GNerror').style.color = "red";
    }
    else{
        document.getElementById('gender').style.borderColor = "green";
        document.getElementById('GNerror').innerText="Valid input";
        document.getElementById('GNerror').style.color = "green";
    }
}

function validMS(){
    var mar = document.getElementById('marital_status').value;
    if(mar == ""){
        document.getElementById('marital_status').style.borderColor = "red";
        document.getElementById('MSerror').innerText="Marital status is required.";
        document.getElementById('MSerror').style.color = "red";
    }
    else if(mar.length > 50){
        document.getElementById('marital_status').style.borderColor = "red";
        document.getElementById('MSerror').innerText="Marital status cannot exceed 50 characters.";
        document.getElementById('MSerror').style.color = "red";
    }
    else{
        document.getElementById('marital_status').style.borderColor = "green";
        document.getElementById('MSerror').innerText="Valid input";
        document.getElementById('MSerror').style.color = "green";
    }
}

function validBD(){
    var birth = document.getElementById('birth_day').value;
    if(birth == ""){
        document.getElementById('birth_day').style.borderColor = "red";
        document.getElementById('BDerror').innerText="Birth date is required.";
        document.getElementById('BDerror').style.color = "red";
    }
    else{
        document.getElementById('birth_day').style.borderColor = "green";
        document.getElementById('BDerror').innerText="Valid input";
        document.getElementById('BDerror').style.color = "green";
    }
}

function isZip(zip){
    return /^\d{5}-\d{4}$/.test(zip);
}

function isPhone(phone){
    return /^[2-9]\d{2}-\d{3}-\d{4}$/.test(phone);
}

function regexPW(password) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s)$/.test(password);
}

function isEmail(test){
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(test)
}

function isdigit(test) {
    return /^\d+$/.test(test);
}