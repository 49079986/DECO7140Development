/* 【导航栏】 */ /* 【导航栏】 */ /* 【导航栏】 */ /* 【导航栏】 */ /* 【导航栏】 */ /* 【导航栏】 */ /* 【导航栏】 */ /* 【导航栏】 */
/* 【导航栏】 */ /* 【导航栏】 */ /* 【导航栏】 */ /* 【导航栏】 */ /* 【导航栏】 */ /* 【导航栏】 */ /* 【导航栏】 */ /* 【导航栏】 */

/*【导航栏】这段 JavaScript 是一个用于控制移动端菜单显示和隐藏的功能函数，通常配合“汉堡菜单按钮”使用*/
function setupMenu() {
    const menuToggle =
        document.querySelector(
            ".menu-toggle"
        ); /*查找带 .menu-toggle 类的按钮（通常是汉堡图标）*/
    const menu =
        document.querySelector(
            ".menu"
        ); /*查找带 .menu 类的菜单（就是导航列表）*/

    if (menuToggle && menu) {
        /*如果两个都找到了：*/
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("show");
        }); /*当点击按钮时，给 .menu 元素加上或去掉 .show 类*/

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

/* 【导航栏】 */ /* 【导航栏】 */ /* 【导航栏】 */ /* 【导航栏】 */ /* 【导航栏】 */ /* 【导航栏】 */ /* 【导航栏】 */ /* 【导航栏】 */
/* 【导航栏】 */ /* 【导航栏】 */ /* 【导航栏】 */ /* 【导航栏】 */ /* 【导航栏】 */ /* 【导航栏】 */ /* 【导航栏】 */ /* 【导航栏】 */

/* 【API】 *//* 【API】 *//* 【API】 *//* 【API】 *//* 【API】 *//* 【API】 *//* 【API】 *//* 【API】 *//* 【API】 *//* 【API】 */
/* 【API】 *//* 【API】 *//* 【API】 *//* 【API】 *//* 【API】 *//* 【API】 *//* 【API】 *//* 【API】 *//* 【API】 *//* 【API】 */

const postFormData = async (formEl, endpointUrl, customHeaders = {}) => {
    /*这是一个异步函数（async），你可以调用它来：
	•	获取表单的数据（formEl 是表单的 DOM 元素）；
	•	通过 fetch() 把数据以 POST 的方式提交到 endpointUrl；
	•	返回是否成功（success: true / false）和服务器的响应内容。
    */
    const formData = new FormData(formEl);
    //把表单里的 <input>、<textarea>、<select> 等元素自动提取，变成可以 POST 的 FormData 对象。
    try {
        const response = await fetch(endpointUrl, {
            method: "POST",
            headers: customHeaders,
            body: formData,
            //用 fetch() 发起一个 POST 请求，把 formData 发到你提供的 endpointUrl。
        });

        const data = await response.json(); //把服务器响应转为 JSON 数据。

        return {
            //判断是否成功并返回结果
            success: response.ok && data.status === "success", //response.ok 是 HTTP 状态是否为 200-299；data.status === "success" 是检查服务器返回的 JSON 中，是否包含 status: "success"
            data,
        };
    } catch (error) {
        return {
            success: false,
            data: { message: "Network or server error.", error }, //如果出错则返回错误信息
        };
    }
};

export { postFormData };

/* 【API】 *//* 【API】 *//* 【API】 *//* 【API】 *//* 【API】 *//* 【API】 *//* 【API】 *//* 【API】 *//* 【API】 *//* 【API】 */
/* 【API】 *//* 【API】 *//* 【API】 *//* 【API】 *//* 【API】 *//* 【API】 *//* 【API】 *//* 【API】 *//* 【API】 *//* 【API】 */



