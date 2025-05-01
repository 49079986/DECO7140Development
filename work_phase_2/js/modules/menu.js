/** 由于在手机上点击链接没有反应，创建一个模块使其可以相应   ？ */
/** 在手机上你打开一个网站，比如淘宝、知乎、微信网页版，在手机上通常看到右上角有一个“☰”按钮（汉堡图标），点一下会弹出菜单：
 * 
 */
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
