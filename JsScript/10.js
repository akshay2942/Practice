// ternary operator

// let age =4;
// let drink;
// if(age>=5){
//     drink="coffee"
// }else{
//     drink="milk"
// }
// console.log(drink)

//ternary operator or conditional operator

// let ableToDrink = age >= 5? "coffee":"milk";

//AND operator and OR operator


let firstName ="akshay";
let age = 15;

if(firstName[0] ==="a" && age >18){
    console.log('your name start with a above 18')
}else{
    console.log("inside else")
}


if(firstName[0] ==="g" || age >18){
    console.log('your name start with a above 18')
}else{
    console.log("inside else")
}

//nested if else

    // winning number  
    // 19 your guess is right
    //17 your guess too low
    //20 your guess too high
  


    let winningNum =19;

    let userGuess = +prompt("Guess a number");
    console.log(userGuess)
    console.log(typeof userGuess)

// if(userGuess === 19){
//     console.log(' your guess is right')
// }else{
//     console.log(' your guess is wrong')
// }






if(userGuess === 19){
    console.log(' your guess is right')
}else{
    console.log(' your guess is wrong')
    if(userGuess<winningNum){
        console.log('your guess too low')
    }else{
        console.log('your guess too high ')

    }
}



 


