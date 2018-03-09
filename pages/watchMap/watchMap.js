// pages/watchMap/watchMap.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      { "item":'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520400202305&di=97cfc926f22edc0bcc1a4c5901db6ee3&imgtype=0&src=http%3A%2F%2Fww1.sinaimg.cn%2Fbmiddle%2F791e61e5jw1esazfaquk6j21hc0zkgxx.jpg'},
      {
        'item':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520400217628&di=f064d381c7ba2b73c1627044deb8d018&imgtype=0&src=http%3A%2F%2Fimg0.pcgames.com.cn%2Fpcgames%2F1503%2F11%2F4926524_153_150311161042_3_thumb.jpg'
      }

    ],
    latitude:'',
    longitude:'',
  markers:[{
    id:0,
    latitude: '34.825508',
    longitude: '115.542328',
    iconPath:'/images/biaoji.png',
    content:'曹县',
    width:25,
    height:25
  },
    {
      id: 2,
      latitude: '35',
      longitude: '116',
      iconPath: '/images/biaoji.png',
      width: 25,
      height: 25
    }
  
  ],
  scale:10,
  poiList:[]
  },
  markersEvent:function(e){
  console.log(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  var _this=this;
  wx.getLocation({
    success: function(res) {
      var latitude = res.latitude
      var longitude = res.longitude
      var speed = res.speed
      var accuracy = res.accuracy
      _this.setData({
        latitude,
        longitude
      })
    },
  })
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