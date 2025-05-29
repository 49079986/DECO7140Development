/**
* IMPORTS
* Keep track of external modules being used
* */
import { initAccordion } from './modules/accordion.js';

import { fetchGetData } from './modules/getData.js';

import {postFormData} from './modules/postFormData.js'
                    

// Post
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('community-form');
    const feedback = document.getElementById('form-feedback');

    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // Default behaviour for blocking events

        feedback.textContent = 'Submitting...';
        const { success, data } = await postFormData(form, 'https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community/', {
            'student_number': 's4926751', 
            'uqcloud_zone_id': '7e9896f4',
        });

        if (success) {
            feedback.textContent = data.message;
            form.reset();
        } else {
            feedback.textContent = data.message || 'Something went wrong.';
        }
    });
});

// Get
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('community-list');

    fetchGetData('https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community/', {
        'student_number': 's4926751',
        'uqcloud_zone_id': '7e9896f4'
    }).then(data => {
        if (!data) {
        container.innerHTML = '<p class="text-danger">Unable to load community members.</p>'; //Return fail
        return;
        }

        data.forEach(member => {
        const card = document.createElement('div');
        card.className = 'card mb-3';  // AI prompt get email and image part
        card.innerHTML = `
            <div class="card-body"> 
            <h5 class="card-title">${member.name}</h5>
            <p class="card-text">${member.message || 'No message provided.'}</p>
            <p class="card-email"><strong>Email:</strong> ${member.email || 'Not provided'}</p>
            ${member.photo ? `<img src="${member.photo}" alt="Profile photo of ${member.name}" class="profile-photo" />` : ''}
        </div>
        `;
        container.appendChild(card);
        });
    });
});


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