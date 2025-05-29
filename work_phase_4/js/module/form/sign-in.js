export function setupSignInForm() {
    const form = document.getElementById("sign-in-form");
    const closeButton = document.getElementById("close-button");
    const feedback = document.getElementById("form-feedback");
    const list = document.getElementById("sign-in-list");
    const wrapper = document.getElementById("sign-in-wrapper");

    if (!form || !closeButton || !feedback || !list || !wrapper) {
        console.warn("Sign In form elements not found.");
        return;
    }

    // 加载本地存储内容
    const storedUsers = JSON.parse(localStorage.getItem("signedInUsers")) || [];
    storedUsers.forEach((user) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Username: ${user.username}, Password: ${user.password}`;
        list.appendChild(listItem);
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = form.username.value.trim();
        const password = form.password.value.trim();

        if (username && password) {
            const listItem = document.createElement("li");
            listItem.textContent = `Username: ${username}, Password: ${password}`;
            list.appendChild(listItem);

            // 修正此处：从最新 localStorage 获取并更新
            const updatedUsers = JSON.parse(localStorage.getItem("signedInUsers")) || [];
            updatedUsers.push({ username, password });
            localStorage.setItem("signedInUsers", JSON.stringify(updatedUsers));

            feedback.textContent = "Sign in successful!";
            form.reset();
        } else {
            feedback.textContent = "Please fill in all fields.";
        }
    });

    closeButton.addEventListener("click", () => {
        wrapper.style.display = "none";
    });
}
