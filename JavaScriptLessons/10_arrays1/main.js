let arr = []
let arr2 = Array();


let sehirler = ["Ankara", "Zonguldak", "İstanbul", "Karabük", "Bartın"];
console.log(sehirler.length);

sehirler.pop();
console.log(sehirler);
sehirler.push("Kırklareli");
console.log(sehirler);


let mixed = ["asd", 1, 2, 2.5, true];
console.log(mixed[4]);

let months = ["January", "February", "March", "April", "May"];

for (let i = 0; i < months.length; i++) {
    console.log(months[i]);
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[1][2]);