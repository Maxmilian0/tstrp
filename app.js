"use strict";

const body = document.body;


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generateRandomLinearGradient() {
    let output = `linear-gradient(to right, `;

    for (let i = 0; i < 100000; i++) {
        output += `rgb(${getRandomInt(255)}, 255, 255), `;
    }

    output = output.slice(0, -2) // remove last comma

    output += ")";

    return output;
}

body.style.background = generateRandomLinearGradient();