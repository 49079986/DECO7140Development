document.addEventListener("DOMContentLoaded", function () {
    const viewer = document.getElementById("viewer");
    const viewerImg = document.getElementById("viewer-img");
    const viewerCaption = document.getElementById("viewer-caption");
    const closeBtn = document.getElementById("close-viewer");

    // 选择所有带有 .responsive-img1 类的图片
    const images = document.querySelectorAll(".responsive-img1,.responsive-img2");

    images.forEach((img) => {
        img.addEventListener("click", function () {
            viewerImg.src = img.src;
            viewerCaption.textContent = img.alt || "Image";
            viewer.style.display = "flex";
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
        if (e.target === viewer) {
            viewer.style.display = "none";
            viewer.setAttribute("aria-hidden", "true");
        }
    });
});
