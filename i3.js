// Write a program to print the marks of a student in an object using for loop.
 // obj = { Harry :98 , Rohan :70 , Akash : 7}
 let marks = {
    Harry : 90,
    Shubham : 9,
    Lovish : 56,
    Monika : 4
 }

 for (let i=0;i<Object.keys(marks).length;i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

// Write the program in Q1 using for in loop.
for (let key in marks) {
    // console.log("The marks of " + key + " are " + marks[key])
   // console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

//Write a program to print "try again" until the user enters the correct number.
/* let cn = 43
let i
while (i != cn){
    console.log("Try again")
    i = prompt("Enter a number")
}
console.log("You have entered a correct number") */

//Write a function to find mean of 5 numbers.
const mean = (a,b,c,d)=> {
    return (a+b+c+d)/4
}