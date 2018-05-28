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
  // 获取菜单
  menuList () {
    return this.apiGet('findMenuAll')
  }
}
const aDao = new Dao()
export default aDao