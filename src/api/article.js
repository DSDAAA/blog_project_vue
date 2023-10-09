import request from '../utils/axios.js'

// 列表
export const listArticle = (article) => {
    return request({
        url: `/article/queryList`,
        method: 'post',
        data: article
    })
}

// 新增
export const addArticle = (article) => {
    return request({
        url: "/article/addArticle",
        method: "post",
        data: article
    })
}

// 根据id查询
export const getArticle = (id) => {
    return request({
        url: `/article/getArticle/${id}`,
        method: "get"
    })
}

// 修改
export const updateArticle = (article) => {
    return request({
        url: "/article/updateArticle",
        method: "put",
        data: article
    })
}

// 删除
export const deleteArticle = (id) => {
    return request({
        url: `/article/deleteArticle/${id}`,
        method: "delete"
    })
}