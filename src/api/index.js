/**
 * 请求封装底层
 * 请求和响应拦截器
 */
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:3004',
    timeout: 3000,
    headers: [],
    params:{
        // name: 'xiaohei'
    }
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么 公参
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么 404处理
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

// 封装get和post方法
function get(url, params) {
    if (params) {
        return instance.get(url, {params: {...params}})
    }
    return instance.get(url);
}

function post(url, params) {
    if (params) {
        return instance.post(url, {params: {...params}})
    }
    return instance.post(url);
}

const http = {get, post};

export default http;


