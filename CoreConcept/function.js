/*
A JavaScript function is a block of code designed to perform a particular task.

*/
// Function to compute the product of p1 and p2
let result = myFunction(5,7);

function myFunction(a , b) {
    return a * b;
  }
  console.log(result);

  function getPrimeNumber(){
    return 7;
    console.log("after return")// Will never execute
  }

  let prime = getPrimeNumber();
  console.log(prime)

  function sum(first, second){
    let add = first + second
    return(add);
  }
   
  let answer = sum(21 , 9);
  console.log(answer);

  //function to calculate the sum of two numbers

  let TwoNumbers = [5,8];
  
  function sumOfTwoNumbers([a=0,b=1]){
    return a+b;
  }
  console.log(sumOfTwoNumbers(TwoNumbers));

  //find the maximum number in an array

  let array = [1,5,3,6,7,9, 10,3];

  function findMaxnumber(array){
    return Math.max(...array);
  }
  console.log(findMaxnumber(array));