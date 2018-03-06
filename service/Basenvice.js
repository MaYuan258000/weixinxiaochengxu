import Promise from '../windor/bluebird.js'
function odd(url,data){
  return new Promise((resolve,reject)=>{
    wx.request({
      method: "GET",
      url: url,
      data:data,
      header: {
        'content-type': 'application/json' // 默认值
        // post请求的话
        // 'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: resolve,
      fail:reject
    })
  })
}

module.exports={
  odd: odd

}
