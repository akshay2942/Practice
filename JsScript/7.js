// template string 

let age =29
let firstName ='akshay'

let fullname = "may name is " + firstName + " my age is " + age
console.log(fullname)


let aboutme = `my name is ${firstName} and age is ${age}`
console.log(aboutme)


// undefined 

let first ;
console.log(typeof first)

// you can not use const without assigning value

// const age ; //Uncaught SyntaxError: Identifier 'age' has already been declared 
console.log(age)
const age1 =22  
console.log(typeof age1)



// null

// null means nothing

let myvar = null
console.log(myvar) // null
console.log(typeof myvar) // gives object

console.log(typeof null) // op is object its a bug in js

//BigInt


let num =123 /// it has limit
console.log(num)

console.log(Number.MAX_SAFE_INTEGER) //9007199254740991

//

let myNum = BigInt(12)

let samenum =123n
console.log(myNum +samenum)



