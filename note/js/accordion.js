/* 这段 JavaScript 代码定义了一个叫做 initAccordion 的函数，
    用来初始化一个手风琴式（Accordion）的 UI 组件。
    Accordion 是网页中常见的一种交互模式，点击标题会展开或收起对应的内容。 
*/

function initAccordion(containerSelector) {
    //initAccordion函数起始
    //containerSelector：一个css选择器字符串，用于查找所有匹配的Accordion容器

    //Step1.选中所有的匹配给定选择器的 accordion 容器
    const containers = document.querySelectorAll(containerSelector);

    //Step2.类似于for循环的遍历每个容器，.forEach()的作用就是遍历数组或类数组对象中的每一项(详见note/js/note.js line 1)
    containers.forEach((container) => {
        //在每个容器中，查找直接子项的 .accordion-header
        const headers = container.querySelectorAll(
            //使用了 :scope 伪类确保只查找当前容器内的顶层 .accordion-item（socpe的作用见note/js/note.js line 22）
            ":scope > .accordion-item > .accordion-header"
            //这一句中，查找的部分是：
            //container.querySelectorAll(":scope > .accordion-item > .accordion-header"）
            //查找完毕之后，const定义了一个叫做headers的函数，并把查找的值赋给他
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
