let myInput = document.getElementById("myInput");
let btnConsoleYaz = document.getElementById("btnConsoleYaz");
let paragraf = document.getElementById("paragraf");

let paragrafYaz = () => {

    paragraf.innerText = myInput.value;

}
btnConsoleYaz.addEventListener("click", paragrafYaz);