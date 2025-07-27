// declare constants

const pi =3.14
// pi =3.14 Uncaught TypeError: Assignment to constant variable.
console.log(pi);

// string indexing

let firstname = "akshay"
// a k s h a y 
// 0 1 2 3 4 5


console.log(firstname[3]);

// length of string 
console.log(firstname.length)
console.log(firstname.length -1)
// firstname.length
console.log(firstname[firstname.length-1])
//   last index = length -1


//trim()
//toUpperCase()
//toLowerCase()
//slice()

let str = " akshay kshirsagar "

console.log(str)

let trimText = str.trim()
console.log(trimText)
let trimTextupper = str.trim().toUpperCase()
console.log(trimTextupper)
let trimTextlower = str.trim().toLowerCase()
console.log(trimTextlower)

//slice 

// start index
// end index

let fname ="akshay"

// a k s h a y 
// 0 1 2 3 4 5 

let s = fname.slice(0,2)
console.log(s) //ak
let ss = fname.slice(0,3)
console.log(ss) //aks



