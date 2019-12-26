const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */


for(let i = 1; i<=5; i++) {
    const newImage = document.createElement('img');
    let xxx = "images/pic" + i + ".jpg";
    newImage.setAttribute('src', xxx);
    newImage.addEventListener("click", thumbClick, false);
    thumbBar.appendChild(newImage);
}
function thumbClick(evt) {
    let target = evt.target;
    displayedImage.setAttribute("src", target.getAttribute("src"));

}



/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", brightness, false);

function brightness(evt) {
    if(btn.getAttribute('class') == "dark"){
        btn.setAttribute('class', "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    else{
        btn.setAttribute('class', "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }


}