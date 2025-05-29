export function initMenuHover() {
    const sidebar = document.querySelector(".sidebar");
    const content = document.querySelector(".content");
    const items = document.querySelectorAll(".sidebar-item.child-4");
    const contents = document.querySelectorAll(".content-box");

    // 定义一个函数判断鼠标是否在 sidebar 或 content 上
    function checkHover(e) {
        return sidebar.matches(":hover") || content.matches(":hover");
    }

    // 鼠标移入 sidebar 或 content，展开
    sidebar.addEventListener("mouseenter", () => {
        sidebar.classList.add("expanded");
        content.classList.add("expanded");
    });

    content.addEventListener("mouseenter", () => {
        sidebar.classList.add("expanded");
        content.classList.add("expanded");
    });

    // 鼠标离开 sidebar 或 content，判断如果两个都没有 hover，收起
    sidebar.addEventListener("mouseleave", () => {
        setTimeout(() => {
            if (!checkHover()) {
                sidebar.classList.remove("expanded");
                content.classList.remove("expanded");
                contents.forEach((c) => c.classList.remove("active"));
            }
        }, 400); // 延迟一点，防止快速切换造成闪烁
    });

    content.addEventListener("mouseleave", () => {
        setTimeout(() => {
            if (!checkHover()) {
                sidebar.classList.remove("expanded");
                content.classList.remove("expanded");
                contents.forEach((c) => c.classList.remove("active"));
            }
        }, 500);
    });

    // 鼠标进入某个item时显示对应内容
    items.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            const index = item.getAttribute("data-index");
            contents.forEach((c) => c.classList.remove("active"));
            if (contents[index]) {
                contents[index].classList.add("active");
            }
        });
    });


    items.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            items.forEach((i) => i.classList.remove("expanded"));
            item.classList.add("expanded");
        });
        item.addEventListener("mouseleave", () => {
            item.classList.remove("expanded");
        });
    });
}
