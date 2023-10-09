import request from '../utils/axios.js'

// 登录
export const login = (user) => {
    return request({
        url: `/user/login`,
        method: 'post',
        data: user
    })
}

// 注册
export const register = (user) => {
    return request({
        url: "/user/register",
        method: "post",
        data: user
    })
}

// 根据id查询
export const getUser = (id) => {
    return request({
        url: `/user/getUser/${id}`,
        method: "get"
    })
}

// 修改
export const updateUser = (user) => {
    return request({
        url: "/user/updateUser",
        method: "put",
        data: user
    })
}