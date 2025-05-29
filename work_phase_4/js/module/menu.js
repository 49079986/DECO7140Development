function setupMenu() {
    const nav = document.getElementById("nav-desktop");

    if (!nav) return;

    nav.classList.add("show");

    nav.addEventListener("mouseenter", () => {
        nav.classList.add("show");
    });

    // 不隐藏
    // nav.addEventListener("mouseleave", () => {
    //     nav.classList.remove("show");
    // });
}

export { setupMenu };
