// pages/set/set.js
import Appservice from '../../service/APppservice.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  modelEvent(){
    wx.showModal({
      content: '你确定要解散群组么？',
      success: function (res) {
        if (res.confirm) {
          wx.navigateTo({
            url: '/pages/index/index',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },


  switch1Change: function (e) {
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
  },
  jiesan(){
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    var datavalue = wx.getStorageSync('dataValue');
    var value = datavalue;
    wx.setNavigationBarTitle({
      title: datavalue
    });
    wx.getLocation({

      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        //根据封装的服务，得到一个数据列表
        Appservice.searchSugest(value, latitude, longitude).then((res) => {
          console.log('服务封装', res)
          _this.datares = res.data.pois
          var list = res.data.pois;
          var newList = list.map((item, index) => {
            return item.name
          });
          _this.setData({
            datares: res.data.pois
          })
          var recom = _this.dealItemString(newList, value)
          _this.setData({
            redeaoListt: recom
          })
        })
      }
    })
  },
  dealItemString(list, important) {
    var left, mid, right;
    //使用map方法，返回一个处理后的数据myList
    var myList = list.map((item, index) => {
      var obj = new Object();
      var serIndex = item.indexOf(important)//获取匹配字符串的索引值。
      obj.left = item.substring(0, serIndex)//截取一个居左位置的字符串
      obj.mid = important;//中间字符串，就是当前匹配关键字
      obj.right = item.substring(serIndex + important.length, item.length)//截取右边字符串，匹配关键字
      return obj
    })
    return myList//把得到的处理后的list当做函数的返回值！！！
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})