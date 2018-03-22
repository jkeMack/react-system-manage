import axios from 'axios/dist/axios.min';
import {API_SERVER} from './app.config';
import {message} from 'antd';

axios.defaults.baseURL = API_SERVER;
// axios.defaults.headers.common['Authorization'] = 'bearer ' + sessionStorage.getItem('token');

axios.interceptors.request.use(function (config) {

    //触发请求就显示loading
    message.loading('加载中...', 0);

    // 根据参数动态请求的url
    // 动态属性写法   api/dicts/${type}/${id}   则type和id是动态值
    let pattern = /\$\{([^\$\{]*)\}/g;

    if (pattern.test(config.url)) {
        let array = config.url.match(pattern);
        array.forEach(item => {
            let name = item.replace('${', '').replace('}', '');
            if (config.data && config.data[name]) {
                config.url = config.url.replace(item, config.data[name]);
            } else {
                config.url = config.url.replace('/' + item, '');
            }
        });
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    let contentType = response.headers['content-type'];
    if (!contentType || contentType.indexOf('application/json') == -1)
        return response;
    let responseData = response.data;
    let newResponse = {};

        if (responseData.data.meta) {
            newResponse.data = {
                data: responseData.data.data,
                pagination: responseData.data.meta.pagination
            };
        }
        else {
            newResponse.data = responseData.data;
        }
        //请求返回成功后就摧毁loading
        message.destroy();
        return newResponse;
}, function (error) {

    //请求返回成功后就摧毁loading
    message.destroy();

    // 对响应错误做点什么
    if (error.response.status === 422) {
        let first_error;
        for(let key in error.response.data.data.errors){
            first_error = error.response.data.data.errors[key][0];
            message.error(first_error);
        }
    }
    else {
        message.success('请求失败！');
    }
    return Promise.reject(error);
});

export default axios;