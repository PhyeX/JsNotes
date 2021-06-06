// let sayacYazdir = () => {
//     for (let index = 0; index < 10; index++) {
//         console.log(index);
//     }
// }


// let myFunc = () => {
//     console.log("asldkaklsdlkad asdkljaslkjd");
// }

// let btnEkranaYaz = document.getElementById("btnEkranaYaz");

// btnEkranaYaz.addEventListener("click", myFunc);

let myInput = document.getElementById("myInput");
let btnConsoleYaz = document.getElementById("btnConsoleYaz");

let conYaz = () => {
    console.log(myInput.value);
}
btnConsoleYaz.addEventListener("click", conYaz);


//  İnput a girilen veriyi butona basılınca bir div içine yazıdırınız.