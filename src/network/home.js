import {request} from './axios'

// 创建js文件，单独管理首页请求  —— 首页本身只关注在哪里，用那个发送。
// 具体请求配置，在当前文件进行

// 首页主题数据
export function getHomeMultiData(){
    return request({
        url:'home/multidata',
        method:'get'
    });
} 
// 首页商品数据
export function getHomeGoodsData(type,page){
    return request({
        url:'home/data',
        method:'get',
        params:{
            type,
            page
        }
    });
} 