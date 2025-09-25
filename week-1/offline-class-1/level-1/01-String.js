/*
    string length
*/
function getLength(str){
    console.log("Origianl String: ", str)
    console.log("Length: ", str.length)
}
// getLength("Hello World")



/*
    index of & last index of
*/
function findIndexOf(str, tar){
    console.log("Origianl String: ", str)
    console.log("Index: ", str.lastIndexOf(tar))
}
// findIndexOf("Hello World World World", "World")



/*
    slice
*/
function getSlice(str, start, end){
    console.log("Origianl String: ", str)
    console.log("After slice: ", str.slice(start, end))
}
// getSlice("Hello World", 0, 5)



/*
    substring
*/
function getSubstring(str, start, end){
    console.log("Original String: ", str)
    console.log("After substring: ", str.substring(start, end))
}
// getSubstring("Hello World", 0, 5)



/*
    replace
*/
// console.log("Hello world".replace("world", "javascript"))



/*
    split
*/
const msg = "hi,my,name,is,dhruv"
const words = msg.split(",")
// console.log(words)



/*
    trim
*/
const value = "            dhruv sorout    "
// console.log(value.trim())



/*
    tolowercase & touppercase
*/
console.log("Dhruv Sorout".toLowerCase())
console.log("dhruv sorout".toUpperCase())