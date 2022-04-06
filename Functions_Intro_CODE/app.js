// function singSong() {
//     console.log("DO");
//     console.log("RE");
//     console.log("MI");
// }

// function greet(firstName, lastName) {
//     console.log(`Hey there, ${firstName} ${lastName[0]}.`)
// }

// function repeat(str, numTimes) {
//     let result = '';
//     for (let i = 0; i < numTimes; i++) {
//         result += str;
//     }
//     console.log(result);
// }

// function add(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         return false;
//     }
//     return x + y;
// }





// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()

// Functions are reusable procedures - we define a chunk of code that we can then execute at a later point
// math.radom gives you a random number from 0-1 and math floor will floor it so that it will be integer
let die1 = Math.floor(Math.random() * 6) + 1;

// our first function

function grumpus() {
    console.log('ugh... you again');
    console.log('for the last time...');
    console.log('Leave me alone!!');
}

function singSong() {
    console.log("Do");
    console.log("Re");
    console.log("Mi");
}

singSong();
singSong();

// arguments are inputs you can pass in multiple arguments

// function greet(person) {
//     console.log(`Hi, ${person}!`);
// }

// console.log(greet("ned"))

// value in the function is the parameter, wat je in de parameter doet is de argument. parameter is meer een placeholder

function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`)
}

greet("George", "Clooney");







function log(message) {

    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());

    return 1;

}

let ans = log("sjkljkjhgfgfffsklwjsl")

console.log(ans)

if (ans) {


}

function add(a, b) {
    return a + b;
}

let som = add(1, 3)

// DEFINE YOUR FUNCTION:

function rant(message) {
    // console.log(message.toUpperCase());
    // console.log(message.toUpperCase());
    // console.log(message.toUpperCase())

    return message;
}

console.log(rant("I hate beets"))







// function rant(message) {

//     console.log(message);

// }

// console.log(rant("hello".toUpperCase))


// let message = "hoi"

// function rant(param1) {
//     console.log(param1.toUpperCase());
//     console.log(param1.toUpperCase());
//     console.log(param1.toUpperCase());
// }

// rant(message);
// rant("donbbo")
// console.log(rant)

// function rant(message) {
// message.toUpperCase()
// console.log("")
// }



function repeat(str, numTimes) {
    let result = ' ';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}




// return value - output function the return keyword stops the execution of the function
// x en y here are placeholders. we can only return ONE value. when you have your return statement ONLY one value will be returned
function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}

function multiply(x, y) {
    return x * y;
}