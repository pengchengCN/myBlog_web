import axios from 'axios'
import CFG from './cfg'

const BASEURL = `${CFG.BASEURL}`
const instance = axios.create({
  baseURL: BASEURL,
  dataType: 'json',
  timeout: 5000,
  transformResponse: [function (data) {
    data = JSON.parse(data)
    if (data.code !== '200') alert('数据错误！')
    return data
  }]
})

class Dao {
  constructor () {
  }
  apiGet (key) {
    return instance.get(key)
  }
  apiPost (key, body) {
    return instance.post(key, body)
  }
  // 获取菜单
  menuList () {
    return this.apiGet('findMenuAll')
  }
  // 获取全部分类
  categoryList () {
    return this.apiGet('categoryAll')
  }
  // 获取全部标签
  labelList () {
    return this.apiGet('labelAll')
  }
  // 获取全部文章
  articleAll () {
    return this.apiGet('articleAll')
  }
  // 根据分类获取文章
  getCategoryAll (body) {
    return this.apiPost('article/getCategory', body)
  }
}
const aDao = new Dao()
export default aDao