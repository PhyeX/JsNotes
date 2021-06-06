let myFunc = (e) => {
    console.log(e.target);
}


let myTop = document.getElementById("top");
let tablo = document.getElementById("tablo");

let clicked = (e) => {
    myTop.style.left = (e.clientX - 15) + "px";
    myTop.style.top = (e.clientY - 55) + "px";
}


tablo.addEventListener("click", clicked);