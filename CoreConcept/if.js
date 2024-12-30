// if - else statement
 /*
 In JavaScript we have the following conditional statements:

   1. Use if to specify a block of code to be executed, if a specified condition is true
   2. Use else to specify a block of code to be executed, if the same condition is false
   3.Use else if to specify a new condition to test, if the first condition is false
*/

let age = 18;
let IfEligible = age >=18;

if (IfEligible){
    console.log("He is adult now");
}
else {
    console.log("He is not an adult ");
}

// Use of nested if else

let num = 10;

if (num >=0){
   if (num % 2 ==0){
    console.log("print even number ")
   }
   else{
    console.log("not even number");
   }
}
else{
    console.log("not greater than 10");
}
