function calculateSum(){
    let x = parseFloat(document.getElementById("num1").value);
    let y = parseFloat(document.getElementById("num2").value);

    document.getElementById("finalSum").innerHTML = "Sum of First and Last Number is: " + (x+y)
}