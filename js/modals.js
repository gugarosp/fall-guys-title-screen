const modals = document.querySelector("#modals")
const titleScreen = document.querySelector("#title-screen");

const landscapeWarning = document.querySelector("#landscape-warning");
const soundWarning = document.querySelector("#sound-warning");
const titleScreenWarning = document.querySelector("#title-screen-warning");
const titleScreenWarningOk = document.querySelector("#title-screen-warning-ok");
const titleScreenWarningRestart = document.querySelector("#title-screen-warning-restart");

setTimeout(() => {
    landscapeWarning.classList.add("show-modal-container");
}, 1);

landscapeWarning.querySelector("button").addEventListener("click", () => {
    landscapeWarning.classList.remove("show-modal-container");
    soundWarning.classList.add("show-modal-container");
})

soundWarning.querySelectorAll("button").forEach(element => {
    element.addEventListener("click", event => {
        soundWarning.classList.remove("show-modal-container");
        modals.classList.add("hide");

        document.body.classList.add("start-screen-animation");

        if (event.currentTarget.id == "sound-on") {
            setTimeout(() => {
                document.querySelector("#title-screen-sound").play();
            }, 4000);
        }
    });
});

titleScreen.addEventListener("click", () => {
    modals.classList.remove("hide");
    modals.querySelector(".modal").classList.add("modal-transparent-bg");

    setTimeout(() => {
        titleScreenWarning.classList.add("show-modal-container");
    }, 1);
});

titleScreenWarningOk.addEventListener("click", () => {
    titleScreenWarning.classList.remove("show-modal-container");
    
    setTimeout(() => {
        modals.classList.add("hide");
    }, 500);
});