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