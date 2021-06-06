let person = {
    name: "jack",
    surname: "sparrow",
    age: 45,
}
person.salary = 125000;

console.log(person.name);

person.isMarried = false

console.log(person);

delete person["isMarried"];

console.log(person);
console.log("---------------------");

for (key in person) {
    console.log(key);
    console.log(person[key]);
}