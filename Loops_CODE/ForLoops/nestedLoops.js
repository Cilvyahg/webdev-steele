// ===================================
// NESTED FOR LOOP EXAMPLES
// ===================================

// for (let i = 1; i <= 10; i++) {
//     console.log(`i is: ${i}`)
//     for (let j = 1; j < 4; j++) {
//         console.log(`     j is: ${j}`)
//     }
// }

// ===================================
// NESTED ARRAY ITERATION
// ===================================
// each of these subarrays in this array can be a row. so row 1, row 2, row 3

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]



// for (let i = 0; i < seatingChart.length; i++) {
//     console.log(seatingChart[i])
// }


for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`ROW #${i + 1 + seatingChart[i]}`)
    // for (let j = 0; j < row.length; j++){
    //     console.log(row[j]);
    // }
}





// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     console.log(`ROW #${i + 1}`)
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }



// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     console.log(`ROW #${i + 1}`)
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

for (let i = 1; i <= 10; i++) {
    console.log(`i is: ${i}`)
    for (let j = 1; j < 4; j++) {
        console.log(`j is: ${j}`)
    }
}

