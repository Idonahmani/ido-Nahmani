console.log("Ido Nahmani")

function myFunction1() {
    const inpObj = document.getElementById("id");
    if (!inpObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inpObj.validationMessage;
    } else {
    document.getElementById("demo").innerHTML = "Input OK";
    } 
    const inpObj1 = document.getElementById("email");
    if (!inpObj1.checkValidity()) {
        document.getElementById("demo1").innerHTML = inpObj1.validationMessage;
        } else {
        document.getElementById("demo1").innerHTML = "Input OK";
        } 
    } 