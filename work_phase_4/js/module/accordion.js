export function initAccordion() {
    const headers = document.querySelectorAll(".accordion-header");

    headers.forEach((header) => {
        header.addEventListener("click", () => {
            const item = header.parentElement;
            const isActive = item.classList.contains("active");

            // 关闭其他所有打开项（如果想允许多开，这段可去掉）
            document
                .querySelectorAll(".accordion-item")
                .forEach((i) => i.classList.remove("active"));

            // 如果当前不是打开状态，则打开
            if (!isActive) {
                item.classList.add("active");
            }
        });
    });
}
