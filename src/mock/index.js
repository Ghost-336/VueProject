import Mock from 'mockjs'
import User from './user'

Mock.mock('/login', 'post', () => {
  return User.result
})
