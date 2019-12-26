window.addEventListener("load", initPage, false);




function initPage() {
    document.getElementsByClassName('home plus')[0].addEventListener("click", homePlus, false);
    document.getElementsByClassName('home min')[0].addEventListener("click", homeMin, false);
    document.getElementsByClassName('visitor min')[0].addEventListener("click", visitorMin, false);
    document.getElementsByClassName('visitor plus')[0].addEventListener("click", visitorPlus, false);

    document.querySelector("#visitor > h2").addEventListener("click", visitorEdit, false);
    div.style.display = "none";

}

let visitor =document.getElementById("visitor");
let visitorNumber = document.querySelector("#visitor > p");
let visitorText = document.querySelector("#visitor > h2");
let div = document.createElement("DIV");
let form = document.createElement("INPUT");
div.appendChild(form);
let button = document.createElement("BUTTON");
div.appendChild(button);
button.innerText = "Stel in";
button.addEventListener("click", stelIn, false);
visitor.insertBefore(div, visitorNumber);

function visitorEdit() {

    visitorText.style.display = "none";
    div.style.display = "initial";
    form.focus()
}

function stelIn(){
    document.querySelector("#visitor > h2").style.display = "block";
    visitorText.innerText = form.value;
    div.style.display = "none";

}

function homePlus() {
    document.querySelector("#home > p").innerText = parseInt(document.querySelector("#home > p").innerText) + 1;
}

function homeMin() {
    document.querySelector("#home > p").innerText -= 1;

}

function visitorPlus() {
    document.querySelector("#visitor > p").innerText = parseInt(document.querySelector("#visitor > p").innerText) +1;
}

function visitorMin() {
    document.querySelector("#visitor > p").innerText -= 1;
}