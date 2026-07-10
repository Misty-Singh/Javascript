//1*
for(let num=0;num<=100;num++){
    if(num%2==0){
        console.log("num =", num);
    } else {

    }
}
//2*
let gameNum=25;

let userNum=prompt("Guess the game number:");
console.log(userNum);

while(userNum!=gameNum){
userNum =prompt("You entered wrong number.Guess again:")
}
console.log("congratulations,you entered the right number");
 


