const currentDate = new Date();

console.log("Current Date: ", currentDate)
console.log("Date: ", currentDate.getDate())
console.log("Month: ", currentDate.getMonth()+1) //Months are 0-indexed
console.log("Day: ", currentDate.getDay())
console.log("Year: ", currentDate.getFullYear())
console.log("Hours: ", currentDate.getHours())
console.log("Minutes: ", currentDate.getMinutes())
console.log("Seconds: ", currentDate.getSeconds()) 


// setting components of the date
currentDate.setFullYear(2024)
console.log("After setFullYear: ", currentDate)

currentDate.setMonth(5); //setting month to June (0-indexed)
console.log(currentDate.getMonth())



// getting and setting time in milliseconds since 1970
console.log("Time in milliseconds since 1970: ", currentDate.getTime())