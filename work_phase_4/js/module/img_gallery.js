// gallery.js

export function initImageGallery(containerSelector, viewerSelector) {
    const galleryContainer = document.querySelector(containerSelector);
    const viewer = document.querySelector(viewerSelector);
    const viewerImg = viewer?.querySelector("img");
    const closeBtn = viewer?.querySelector(".viewer-close");

    if (!galleryContainer || !viewer || !viewerImg || !closeBtn) return;

    galleryContainer.querySelectorAll("img").forEach((img) => {
        img.addEventListener("click", () => {
            viewerImg.src = img.src;
            viewer.classList.remove("hidden");
        });
    });

    closeBtn.addEventListener("click", () => {
        viewer.classList.add("hidden");
        viewerImg.src = "";
    });
}
