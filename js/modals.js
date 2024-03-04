// Elements
const modals = document.querySelector("#modals");
const titleScreen = document.querySelector("#title-screen");
const landscapeWarning = document.querySelector("#landscape-warning");
const soundWarning = document.querySelector("#sound-warning");
const titleScreenWarning = document.querySelector("#title-screen-warning");
const titleScreenWarningOk = document.querySelector("#title-screen-warning-ok");
const titleScreenWarningRestart = document.querySelector("#title-screen-warning-restart");

// Landscape warning modal
setTimeout(() => {
    landscapeWarning.classList.add("show-modal-container");
}, 1);

// Landscape warning modal confirmation button
landscapeWarning.querySelector("button").addEventListener("click", () => {
    landscapeWarning.classList.remove("show-modal-container");
    soundWarning.classList.add("show-modal-container");
});

// Sound warning modal buttons
var enableSound;

soundWarning.querySelectorAll("button").forEach(element => {
    element.addEventListener("click", event => {
        soundWarning.classList.remove("show-modal-container");
        modals.classList.add("hide");

        document.body.classList.add("start-screen-animation");

        if (event.currentTarget.id == "sound-on") {
            enableSound = true;

            setTimeout(() => {
                document.querySelector("#title-screen-sound").play();
            }, 4000);
        }
    });
});

// Title Screen click
titleScreen.addEventListener("click", () => {
    modals.classList.remove("hide");
    modals.querySelector(".modal").classList.add("modal-transparent-bg");

    setTimeout(() => {
        titleScreenWarning.classList.add("show-modal-container");
    }, 1);
});

// Title Screen modal confirmation button
titleScreenWarningOk.addEventListener("click", () => {
    titleScreenWarning.classList.remove("show-modal-container");
    
    setTimeout(() => {
        modals.classList.add("hide");
    }, 500);
});

// Title Screen modal restart button
titleScreenWarningRestart.addEventListener("click", () => {
    titleScreenWarning.classList.remove("show-modal-container");
    modals.classList.add("hide");
    document.body.classList.remove("start-screen-animation");
    
    setTimeout(() => {
        document.body.classList.add("start-screen-animation");
    }, 1);

    if (enableSound) {
        setTimeout(() => {
            document.querySelector("#title-screen-sound").play();
        }, 4000);
    }
});