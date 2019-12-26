
const storyText = `It was :temperature: outside, so :insertx: went for a walk.` +
    "When they got to :inserty:, they stared in horror for a few moments, " +
    "then :insertz:. Bob saw the whole thing, but was not surprised — :insertx:" +
     `weighs :weight:, and it was a hot day.`;
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];
const temperature = "94 farenheit";
const weight = "300 pounds";
window.addEventListener("load", initPage, false);

function initPage() {
    document.getElementById("randomize").addEventListener("click", result, false);
}


function result() {
    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
    let temp = temperature;
    let wei = weight;
    // global replacement of occurence of :insertx:
    newStory = newStory.replace(/:insertx:/g, xItem);
    newStory = newStory.replace(/:inserty:/g, yItem);
    newStory = newStory.replace(/:insertz:/g, zItem);
    newStory = newStory.replace(/Bob/g, document.getElementById("name").value);

    if(document.getElementById("be").checked == true){
        temp = convertFahrenheitToCentigrade(temperature.split(" ")[0]) + " °C";
        wei = convertPoundsToKg(weight.split(" ")[0]) + " kg";
    }
    newStory = newStory.replace(/:temperature:/g, temp);
    newStory = newStory.replace(/:weight:/g, wei);


    document.getElementsByClassName("story")[0].innerText = newStory;

}

function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function convertPoundsToKg(weight) {
    return Math.round(weight / 2);
}

function convertFahrenheitToCentigrade(temp) {
    return Math.round((temp - 32) / 1.8);
}
