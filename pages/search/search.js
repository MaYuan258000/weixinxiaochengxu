var data=getApp()
import Appservice from '../../service/APppservice.js'
var goodsData = require('./data')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: goodsData,
    historyList:[],
    inputValue:'',
    searchinput :'',
    redeaoList:[]
  },
  clearHistory(){
   this.setData({
     historyList:[]
   });
   //移除清除缓存
   wx.removeStorageSync('history')
  },
  //input事件来获取值
  inputEvent(e){
    var _this = this;
    var value=e.detail.value;
    this.setData({
      inputValue:value
    });
   //获取当前为经纬度
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
         //根据封装的服务，得到一个数据列表
        Appservice.searchSugest(value, latitude, longitude).then((res)=>{
          console.log('服务封装',res)
          var list = res.data.pois;
          var newList = list.map((item, index) => {
            return item.name
          });
          var recom = _this.dealItemString(newList, value)
          _this.setData({
            redeaoList: recom
          })
        })
      }
    })
  },
 /**
  * 函数：dealItemString(list,important)--list需要处理的列表,import匹配关键字
  * 作用：返回一个处理后的数组，把字符串数组转化为对象数组。
  */
  //文字高亮显示
  dealItemString(list,important){
    var left,mid,right;
    //使用map方法，返回一个处理后的数据myList
    var myList= list.map((item,index)=>{
      var obj=new Object();
      var serIndex = item.indexOf(important)//获取匹配字符串的索引值。
      obj.left = item.substring(0, serIndex)//截取一个居左位置的字符串
      obj.mid = important;//中间字符串，就是当前匹配关键字
      obj.right = item.substring(serIndex + important.length,item.length)//截取右边字符串，匹配关键字
      return obj
    })
    return myList//把得到的处理后的list当做函数的返回值！！！
  },
  //搜索存储数据
  searchEvent(){
    //获取input框的值
    var input = this.data.inputValue;
    //重新赋值 得到已经存储缓存中的数组
    var array = wx.getStorageSync('history');
    // if (array){
    //   input && array.push(input);
    // }else{
    //   //如果不存在，我在push进去
    //   array=[];
    //   //判断input是不是存在用&&
    
    // }
    //第二种方式
    // if(!array){ 
    //   array=[];
    // }
    //第三种方式 如果数组不存在，就给他一个新的数组[]
    !array&&(array=[]);
    //在input不为空的情况下并且input里面的值没有在数组中重复在进行push
    //用js的方式
    var tag=true;
    for(var i=0;i<array.length;i++){
      if(array[i]==input){
        tag=false;
      }
    }
    if(input){
      wx.navigateTo({
        url: '/pages/searchResult/searchResult'
        // url: '/pages/searchResult/searchResult?des=${input}'
      }) 
      wx.removeStorage({
        key: 'dataValue',
      })
      wx.setStorage({
        key: 'dataValue',
        data: input
      })
    }else{
      wx.showModal({
        title: '提示',
        content: '请输入搜索内容',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }

    // (!array.includes(input))
    input && tag && array.push(input) && dealArray(array);
    wx.setStorageSync('history', array);
    //显示10条数据
    function dealArray(array){
     if(array.length>10){
       array.shift()
     }
    }

    this.setData({
      searchinput: '',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var list=wx.getStorageSync('history');
    !list && (list=[])
    //原生倒序。
     var array=[];
    // for (var i = list.length-1;i>=0;i--){
    //  array.push(list[i])
    // }
    //头部添加倒序
    // for (var i=0;i<list.length;i++){
    //  array.unshift(list[i])
    // }
   //第三种在数组后面直接reverse()来进行倒序
   // list.reverse()
    this.setData({
      historyList: list.reverse()
    })
  },
  listEvent:function(e){
    // console.log(e.currentTarget.dataset.value);
    var input = e.currentTarget.dataset.value
    if (input){
      wx.navigateTo({
        url: '/pages/searchResult/searchResult'
        // url: '/pages/searchResult/searchResult?des=${input}'
      })
      wx.removeStorage({
        key: 'dataValue',
      })
      wx.setStorage({
        key: 'dataValue',
        data: input,
      })
    }
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