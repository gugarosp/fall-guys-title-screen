const modals = document.querySelector("#modals")
const landscapeWarning = document.querySelector("#landscape-warning");
const soundWarning = document.querySelector("#sound-warning");

setTimeout(() => {
    landscapeWarning.classList.add("show-modal-container");
}, 1);

landscapeWarning.querySelector("button").addEventListener("click", () => {
    landscapeWarning.classList.remove("show-modal-container");
    soundWarning.classList.add("show-modal-container");
})

soundWarning.querySelectorAll("button").forEach(element => {
    element.addEventListener("click", event => {
        modals.classList.add("hide");

        document.body.classList.add("start-screen-animation");

        if (event.currentTarget.id == "sound-on") {
            setTimeout(() => {
                document.querySelector("#title-screen-sound").play();
            }, 6000);
        }
    });
})

