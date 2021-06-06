let input = document.getElementById("name");
let btnEkle = document.getElementById("btnEkle");
let btnConYaz = document.getElementById("btnConYaz");

let words = [];

let addItem =  () => {
    words.push(input.value);
    input.value = "";
}
btnEkle.addEventListener("click",addItem);


let conYaz = () => {

let filteredNumber = words.filter( number => number.length < 6);
filteredNumber.forEach(element => {
    console.log(element);
});
}

btnConYaz.addEventListener("click",conYaz);