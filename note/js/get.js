// 这段代码的作用是：
// 在网页加载完成后，通过异步请求获取“社区成员”的数据，并将每位成员的信息以卡片形式动态添加到网页中

// 导入fetchGetData
import { fetchGetData } from "./modules/getData.js";

//
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("community-list");

    fetchGetData(
        "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community/",
        {
            student_number: "s4907998",
            uqcloud_zone_id: "22a925be",
        }
    ).then((data) => {
        if (!data) {
            container.innerHTML =
                '<p class="text-danger">Unable to load community members.</p>';
            return;
        }
        //为每个成员动态创建一个 .card 元素
        data.forEach((member) => {
            const card = document.createElement("div");
            card.className = "card mb-3";
            card.innerHTML = `
            <div class="card-body">
            <h5 class="card-title">${member.name}</h5>
            <p class="card-text">${member.message || "No message provided."}</p>
            </div>
        `;
            // 把card 添加到container的最后面
            container.appendChild(card);
        });
    });
});
