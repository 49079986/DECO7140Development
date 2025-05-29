function setupFlipCards() {
    const cards = document.querySelectorAll(".flip-card");

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            card.classList.toggle("flipped");
        });

        const button = card.querySelector(".button");
        if (button) {
            button.addEventListener("click", (e) => {
                e.stopPropagation(); // 阻止冒泡，避免翻转
            });
        }
    });
}

export { setupFlipCards };
