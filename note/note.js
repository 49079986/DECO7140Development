/* 【导航栏】 *//* 【导航栏】 *//* 【导航栏】 *//* 【导航栏】 *//* 【导航栏】 *//* 【导航栏】 *//* 【导航栏】 *//* 【导航栏】 */
/* 【导航栏】 *//* 【导航栏】 *//* 【导航栏】 *//* 【导航栏】 *//* 【导航栏】 *//* 【导航栏】 *//* 【导航栏】 *//* 【导航栏】 */

/*【导航栏】这段 JavaScript 是一个用于控制移动端菜单显示和隐藏的功能函数，通常配合“汉堡菜单按钮”使用*/
function setupMenu() {
    const menuToggle = document.querySelector(".menu-toggle");/*查找带 .menu-toggle 类的按钮（通常是汉堡图标）*/
    const menu = document.querySelector(".menu");/*查找带 .menu 类的菜单（就是导航列表）*/

    if (menuToggle && menu) {/*如果两个都找到了：*/
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("show");
        });/*当点击按钮时，给 .menu 元素加上或去掉 .show 类*/

        // Optional: Close menu when clicking outside，	如果用户点击的是菜单区域 外面，就把菜单隐藏，这样点击空白处就能关闭菜单，增强用户体验。
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
//这是 模块语法（ES Modules），把 setupMenu 这个函数导出，让你可以在别的文件里通过 import { setupMenu } from './menu.js' 方式使用它。

/* 【导航栏】 *//* 【导航栏】 *//* 【导航栏】 *//* 【导航栏】 *//* 【导航栏】 *//* 【导航栏】 *//* 【导航栏】 *//* 【导航栏】 */
/* 【导航栏】 *//* 【导航栏】 *//* 【导航栏】 *//* 【导航栏】 *//* 【导航栏】 *//* 【导航栏】 *//* 【导航栏】 *//* 【导航栏】 */





