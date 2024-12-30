let a = 5;
const b = 25;
let rectangle = a*b;
console.log(rectangle);

b = 3;
let area = 3.14 *a*b;
console.log(area);

/*
let is introduced in ES6 2015 
Varible declared with let have Block scope
before we use let variable must be declared they are cannot be redeclared in same block scope

*/
// Var 
/*
 variable declared with var always have global scope and can not have block scope

 */
/*          Scope	Redeclare	Reassign	Hoisted	     Binds this
    var	     No	      Yes	     Yes	     Yes	       Yes
    let	     Yes	  No	     Yes	     No         	No
    const	 Yes	  No	     No	         No	            No
*/