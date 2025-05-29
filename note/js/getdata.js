//创建一个fetchGetData，接收两个函数url，headers，headers是默认为空
const fetchGetData = (url, headers = {}) => {
    //使用浏览器内建的 fetch 方法发送请求,fetcch详见note/js/note.js line
    //fetch(url, options)：fetch 是用来发起网络请求的浏览器 API，返回一个 Promise。
    //fetch(url,{method:"GET",headers:headers,})
    return fetch(url, {
        //method的方法是"GET",其实可以不用写因为本来默认的就是get
        method: "GET",
        //设置请求headers
        headers: headers,
    })
        .then((response) => {
            //response.ok 是 True 的话，代表http的状态码是处于200-299之间，而不是404/500等
            if (!response.ok) {
                //创建一个新的error，为line 22中的error创建内容
                throw new Error("Server returned an error.");
            }
            // 如果响应是成功的（例如 200），就会调用 response.json() 来把响应体解析为 JavaScript 对象。
            return response.json();
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            return null;
        });
};

export { fetchGetData };
