//.forEach()的功能展现：
const arr = [1, 2, 3];
arr.forEach((item, index) => {
    console.log(item, index);
});
//结果就是
// 1，0
// 2，1
// 3，2
//其中，item代表本体，index代表了本体对应的索引

const headers = container.querySelectorAll();
//const 是 ES6 引入的 JavaScript 关键字，用于定义常量变量，它有两个关键特性：
//1.不能被重新赋值；2.可以修改它所引用的对象的内容
//所以这句话的意思是：”定义“一个常量 headers，用于保存当前容器内查找到的元素集合

//伪类：Pseudo-class，是 CSS 中的一种选择器，用于表示元素的某种状态或结构关系
//比如：
//1. .hover； 指 当鼠标悬停在xx上面时，如果是按钮，在css中表现为：button:hover{...},括号内容为鼠标悬停在button上的时候button会变得怎么样
//2. .first-child // 指的是 xx的第一个子元素
//scope 表示“当前的作用元素”，在 JavaScript 的 querySelectorAll 中很有用。如下：

scope;
// 如果单纯写这个不带scope的话，它会查找 container 内所有的 .accordion-header 元素，不管它们嵌套多深。
container.querySelectorAll(".accordion-header");
// 但是如果用了scope
container.querySelectorAll(":scope > .accordion-item > .accordion-header");
// 意思就是
// 1.当前 container 内的（用 :scope 限定） +
// 2.顶层（也就是直接子元素）的 .accordion-item
// 3.然后这些 .accordion-item 里面的 .accordion-header

querySelector;
//用法：
document.querySelector(selector);
//selector：是一个字符串，符合 CSS 选择器语法（比如类名、ID、标签、组合选择器等）
const content = item.querySelector(".accordion-content"); //找出css中accordion-content的语法
//querySelector的作用是查找selector中的第一个元素
//上面的例子是item.，说明是在（Accordion中的）item中寻找第一个accordion-content

requestAnimationFrame;
//于创建高性能动画效果的浏览器原生方法，它比 setTimeout / setInterval 更平滑、更节能，是前端做动画的标准方式之一
//用法
requestAnimationFrame(callback);
//callback是执行函数，整个callback 16.6ms执行一次（60fps）
//例子：有一个盒子，让它往右移动
let x = 0; //初始位置设置为0
const box = document.getElementById("box");
function moveRight() {
    x += 2;
    //每帧让left增加2px
    box.style.left = x + "px";
    if (x < 300) {
        requestAnimationFrame(moveRight); // 继续动画
    }
}
requestAnimationFrame(moveRight); // 启动动画
//在html中的语法：<div id="box" style="xx"></div>

fetch;
//fetch的作用是在 JavaScript 中向服务器发送网络请求（如 GET、POST）并获取响应数据。
fetch(url, options);
// url: 请求的地址（如 API 接口）
// options: 可选的配置对象，如方法、请求header、请求body等
// GET请求
// 它接受一个 URL 参数，这里是 "https://api.example.com/data"，表示请求该网址的数据
// 默认使用 GET 请求，会请求这个 URL 资源
// 返回一个 Promise 对象，表示网络请求的结果
fetch("https://api.example.com/data")
    //.then() 是 Promise 的方法，用来处理请求成功时的操作
    //当 fetch 请求成功并返回一个响应（response）时，这个 .then() 方法会被执行
    //response是返回的 HTTP 响应对象
    //response.json()把响应中的数据解析为 JSON 格式
    // 如果响应数据是 JSON 格式（通常是 API 返回的数据），你可以调用 .json() 方法把它转换成 JavaScript 对象
    .then((response) => response.json()) // 解析响应为 JSON
    //第二个 .then() 接收到从 .json() 解析出来的数据作为 data 参数
    //在这里，data 是解析后的 JavaScript 对象（或数组，取决于 API 返回的数据类型）。
    .then((data) => console.log(data)) // 使用返回的数据
    // .catch() 用来处理 fetch 请求过程中出现的任何错误，捕获的是 Promise 失败（rejected）
    // error 是发生错误时传入的错误对象，通常是 JavaScript 异常信息，或者你自己在代码中 throw 出的错误
    // console.error("请求失败:", error)：如果请求失败或遇到错误，错误信息会被打印到控制台，帮助开发者定位问题。
    .catch((error) => console.error("请求失败:", error)); // 错误处理
//POST请求（我要把信息给别人）：
//先定义了一个requestData的对象，为name：，age：
const requestData = { name: "Alice", age: 25 };
fetch("https://api.example.com/submit", {
    method: "POST", // 请求方法是 POST
    headers: { "Content-Type": "application/json" }, // 告诉服务器，发送的数据是 JSON 格式。
    // HTTP 请求体中的数据必须是字符串或 FormData 类型
    // 使用 JSON.stringify() 将 requestData 对象转换为 JSON 字符串：
    // body：指定请求body，包含要发送的数据
    body: JSON.stringify(requestData), // 请求体，转换数据为 JSON 字符串
})
    .then((response) => response.json()) // 解析响应为 JSON
    .then((data) => console.log(data)) // 使用返回的数据
    .catch((error) => console.error("请求失败:", error)); // 错误处理

//注：response和promise的区别
// response：服务器返回的真正结果，包括直接的相应数据，json语言，像是已经打开的包裹，通过.json()来把里面的内容变成js
// promise：fetch之后得到的结果，需要转换才能得到json，像还没有到手的包裹
async;
// async 用来定义一个函数，这个函数会 自动返回一个 Promise(即使你没有显式返回 Promise)
// 你可以在其中使用 await 来等待异步操作完成
// 只能在 async 函数中使用。
// 它会暂停代码执行，直到 Promise 完成，然后返回结果。
// 比 .then() 更直观、可读性更强。
async function fetchData() {
    try {
        const response = await fetch("https://api.example.com/data");
        if (!response.ok) {
            throw new Error("服务器返回错误");
        }
        const data = await response.json();
        console.log("数据：", data);
    } catch (error) {
        console.error("请求失败：", error);
    }
}
