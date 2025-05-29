function setupMenu() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    //两个元素都存在的情况下：
    if (menuToggle && menu) {
        menuToggle.addEventListener("click", () => {
            //toggle的作用是：如果menu的classlist上有show就去掉，没有就加上
            menu.classList.toggle("show");
        });

        // Optional: Close menu when clicking outside
        //对于整个网页document添加一个点击事件
        //event是事件对象，event.target是用户点击对象
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

