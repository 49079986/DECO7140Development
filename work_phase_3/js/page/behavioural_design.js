const buttons = document.querySelectorAll(".button-bh1,.img-as-button");

buttons.forEach((button) => {
    button.addEventListener("mousedown", () => {
        button.classList.add("pressed");
        setTimeout(() => {
            button.classList.remove("pressed");
            const link = button.getAttribute("data-link");
            if (link) {
                window.location.href = link;
            }
        }, 175);
    });
});

