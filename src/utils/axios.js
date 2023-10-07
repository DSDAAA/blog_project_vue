import axios from "axios";
// 使用element-plus ElMessage做消息提醒
import { ElMessage } from 'element-plus'

import cookie from 'js-cookie'

//1. 创建新的axios实例，
const service = axios.create({
    // 公共接口 开发环境还是线上环境也可以用api
    baseURL:"http://localhost:8001",
    // 超时时间 单位是ms，这里设置了5s的超时时间
    timeout: 50000,
});
// 2.请求拦截器
service.interceptors.request.use(
    (config) => {
        //发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等，根据需求去添加
        //  config.data = qs.stringify(config.data); //数据转化,也可以使用qs转换
        //  config.headers = {
        //    'Content-Type':'application/x-www-form-urlencoded' //配置请求头
        //  }
        //注意使用token的时候需要引入cookie方法或者用本地localStorage等方法，推荐js-cookie
        //  const token = getCookie('名称');//这里取token之前，你肯定需要先拿到token,存一下
        //  if(token){
        //     config.params = {'token':token} //如果要求携带在参数中
        //     config.headers.token= token; //如果要求携带在请求头中
        //   }
        // config.method === "post"
        //   ? (config.data = qs.stringify({ ...config.data }))
        //   : (config.params = { ...config.params });
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

// 3.响应拦截器
service.interceptors.response.use(
    (response) => {
        if (response.data.code !== 200) {
            ElMessage.error(response.data.message);
            return Promise.resolve(error.response);
        } else {
            return response.data
        }
    },
    (error) => {
        /***** 接收到异常响应的处理开始 *****/
        ElMessage.error("连接服务器失败");
        //ElMessage.error(ElMessage.error)
        /***** 处理结束 *****/
        //如果不需要错误处理，以上的处理过程都可省略
        return Promise.resolve(error.response);
    }
);
//4.导出
export default service;