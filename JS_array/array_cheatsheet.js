// // Making an array:
// const colors = ["red", "orange", "yellow"];

// // Arrays are indexed like strings:
// colors[0]; // "red"

// // They have a length:
// colors.length; //3

// Important array methods:
//push(value) - adds value to the END of an array
//pop() - removes and returns last value in array

//unshift(val) - adds value to START of an array
//shift() - removes and returns first element in an array

const gameBoard = [
    ['X', 'O', 'X'],
    ['O', null, 'X'],
    ['O', 'O', 'X']
];


//OBJECT LITERALS

const kitchenSink = {
    faveNum: 92319023,
    isFunny: true,
    colors: ['red', 'pink']
}

// how to get acces to object literals. Every key will turn into strings. even if its a boolean, null or etc.except for symbols


kitchenSink.faveNum

const years = {
    1999: 'Good',
    2020: 'Bad'
}

years["1999"]

let person = {

    firstName: "Mick",
    lastName: "Jagger"
}

person["firstName"]

// change values in objects and assigning a new value

const midterms = {
    danielle: 96,
    thomas: 78
}

midterms.thomas = 79;
midterms.thomas = "C+";
midterms["danielle"] = "A";
midterms.ezra
midterms.ezra = "B+"
midterms["antonio"] = "A-"

const comments = [{
        username: "Tammy",
        text: "lolololol",
        votes: 9
    },
    {
        username: "FishBoi",
        text: "glub glub",
        votes: 2890
    }
]

// how to get access to the index of 1 and text
comments[1]['text']



