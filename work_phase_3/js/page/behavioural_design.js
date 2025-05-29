//本js是让按钮（bh1和img-as-button）按下之后，先执行按下的动作再跳转
const buttons = document.querySelectorAll(".button-bh1,.img-as-button");

buttons.forEach((button) => {
    button.addEventListener("mousedown", () => {
        button.classList.add("pressed");
        //setTimeout 用于延时响应（175ms）
        setTimeout(() => {
            button.classList.remove("pressed");
            const link = button.getAttribute("data-link");
            if (link) {
                window.location.href = link;
            }
        }, 175);
    });
});

