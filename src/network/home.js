import {request} from './request'

// 创建js文件，单独管理首页请求  —— 首页本身只关注在哪里，用那个发送。
// 具体请求配置，在当前文件进行

export function getHomeMultiData(){
    return request({
        url:'home/multidata',
        method:'get'
    });
} 