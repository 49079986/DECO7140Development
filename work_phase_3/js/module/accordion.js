function initAccordion(containerSelector) {
    const containers = document.querySelectorAll(containerSelector);

    containers.forEach((container) => {
        const headers = container.querySelectorAll(
            ":scope > .accordion-item > .accordion-header"
        );

        headers.forEach((header) => {
            header.addEventListener("click", () => {
                const item = header.closest(".accordion-item");
                const content = item.querySelector(".accordion-content");
                const arrow = header.querySelector(".arrow");

                const isOpen = item.classList.contains("open");

                if (!isOpen) {
                    item.classList.add("open");

                    // 清空 height 后获取真实高度
                    content.style.maxHeight = null;
                    const fullHeight = content.scrollHeight + "px";

                    requestAnimationFrame(() => {
                        content.style.maxHeight = fullHeight;
                    });

                    if (arrow) arrow.textContent = "▼";
                } else {
                    item.classList.remove("open");

                    requestAnimationFrame(() => {
                        content.style.maxHeight = null;
                    });

                    if (arrow) arrow.textContent = "▷";
                }
            });
        });
    });
}

export { initAccordion };
