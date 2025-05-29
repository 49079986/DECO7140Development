import { fetchGetData } from "../module/getData.js";
import { postFormData } from "../module/postFormData.js"; 
import { initAccordion } from '../module/accordion.js';

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

        data.forEach((member) => {
            const card = document.createElement("div");
            card.className = "card mb-3";
        
            const photoHTML = member.photo
                ? `<img class="card-photo" src="${member.photo}" alt="User submitted photo" />`
                : '';
        
            card.innerHTML = `
                ${photoHTML}
                <div class="card-body">
                    <h3 class="card-title">${member.name}</h3>
                    <p class="card-text">${member.message || 'No message provided.'}</p>
                </div>
            `;
        
            container.appendChild(card);
        });
    });

    // POST FORM DATA
    //页面内容加载完成后才执行里面的逻辑，避免 DOM 元素还没加载就出错。
    const form = document.getElementById("community-form");
    const feedback = document.getElementById("form-feedback");
    /*有了以上两段话，html中必须有
        <form id="community-form"> ... </form>
        <p id="form-feedback"></p>
    */

    form.addEventListener("submit", async (e) => {
        //e 是事件对象，代表当前提交事件
        e.preventDefault();
        
        //防止默认提交刷新页面，而是使用 JavaScript 自己处理。
        feedback.textContent = "Submitting...";
        const { success, data } = await postFormData(
            form,
            " https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community/",
            {
                student_number: "s4907998",
                uqcloud_zone_id: "22a925be",
            }
        );

        if (success) {
            feedback.textContent = data.message;
            form.reset(); //form.reset() 会清空表单。
        } else {
            feedback.textContent = data.message || "Something went wrong.";
        }
    });
});

// document.addEventListener("DOMContentLoaded", () => {
    
// });


/**
* CONSTANTS
* Define values that don't change e.g. page titles, URLs, etc.
* */
const PAGE_NAME = "site_map.js";


/**
* VARIABLES
* Define values that will change e.g. user inputs, counters, etc.
* */
let message = "Page has fully loaded";

/**
* FUNCTIONS
* Group code into functions to make it reusable
* */

/**
* EVENT LISTENERS
* The code that runs when a user interacts with the page
* */

// when the page fully loads, then initialise the accordion assembly
document.addEventListener("DOMContentLoaded", () => {
    initAccordion('.accordion');
});

document.addEventListener("DOMContentLoaded", () => {
    initGalleryViewer();
});