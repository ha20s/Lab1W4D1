let seq = document.getElementById("seq")

let height = document.getElementById("height").innerText
let width = document.getElementById("width").innerText
let color = document.getElementById("color")
let border = document.getElementById("border").innerText

console.log(height,width,color,border)


function change(){
    seq.style.backgroundColor = color
    seq.style.width = width
    seq.style.height = height
    seq.style.border = border 
}

function reset(){
    seq.style.width = 30

}