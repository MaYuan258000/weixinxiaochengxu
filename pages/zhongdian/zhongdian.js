// pages/zhongdian/zhongdian.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: '',
    longitude: '',
    controls: [
      {
      id: 1,
      iconPath: '/images/miao.png',
      position: {
        left: 40,
        top: 230 - 50,
        width: 30,
        height: 30,
      },
      clickable: true
    },
      {
        id: 1,
        iconPath: '/images/guoqi.png',
        position: {
          left: 40,
          top: 290 - 50,
          width: 30,
          height: 30,
        },
        clickable: true
      }
    
    ],markers: [{
      iconPath: '/images/biaoji.png',
      id: 0,
      latitude: '34.825508',
      longitude: '115.542328',
      width: 50,
      height: 50
    }],
    
  },
  controlsEvent: function (e) {
    console.log(e);
    var id = e.controlId;
    if (id == 1) {
      this.setData({
        markers: this.data.markers
      })
    }
  },
  setEvent: function () {
    wx.navigateTo({
      url: '/pages/set/set',
    })
  },
  setcheck:function(){
    wx.navigateTo({
      url: '/pages/chat/chat',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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