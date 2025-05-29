// js/module/nav-active.js
export const setupNavHighlight = () => {
    const links = document.querySelectorAll("#nav-desktop a, #nav-mobile a");
    const currentPath = window.location.pathname;

    links.forEach((link) => {
        const href = link.getAttribute("href");
        if (href === currentPath || currentPath.endsWith(href)) {
            link.classList.add("active");
        }
    });
};
