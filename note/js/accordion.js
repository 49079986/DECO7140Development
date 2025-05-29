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
            //这一句中，执行查找功能的部分是：
            //container.querySelectorAll(":scope > .accordion-item > .accordion-header"）
            //查找完毕之后，const定义了一个叫做headers的函数，并把查找的值赋给他
        );
    

        headers.forEach((header) => {
            //为每一个 header 添加一个点击事件监听器。当用户执行‘click’的时候就会会执行后面的程序。
            header.addEventListener("click", () => {
                //header.closest(".accordion-item") 会往上寻找最近的 .accordion-item 元素
                // 通常代表手风琴的整个条目容器（包括标题和内容）
                const item = header.closest(".accordion-item");

                //从当前 item 中查找对应的 .accordion-content 内容部分，这是点击后要显示或隐藏的部分
                //.querySelector 见note/js/note.js line 34
                const content = item.querySelector(".accordion-content");
                //在当前 header 中查找 .arrow 元素，通常是一个图标（例如向下/向右的箭头），在pw3中用的是三角箭头"▷"，用来指示展开状态。
                const arrow = header.querySelector(".arrow");
                //isOpen是一个bulean，只会返回True/False
                // 在item中，classlist是item元素列表，contains代表是否含有
                // 翻译一下：
                // 在accordion.item的classlist中，查找是否含有‘open’这个class
                // 创建一个isOpen，把刚刚的查找结果‘True’/‘False’赋值进去
                const isOpen = item.classList.contains("open");

                if (!isOpen) {// ！代表相反逻辑，即 NOT isOpen 
                    //在classlist中添加open，让accordion处于展开状态
                    item.classList.add("open");

                    // 清空 height 后获取真实高度
                    // 重制maxHeight，为了清空当前高度，准备动画
                    content.style.maxHeight = null;
                    //读取内容的真实高度，用于后面动画展开。
                    // scrollHeight 表示内容的真实总高度（即使当前不可见）。
                    const fullHeight = content.scrollHeight + "px";
                    
                    // 用 requestAnimationFrame 等待浏览器下一帧再设置 max-height，这让 CSS transition 动画能够生效。
                    // requestAnimationFrame见note/js/note.js line 42
                    requestAnimationFrame(() => {
                        content.style.maxHeight = fullHeight;
                    });

                    //这句话分为两部分
                    // 1.if（arrow）：这句话判断arrow是否存在
                    // 2.arrow.textContent = "▼";:这句话将arrow变成向下的状态
                    if (arrow) arrow.textContent = "▼";
                } else {//如果处于关闭的状态

                    //移除open这个class，让它变为关闭状态
                    item.classList.remove("open");

                    //把整个content的高度变为null
                    requestAnimationFrame(() => {
                        content.style.maxHeight = null;
                    });

                    //同上
                    if (arrow) arrow.textContent = "▷";
                }
            });
        });
    });
}

//将本函数导出以供其他文件使用
export { initAccordion };
