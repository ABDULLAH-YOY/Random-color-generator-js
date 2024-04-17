let changebtn= document.getElementById("generator");
let colorName = document.querySelector(".color")

function changeColor(){

 let r = Math.floor(Math.random() * 256);
 let g = Math.floor(Math.random() * 256);
 let b = Math.floor(Math.random() * 256);

    let color = `rgb(${r},${g},${b})`;
    colorName.textContent = color;

     document.body.style.backgroundColor = color;
}
changebtn.addEventListener("click",changeColor)