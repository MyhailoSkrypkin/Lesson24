function getRandomNumber(size) {
    // Math.random() --> [0,1)
    // [0,1)*5 --> [0,5]
    let num = Math.floor(Math.random() * size);
    return num;
}

//Розраховує вшдстань від кліку (event) до скарбу (target)
function getDistance(event, target) {
    const diffX = event.offsetX - target.x;
    const diffY = event.offsetY - target.y;
    const dist = Math.sqrt((diffY*diffY) + (diffX*diffX));
    return dist;
} 

function getDistanceHint(distance) {
    if (distance < 10) {
        return "Пече!";
    } else if (distance < 20) {
        return "Дуже гаряче!";
    } else if (distance < 40) {
        return "Гаряче!";
    } else if (distance < 80) {
        return "Тепло";
    } else if (distance < 160) {
        return "Холодно!";
    } else if (distance < 320) {
        return "Дуже холодно!";
    } else {
        return "Можна змерзнути";
    }
}

const width = 450;
const height = 400;
let click = 0;

const target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height),
}

const mapElement = document.getElementById("map");
mapElement.addEventListener("click", (event) => {
    click++;
    // console.log(click);

    const distance = getDistance(event, target);
    const distanceHint = getDistanceHint(distance);
    const distanceElement = document.getElementById("distance");
    distanceElement.textContent = distanceHint;

    if (distance < 7) {
        alert ("Ти виграв!");
    }
});