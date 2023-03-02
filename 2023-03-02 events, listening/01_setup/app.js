const button = document.getElementById("button");

function handleClick() {
    alert("Button clicked");
    button.removeEventListener("click", handleClick);
}

button.addEventListener("click", handleClick);

button.addEventListener("mouseover", () => {
    console.log("Mouse-Over-Event getriggert!");
});

window.addEventListener("load", function () {
    console.log("Page loaded");
});

window.addEventListener("resize", function () {
    console.log("Window resized");
});

window.addEventListener("keypress", () => {
    console.log("key pressed");
});

// window.addEventListener("click", () => {
//     console.log("Hallo Onur. Ich mag deinen Bart!");
// });

function greet(name, callBack) {
    console.log("Hallo", name);
    callBack();
}

// function sayGoodBye() {
//     console.log("Good Bye!");
// }

greet("Ali", () => {
    console.log("Good Bye!");
});

function singingButton(callback) {
    button.addEventListener("mouseleave", callback);
}

const song = () => {
    alert("Ooh Eeh Ooh Ah Aah Ting Tang Walla Walla Bing Bang");
    button.removeEventListener("mouseleave", song);
};

singingButton(song);

// Benutzerdefiniertes Ereignis
const customEv = new Event("customEvent");

// Event-Listener für das benutzerdefinierte Ereignis
document.addEventListener("customEvent", function () {
    console.log("Benutzerdefinietes Ereignis ausgelöst");
});

// Button-Event-Listener, der das benutzerdefinierte ereignis auslöst
document.getElementById("customEventBtn").addEventListener("click", () => {
    document.dispatchEvent(customEv);
});
