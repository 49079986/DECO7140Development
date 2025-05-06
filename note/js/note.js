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
