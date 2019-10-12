
import Mock from 'mockjs' // 引入mockjs

Mock.mock('/user/login', 'post', { code: 1, data: { id: 123, name: '张三', token: 'hj12e123g7yd12' } })
Mock.mock('/user/logout', 'post', { code: 1, data: { id: 123 } })
