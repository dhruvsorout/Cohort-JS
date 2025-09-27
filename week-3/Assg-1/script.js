let timeout;
function debounceCalculateSum(){
    // delay the call to calculateSum until I've not been called for 100ms
    // and I've been called once
    // how do you cancel a clock
    // clearTimeOut
    clearTimeout(timeout);
    timeout = setTimeout(()=>{
        calculateSum()
    }, 1000)
}


function calculateSum(){
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);

    fetch("http://localhost:3001/sum?a=" + a + "&b=" + b)
        .then(function (response){
            response.text()
                .then(function (ans){
                    document.getElementById("finalSum").innerHTML = "Sum of a and b is: " + ans;
                })
        });
}

async function calculateSum2(){
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);

    const response = await fetch("http://localhost:3001/sum?a=" + a + "&b=" + b)
    const ans = await response.text();
    document.getElementById("finalSum").innerHTML = "Sum of a and b is: " + ans;
}