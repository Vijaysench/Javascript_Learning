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

  //find the minmum number in an array

  let minnum = [12 , 2, 4 , 5, 5,6 , 6 ,7 ,8 ,-10];
  let uniqueminnum = new Set(minnum);
  console.log([...uniqueminnum]);

  function minOfNumber(uniqueminnum){
    return Math.min(...uniqueminnum);
  }
console.log(minOfNumber(uniqueminnum));

// check if this is palindrom or not 

let str = "hellohello"
 function strPalindrom(str){
  let reversestr = str.split("").reverse().join("");
  console.log(reversestr)
  return str === reversestr;
 }
 console.log(strPalindrom("hellohello"));

 let str2 = "123454321";
 function  strPlaindrom(str2){
   let reverseStr2 = str2.split("").reverse().join("");
   console.log(reverseStr2);
   return str === reverseStr2;
 }

 console.log(strPlaindrom("123454321"));

 let str3 = "NamaN";
 function setPalindrom(str3){
  let reverseSet3 = str3.split().reverse().join();
  console.log(reverseSet3);
  return str3 === reverseSet3;
 }
 console.log(strPalindrom("NamaN"));


 let string1 = "Vijay";

 let string2 = "Vijay";

 function issetPlaindrom(string1 , string2){

   let isPlaindrom = (str) => str === str.split("").reverse("").join("")
  return isPlaindrom(string1) === isPlaindrom(string2);
 }
 console.log(issetPlaindrom(string1,string2));