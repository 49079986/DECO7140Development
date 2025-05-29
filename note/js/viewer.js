//实现了一个图片放大预览功能（viewer），当点击一张小图时，会弹出一个全屏层显示大图，点关闭按钮或空白区域可以退出

// 指本网页文档对象（DOM）。
// DOMContentLoaded:事件类型，表示“HTML 文档结构已经完全加载完成”，不包括图片、样式等。
// .addEventListener：为这个文档添加一个事件监听器。
document.addEventListener("DOMContentLoaded", function () {
    //类似于python中的class，__init__之类的东西，为里面的变量进行赋值
    const viewer = document.getElementById("viewer");
    const viewerImg = document.getElementById("viewer-img");
    const viewerCaption = document.getElementById("viewer-caption");
    const closeBtn = document.getElementById("close-viewer");

    // 选择所有带有 .responsive-img1，2 类的图片
    const images = document.querySelectorAll(".responsive-img1,.responsive-img2");

    //遍历images的每个元素，类似于python中的 for letter in WORDS:  ；img是images的元素
    images.forEach((img) => {
        //为里面的每个图都添加监听事件
        img.addEventListener("click", function () {
            //把被点击图片的 src（图片地址）赋值给 viewerImg.src，即大图组件的 src，用于显示原图的放大版
            viewerImg.src = img.src;
            //如果图片有 alt（可替换文字），就显示它；如果没有就显示默认的 "Image
            viewerCaption.textContent = img.alt || "Image";
            viewer.style.display = "flex";
            //设置可访问性属性，告诉屏幕阅读器这个 viewer 现在是“可见的”，提高无障碍兼容性
            viewer.setAttribute("aria-hidden", "false");
        });
    });

    
    // 关闭按钮事件
    closeBtn.addEventListener("click", function () {
        viewer.style.display = "none";
        viewer.setAttribute("aria-hidden", "true");
    });

    // 点击遮罩层空白处也可以关闭 viewer（可选功能）
    viewer.addEventListener("click", function (e) {
        //e.target指代的是用户点击的部分
        //e.target === viewer 的意思是用户是否点击在viewer的本体上
        if (e.target === viewer) {
            viewer.style.display = "none";
            viewer.setAttribute("aria-hidden", "true");
        }
    });
});
