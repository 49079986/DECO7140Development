/** 由于在手机上点击链接没有反应，创建一个模块使其可以相应   ？ */
function setupMenu() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("show");
        });

        // Optional: Close menu when clicking outside
        document.addEventListener("click", (event) => {
            if (
                !menu.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {
                menu.classList.remove("show");
            }
        });
    }
}

export { setupMenu };
