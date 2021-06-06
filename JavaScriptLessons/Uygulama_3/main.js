

let myInput = document.getElementById("myInput");

let btnDiveYaz = document.getElementById("btnDiveYaz");

let divYaz = () => {

    let result = document.getElementById("result");
    result.innerText += (myInput.value);
}

btnDiveYaz.addEventListener("click",divYaz);