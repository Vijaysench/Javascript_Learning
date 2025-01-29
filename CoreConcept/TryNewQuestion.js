// array given to u remove duplicate number

let arr1 = [1, 2, 4, 5, 5, 6, 7 ,8 ,8 ,7];
console.log(new Set(arr1));
 // ans - { 1, 2, 4, 5, 6, 7, 8 }


 //takes two numbers as arguments and returns their sum

 let a = 5;
 let b = 7;
 let sum = a+b;
 console.log(sum);


 // Write a program to calculate the sum of all numbers in an array.

 let number1 = [1, 2, 3, 4, 5, 6, 7, 8];

 let sumOfArray = number1.reduce((index,current) => index+current,0);
 console.log(sumOfArray);
 // Write a program to calculate the product of all numbers in an array.

 let number2 = [1,5,6];
 let productOfNumber = number2.reduce((index, current) => index * current);
 console.log(productOfNumber);
 // Write a program to calculate the division of all numbers in an array.
 let number3 = [12,5,8];
 let divisionOfNumber = number3.reduce((index, current) => index/current);
 console.log(divisionOfNumber);
 // Write a program to calculate the division of all numbers in an array.

 let number4 = [4,8,575,3456];

 let substractionOfNumber = number4.reduce((index,current) => current - index);
 console.log(substractionOfNumber);

 //Write a JavaScript program to reverse a given string. 

 let revString = "abcdefgh";
let reversesting = revString.split("").reverse("").join("");
console.log(reversesting);

//Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 
let numberArray = [2,3,4,6,8,10];

let evenNumber = numberArray.filter(num => num % 2 === 0);
console.log(evenNumber);
// Filter the array to include only odd numbers.

let numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

let oddArray = numArray.filter(num => num %2 !== 0);
console.log(oddArray);
// Write a program to filter and create a new array containing only the strings with more than 3 characters.

let words = ["apple", "bat", "carrot", "dog", "elephant", "fox"];

let newWords = words.filter(word => word.length > 3);
console.log(newWords);
//Write a program to filter out ages that are 18 or older and store them in a new array.

let ages = [12, 17, 19, 22, 13, 45, 32, 18];

let adult = ages.filter(ages => ages >= 18);
console.log(adult);

// Write a JavaScript program to calculate the factorial of a given number. 

let number = 5;

// iterative method 

function factorial(number){
    let result =1;
    for (let i =1 ; i<= number ; i++){
        result *= i ;
    }
    return result;
}
console.log(factorial(5));


let facnum = 10;
function factorial(facnum){
    let result = 1;
    for (let i = 1 ; i<= facnum ; i++ ){
        result *= i;
    }
    return result;
}
console.log(factorial(10));

// factorial(7)

let facnumb = 7;

function factorial(facnumb){
    let result = 1;
    for (let i = 1 ; i<= facnumb ; i++){
        result *= i;
    }
    return result;
}
 console.log(factorial(7));

 // recursive ve

 let recurFac = 4;

 function factorial(recurFac){
    
    if (recurFac <= 1){
        return 1;
    }
    return recurFac * factorial(recurFac - 1);
 }
 console.log(factorial(4));

 //Write a JavaScript function to check if a given number is prime. 

 let primenum = 5;

 function isPrime(primenum){
    if(primenum <= 1){
        return false;
    }
    for (let i = 2; i<= Math.sqrt(primenum) ; i++){
        if (primenum % i === 0){
            return false
        }
        return true
    }
 }
 console.log(isPrime(5));

 let primnum  = 4;

 function isPrime(primnum){
    if(primnum <= 1){
        return false
    }
    for (i = 2 ; i<= Math.sqrt(primnum); i++){
        if (primnum % i === 0){
            return false
        }
        return true
    }

 }
 console.log(isPrime(4));
