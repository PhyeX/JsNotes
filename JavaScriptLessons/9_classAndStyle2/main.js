let myDiv = document.getElementById("myDiv");

// console.log(myDiv.className);
// console.log(myDiv.classList);

// console.log(myDiv.className);


let btnDegistir = document.getElementById("btnDegistir");

let myFunc = () => {
        myDiv.classList.add("fnt-yellow");

    }
    // let myFunc = () => {
    //     myDiv.className = "fnt-yellow";
    // }
btnDegistir.addEventListener("click", myFunc);


let toggleFunc = () => {
    myDiv.classList.toggle("fnt-blue");
}


let btnToggle = document.getElementById("btnToggle");
btnToggle.addEventListener("click", toggleFunc);