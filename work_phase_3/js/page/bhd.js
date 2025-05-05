import { postFormData } from "./modules/postFormData.js"; //这行是从一个模块文件（你存的 postFormData.js）中引入你之前写好的数据提交函数。

document.addEventListener("DOMContentLoaded", () => {
    //页面内容加载完成后才执行里面的逻辑，避免 DOM 元素还没加载就出错。
    const form = document.getElementById("community-form");
    const feedback = document.getElementById("form-feedback");
    /*有了以上两段话，html中必须有
        <form id="community-form"> ... </form>
        <p id="form-feedback"></p>
    */

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        //防止默认提交刷新页面，而是使用 JavaScript 自己处理。

        feedback.textContent = "Submitting...";
        const { success, data } = await postFormData(
            form,
            "deco7140-22a925be.zones.eait.uq.edu.au",
            {
                student_number: "s4907998",
                uqcloud_zone_id: "womhop-hykpas-6fYjbi",
            }
        );

        if (success) {
            feedback.textContent = data.message;
            form.reset(); //form.reset() 会清空表单。
        } else {
            feedback.textContent = data.message || "Something went wrong.";
        }
        /* 	
        •	成功就显示服务器的成功消息；
	    •	失败就提示失败消息或默认提示；
        */
    });
});
