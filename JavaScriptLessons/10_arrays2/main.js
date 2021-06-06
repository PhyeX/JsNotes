// let names = ["ahmet", "selin", "okan", "rümeysa"]
// names.forEach((item, index) => {
//     console.log(index);
//     console.log(item);
// });


// map
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNumbers = numbers.map((number) => {
    return number ** 2;
});
// console.log(newNumbers);


// Filter
let filteredNumbers = numbers.filter((number) => {
    if (number > 5) {
        return number;
    }
});

// console.log(filteredNumbers);






// find
let findNumbers = numbers.find((number) => {
        if (number % 2 == 0) {
            return number;
        }
    })
    // console.log(findNumbers);

// findIndex
let foundIndex = numbers.findIndex((number) => {
    if (number == 6) {
        return number;
    }
});
// console.log(foundIndex);