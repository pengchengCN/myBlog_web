class Util {
  // 处理文章的分类和标签
  articleList (data, catData, labData) {
    catData = JSON.parse(JSON.stringify(catData))
    labData = JSON.parse(JSON.stringify(labData))
    for (let x in data) {
      let catAry = data[x].category_id
      let labelAry = data[x].label_id
      if(catAry.length !== 0) data[x].category_id = this.categoryMethod(catAry, catData)
      if(labelAry.length !== 0) data[x].label_id = this.labelMethod(labelAry, labData)

      // 处理介绍图片路径问题  introduce_img
      data[x].introduce_img = window.nodeHref + data[x].introduce_img
    }
    return data
  }
  // 分类处理
  categoryMethod (data, catData) {
    let ary = []
    for (let y in data) {
      for (let i = 0; i < catData.length; i++) {
        if(catData[i].category_id === data[y]) {
          ary.push(catData[i])
          break;
        }
      }
    }
    return ary
  }
  // 标签处理
  labelMethod (data, labData) {
    let ary = []
    for (let y in data) {
      for (let i = 0; i < labData.length; i++) {
        if(labData[i].label_id === data[y]) {
          ary.push(labData[i])
          break;
        }
      }
    }
    return ary
  }
  // 获取分类的名称
  categoryName (val, data) {
    for (let i in data) {
      if (data[i].category_id === val) return data[i].name
    }
  }
}

export default new Util()