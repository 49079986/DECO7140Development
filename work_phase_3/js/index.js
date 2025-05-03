/**
 * IMPORTS
 * Keep track of external modules being used
 *从 modules/menu.js 文件中导入 setupMenu() 函数，这个函数是用来让菜单按钮可以展开或收起菜单。
 * */
import { setupMenu } from "./modules/menu.js";

/**
 * CONSTANTS
 * Define values that don't change e.g. page titles, URLs, etc.
 * */

/**
 * VARIABLES
 * Define values that will change e.g. user inputs, counters, etc.
 * */

/**
 * FUNCTIONS
 * Group code into functions to make it reusable
 * */

/**
 * EVENT LISTENERS
 * The code that runs when a user interacts with the page
 * */

// when the page fully loads
/**
 * 这个监听器的作用是：当网页的 HTML 加载完成时，就执行里面的代码
 * */
document.addEventListener("DOMContentLoaded", () => {
    setupMenu();
});
