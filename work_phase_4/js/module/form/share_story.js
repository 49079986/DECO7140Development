export function initReviewForm() {
    const form = document.getElementById("reviewForm");
    const timeInput = document.getElementById("review-time");
    const reviewList = document.getElementById("review-list");

    if (!form || !timeInput || !reviewList) return;

    timeInput.value = new Date().toISOString().slice(0, 16);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const text = document.getElementById("review-text").value.trim();
        const tag = document.getElementById("review-tag").value.trim();
        const rating = parseInt(document.getElementById("review-rating").value);
        const time = new Date(document.getElementById("review-time").value);

        // Create item
        const item = document.createElement("div");
        item.className = "accordion-item";
        item.style.margin = "20px 0"; // 加上下间距

        // Create star string
        const stars = "⭐".repeat(rating);

        // Create inner HTML
        item.innerHTML = `
    <button class="accordion-header">
        <div class="review-header">
            <img src="pictures/community/icons/girl2.png" alt="avatar" class="review-avatar" />
            <div>
                <div class="review-name">Yuyang Gong</div>
                <div class="review-stars">${stars}</div>
                <p class="review-date">${time.toLocaleDateString('en-US', {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                })}</p>

            </div>
        </div>
        <span class="header-right">${tag}</span>
    </button>

    <div class="accordion-content">
        
        <p>${text}</p>
    </div>
    `;

        // Add toggle interaction
        const headerBtn = item.querySelector(".accordion-header");
        headerBtn.addEventListener("click", () => {
            item.classList.toggle("active");
        });

        reviewList.prepend(item);
        form.reset();
        timeInput.value = new Date().toISOString().slice(0, 16);
    });
}
