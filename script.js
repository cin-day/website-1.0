const sentences = [
    "Computer Science Student",
    "University of Waterloo Undergraduate"
];

let textElement = document.getElementById("typing-text");
let timeout;

function waitDelay(ms) {
    return new Promise(function(resolve) {
        timeout = setTimeout(resolve, ms);
    });
}

async function type(sentence, delay = 100) {
    const letters = sentence.split("");
    let len = letters.length;
    for (let i = 0; i < len; i++) {
        await waitDelay(delay);
        textElement.append(letters[i]);
    }
}

type("Hey, over here!")
