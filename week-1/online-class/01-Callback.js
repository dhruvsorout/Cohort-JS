function square(n){
    return n*n;
}
function cube(n){
    return n*n*n;
}
function quad(n){
    return n*n*n*n;
}
function sumOfSomething(a, b, fn){
    let num1 = fn(a);
    let num2 = fn(b);

    return num1 + num2;
}

let ans = sumOfSomething(1, 2, cube)
console.log(ans)