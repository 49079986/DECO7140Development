export function setupModal() {
    // === Sign In modal 逻辑（不变） ===
    const signInBtn = document.getElementById("signInBtn");
    const signInModal = document.getElementById("signInModal");
    const closeBtn = document.getElementById("closeModal");

    if (signInBtn && signInModal && closeBtn) {
        signInBtn.addEventListener("click", () => {
            signInModal.style.display = "block";
        });

        closeBtn.addEventListener("click", () => {
            signInModal.style.display = "none";
        });
    }

    // === Recipe modal 逻辑（支持多个） ===
    const recipeButtons = document.querySelectorAll(".recipe-btn");

    recipeButtons.forEach((btn) => {
        const targetId = btn.getAttribute("data-target");
        const modal = document.getElementById(targetId);

        if (modal) {
            const closeBtn = modal.querySelector(".close-btn");

            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                modal.style.display = "block";
            });

            if (closeBtn) {
                closeBtn.addEventListener("click", (e) => {
                    e.stopPropagation();
                    modal.style.display = "none";
                });
            }
        }
    });

    // === window 点击关闭modal，单独绑定一次 ===
    window.addEventListener("click", (event) => {
        // 先关闭 signInModal
        if (signInModal && event.target === signInModal) {
            signInModal.style.display = "none";
        }

        // 关闭所有 recipe modals
        const modals = document.querySelectorAll(".modal");
        modals.forEach((modal) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
}
