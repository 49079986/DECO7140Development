// js/base.js
import { setupNavHighlight } from "./module/nav-active.js";
import { setupFlipCards } from "./module/flip_cards.js";
import { setupButtonDelay } from "./module/button_login.js";
import { setupModal } from "./module/modal.js"; 
import { setupBackgroundZoom } from './module/bg.js';
import { initAccordion } from "./module/accordion.js";
import { setupSearch } from "./module/search.js";
import { initMenuHover } from './module/content.js';
setupBackgroundZoom();
window.addEventListener("DOMContentLoaded", () => {
    setupFlipCards();
    setupNavHighlight();
    setupButtonDelay();
    setupModal();
    initAccordion();
    setupSearch();
    initMenuHover();
});


//Post Data
import { postFormData } from "./module/postFormData.js";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("community-form");
    const feedback = document.getElementById("form-feedback");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        feedback.textContent = "Submitting...";
        const { success, data } = await postFormData(
            form,
            "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community/",
            {
                student_number: "s4926751",
                uqcloud_zone_id: "7e9896f4",
            }
        );

        if (success) {
            feedback.textContent = data.message;
            form.reset();
        } else {
            feedback.textContent = data.message || "Something went wrong.";
        }
    });
});

// Get Data
import { fetchGetData } from "./module/getData.js";

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("community-list");

    fetchGetData(
        "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community/",
        {
            student_number: "s4926751",
            uqcloud_zone_id: "7e9896f4",
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
            card.innerHTML = `
            <div class="card-body">
            <h5 class="card-title">${member.name}</h5>
            <p class="card-text">${member.message || "No message provided."}</p>
            </div>
        `;
            container.appendChild(card);
        });
    });
});
