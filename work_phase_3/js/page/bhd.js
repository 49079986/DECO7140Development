import { postFormData } from "./modules/postFormData.js";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("community-form");
    const feedback = document.getElementById("form-feedback");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        feedback.textContent = "Submitting...";
        const { success, data } = await postFormData(
            form,
            "INSERT_API_ENDPOINT",
            {
                student_number: "s1234567",
                uqcloud_zone_id: "abcd123",
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
