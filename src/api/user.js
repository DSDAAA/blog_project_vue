import request from '../utils/axios.js'

// 编写示例
export const test = (data) => {
    return request({
        url: `/user/test`,
        method: 'post',
        data: data
    })
}