let myDiv = document.getElementById("myDiv");

let btnClassEkle = document.getElementById("btnClassEkle");

let classInput = document.getElementById("classInput");
let myFunc = () => {
    myDiv.className = "";
    myDiv.classList.add(classInput.value);
}

btnClassEkle.addEventListener("click", myFunc);


let styleInput = document.getElementById("styleInput");
let btnStyleEkle = document.getElementById("btnStyleEkle");

let myFunc2 = () => {
    myDiv.style.color = styleInput.value;
}

btnStyleEkle.addEventListener("click", myFunc2);