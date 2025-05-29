export function setupButtonDelay() {
    const buttons = document.querySelectorAll(
        "a.button.button-txt1, a.button-sign-in"
    );
    if (!buttons.length) return;

    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();

            if (
                button.classList.contains("pressed") ||
                button.classList.contains("released")
            )
                return;

            button.classList.add("pressed");

            setTimeout(() => {
                button.classList.remove("pressed");
                button.classList.add("released");
            }, 100);

            setTimeout(() => {
                button.classList.remove("released");
                const href = button.getAttribute("href");
                if (href) window.location.href = href;
            }, 170);
        });
    });
}
