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

async function typeAnim(sentence, delay = 100) {
    const letters = sentence.split("");
    let len = letters.length;
    for (let i = 0; i < len; i++) {
        await waitDelay(delay);
        clearTimeout(timeout);
        textElement.append(letters[i]);
    }
}

async function deleteAnim(delay = 20) {
    const sentence = textElement.textContent;
    const letters = sentence.split("");
    let len = letters.length;
    for (let i = 0; i < len; i++) {
        await waitDelay(delay);
        clearTimeout(timeout);
        letters.pop();
        textElement.textContent = letters.join("");
    }
}

async function type() {
    let i = 0;
    let len = sentences.length;
    while(true) {
        await typeAnim(sentences[i]);
        await waitDelay(1500);
        clearTimeout(timeout);
        await deleteAnim();
        await waitDelay(500);
        clearTimeout(timeout);
        i++;
        if (i >= len) {i = 0;}
    }
}

type();
