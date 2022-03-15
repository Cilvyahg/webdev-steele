console.log("hello world");
let total = 1 + 3;

console.log("Goodbye");

let rating = 3;
if (rating === 3) {
    console.log("you are a star")
}


let random = Math.random();



if (random > 0.5) {
    console.log("YOU NUMBER IS LESS THAN 0.5");
    console.log(random);
}



// const dayOfWeek = prompt("Enter a day").toLowerCase();

// if (dayOfWeek === "Monday") {
//     console.log("UGHHH I hate MONDAYS");

// } else if (dayOfWeek === "Saturday") {
//     console.log("Yesss I am off from work");
// }
// else if (dayOfWeek === "Sunday") { 
//     console.log("TOMORROW WORK AGAIN");
// } else if (dayOfWeek === "Wednesday") {
//     console.log("Half way of the week yeah!")
// } else { 
//     console.log("Meh")
//  }





// 0 - 5 free
// 5 - 10 child $10
// 10 - 65 adult $20
// 65+ seniot $10

// const age = 70;

// if (age < 5) {

//     console.log("You are a child. It's free");
// } else if (age < 10) {
//     console.log("You are 5 to 10 years old");
// } else if (age < 65) {
//     console.log("You are an adult. You pay $20 dollars")
// } else {
//     console.log("you are not welcome");
// }





// 168 NESTING CONDITIONALS: must be 6 characters // cannot include space
const password = prompt("please give a new password");


if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log("Valid password");
    } else {
        console.log("Password cannot contain spaces!")
    }
} else {
    console.log("PASSWORD NEEDS TO BE 6+ CHARACHTERS")
}



const clientInput = prompt("enter something");

if (clientInput) {
    console.log("Truthy")
} else {
    console.log("Falsy")
}


//   0 - NAN - NULL - undefined all of them will have the outcome Falsy
if (0) {
    console.log("Truthy")
} else {
    console.log("Falsey")
}

// 170 logical operators 
// && Double ampersand means that the condition on both sides need to be passed in order for it to be valid.

const passwordTwo = prompt("Please enter your password")

if (passwordTwo.length >= 6 && passwordTwo.indexOf(' ') === -1) {
    console.log("Valid Password")
} else {
    console.log("Invalid Password")
}

// Logical AND Mystery Excercise
const mystery = 'Piemels7';
let test = mystery[0];
console.log(test);

if (mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1) {
    console.log("YOU GOT IT!!!");
}

// OR || ----  it only cares if one of the two is true

// 0-5 free  5-10 10  dollar 10-65 20 dollar and 65+ free

const age = 4;
if (age >= 0 && age < 5 || age >= 65) {
    console.log("FREE");
} else if (age >= 5 && age < 10) {
    console.log("$10");
} else if (age >= 10 && age < 65) {
    console.log("$20");
} else {
    console.log("Invalid age")
}



const firstName = prompt('Enter your first name');
// if not something. so if you dont type in your firstname
if (!firstName) {
    firstName = prompt('Try again');
}



