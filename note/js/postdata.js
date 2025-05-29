//async函数见note.js line 98
//formEl html的<form>元素
//endpointUrl 请求的url
//customHeaders 可自定义的header，默认为{}
const postFormData = async (formEl, endpointUrl, customHeaders = {}) => {
    //从 HTML 的 <form> 元素中收集所有字段的 name 和对应的值，包括上传的文件，生成一个 FormData 对象
    const formData = new FormData(formEl);

    //fetch可能因为各种原因出现错误，所以用try
    try {
        const response = await fetch(endpointUrl, {
            method: "POST",
            headers: customHeaders,
            body: formData,
        });

        //这一步是将response从json转化为js语言
        const data = await response.json();

        return {
            success: response.ok && data.status === "success",
            data,
        };
    } catch (error) {
        return {
            success: false,
            data: { message: "Network or server error.", error },
        };
    }
};

export { postFormData };
