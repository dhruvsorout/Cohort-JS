// function onDone(){
//     console.log("hi there")
// }

// setTimeout(onDone, 1000)
// console.log("after setTimeout")




const fs = require("fs")

fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(data)
})