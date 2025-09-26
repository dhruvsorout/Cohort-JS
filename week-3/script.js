function myFunction() {
    var x = document.getElementById("LoginForm").elements.length;

    var y = document.getElementById("LoginForm").elements[0].value;

    document.getElementById("displayspace").innerHTML = "Found " + x + " elements in the form." + "first name entered is: " + y


    const para = document.createElement("p");
    para.innerText = "This is a paragraph created via DOM."
    document.body.appendChild(para);
}