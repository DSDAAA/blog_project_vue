import request from '../utils/axios.js'

// 分类列表
export const listCategory = () => {
    return request({
        url: `/category/queryList`,
        method: 'post'
    })
}

// 条件分页分类列表
export const listCategoryPage = (current,limit,category) => {
    return request({
        url: `/category/queryListPage/${current}/${limit}`,
        method: 'post',
        data: category
    })
}

// 新增
export const addCategory = (category) => {
    return request({
        url: "/category/addCategory",
        method: "post",
        data: category
    })
}

// 根据id查询
export const getCategory = (id) => {
    return request({
        url: `/category/getCategory/${id}`,
        method: "get"
    })
}

// 修改
export const updateCategory = (category) => {
    return request({
        url: "/category/updateCategory",
        method: "put",
        data: category
    })
}

// 删除
export const deleteCategory = (id) => {
    return request({
        url: `/category/deleteCategory/${id}`,
        method: "delete"
    })
}