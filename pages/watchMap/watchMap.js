// pages/watchMap/watchMap.js
import Appservice from '../../service/APppservice.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: '',
    longitude: '',
    markers: [{
      city: '菏泽',
      id: 0,
      latitude: '34.825508',
      longitude: '115.542328',
      iconPath: '/images/biaoji.png',
      width: 25,
      height: 25
    },
    {
      city: '定陶',
      id: 2,
      latitude: '33',
      longitude: '114',
      iconPath: '/images/ditu.png',
      width: 25,
      height: 25
    },
    {
      city: '济南',
      id: 3,
      latitude: '32',
      longitude: '113',
      iconPath: '/images/biaoji.png',
      width: 25,
      height: 25
    },
    {
      city: '青岛',
      id: 4,
      latitude: '31',
      longitude: '112',
      iconPath: '/images/ditu.png',
      width: 25,
      height: 25
    },
    {
      city: '五台山',
      id: 5,
      latitude: '30',
      longitude: '111',
      iconPath: '/images/biaoji.png',
      width: 25,
      height: 25
    }

    ],
    currentIndex: 0,
    scale: 10,
    poiList: []
  },
  markersEvent: function (e) {
    console.log(e)
    var index = e.markerId
    this.setData({
      currenIndex: index
    })
  },
  dealMarkers: function () {
    var markers = this.data.markers;
    var index = this.data.currentIndex;
    var arr = markers.map((item, indeX) => {
      item.latitude = Number(item.latitude);
      item.longitude = Number(item.longitude);

      if (indeX != index) {
        item.iconPath = '/images/biaoji' + (indeX + 1) + '.png'
      } else {
        item.iconPath = '/images/biaoji' + (indeX + 1) + '.png'
        this.setData({
          latitude: item.latitude,
          longitude: item.longitude
        })
      }
      return item;
    });
    this.setData({
      markers: arr
    })
  },
  zhong() {
    wx.navigateTo({
      url: '/pages/zhongdian/zhongdian',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      value: JSON.parse(options.value)
    })
    var _this = this;
    wx.getLocation({
      success: function (res) {
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
    
    var _this = this;
    var datavalue = wx.getStorageSync('dataValue');
    var value = datavalue;
    wx.setNavigationBarTitle({
      title: this.data.value.name
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
            redeaoList: recom
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