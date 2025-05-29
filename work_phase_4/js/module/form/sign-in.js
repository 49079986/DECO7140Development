export function setupSignInForm() {
    const form = document.getElementById("sign-in-form");
    const feedback = document.getElementById("form-feedback");
    const list = document.getElementById("sign-in-list");
    const wrapper = document.getElementById("sign-in-wrapper");

    if (!form || !feedback || !list || !wrapper) {
        console.warn("Sign In form elements not found.");
        return;
    }

    // 初始化时，清空列表（不显示历史）
    list.innerHTML = '';

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = form.username.value.trim();
        const password = form.password.value.trim();

        if (username && password) {
            // 提交后先清空列表，只显示最新输入
            list.innerHTML = '';

            const listItem = document.createElement("li");
            listItem.textContent = `Username: ${username}, Password: ${password}`;
            list.appendChild(listItem);

            // 如果你想保留 localStorage 里所有记录，可以这么写：
            // const updatedUsers = JSON.parse(localStorage.getItem("signedInUsers")) || [];
            // updatedUsers.push({ username, password });
            // localStorage.setItem("signedInUsers", JSON.stringify(updatedUsers));

            // 或者只保存最新一次（覆盖之前的）
            localStorage.setItem("signedInUsers", JSON.stringify([{ username, password }]));

            feedback.textContent = "Sign in successful!";
            form.reset();
        } else {
            feedback.textContent = "Please fill in all fields.";
        }
    });
}
