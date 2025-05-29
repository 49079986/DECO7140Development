// bg.js

export function setupBackgroundZoom() {
    document.addEventListener("DOMContentLoaded", () => {
        const container = document.querySelector(".container");
        const body = document.body;

        if (container) {
            container.addEventListener("mouseleave", () => {
                body.classList.add("bg-zoomed");
            });

            container.addEventListener("mouseenter", () => {
                body.classList.remove("bg-zoomed");
            });
        }
    });
}
