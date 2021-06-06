
    let mydiv = document.getElementById("myDiv");
    
    let btnClassEkle = document.getElementById("btnClassEkle");
    let btnStyleEkle = document.getElementById("btnStyleEkle");
    let classInput = document.getElementById("classInput");
    let styleInput = document.getElementById("styleInput");
    let myFunc = () => {
        console.log();
        mydiv.classList.add(classInput.value);
      
    }
    btnClassEkle.addEventListener("click",myFunc);
    
    let myFunc2 = () => {
        mydiv.style.color = styleInput.value;
    }
    btnStyleEkle.addEventListener("click",myFunc2);

