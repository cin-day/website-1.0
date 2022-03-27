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
        textElement.append(letters[i]);
    }
}

async function deleteAnim(delay = 20) {
    const sentence = textElement.textContent;
    // const sentence = textElement.html();
    const letters = sentence.split("");
    let len = letters.length;
    for (let i = 0; i < len; i++) {
        await waitDelay(delay);
        letters.pop();
        textElement.textContent = letters.join("");
        // textElement.html(letters.join(""));
    }
}

// $( document ).ready(async function() {
    // typeAnim("Hey, over here!");
    // waitForMs(2000);
    // deleteAnim();
// });

async function type() {
    let i = 0;
    let len = sentences.length;
    while(true) {
        await typeAnim(sentences[i]);
        await waitDelay(1500);
        await deleteAnim();
        await waitDelay(500);
        i++;
        if (i >= len) {i = 0;}
    }
}

type();
