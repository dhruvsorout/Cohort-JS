// Array handbook

// Array: push(), pop(), shift(), unshift(), splice(), slice(), concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output, play and learn by doing

/*
    push()
*/
function pushExample(arr, element){
    console.log("Original Array: ", arr)

    arr.push(element)
    console.log("After push: ", arr)
}
// pushExample([1,2,3], 4)



/*
    pop()
*/
function popExample(arr){
    console.log("Original Array: ", arr)

    arr.pop()
    console.log("After pop: ", arr)
}
// popExample([1,2,3])


/*
    shift()
*/
function shiftExample(arr){
    console.log("Original Array: ", arr)

    arr.shift()
    console.log("After shift: ", arr)
}
// shiftExample([1,2,3]) 



/*
    unshift()
*/
function unShiftExample(arr, val){
    console.log("Original Array: ", arr)

    arr.unshift(val)
    console.log("After shift: ", arr)
}
// unShiftExample([1,2,3], 0) 



/*
    concat()
*/
function concatExample(arr1, arr2){
    console.log("Original Array: ", arr1, arr2)

    const arr3 = arr1.concat(arr2)
    console.log("After concat: ", arr3)
}
// concatExample([1,2,3], [4,5,6]) 



/*
    forEach()
*/
const arr = [1,2,3,4]
// arr.forEach(function(item, index){
//     // console.log(item, index)
// })