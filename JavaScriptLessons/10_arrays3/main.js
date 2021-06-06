let inpt = document.getElementById("name");
let btnEkle = document.getElementById("btnEkle");
let btnConYaz = document.getElementById("btnConYaz");

let words = [];

let addItem = () => {
    words.push(inpt.value);
}

btnEkle.addEventListener("click", addItem);

let conYaz = () => {
    let shortWords = words.filter((word) => {
        if (word.length < 6) {
            return word;
        }
    });

    shortWords.forEach((sword) => {
        console.log(sword);
    });

}
btnConYaz.addEventListener("click", conYaz);