var data=getApp()
var goodsData = require('./data')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: goodsData,
    historyList:[],
    inputValue:'',
    searchinput :''
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
    var value=e.detail.value;
    this.setData({
      inputValue:value
    })
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
    // (!array.includes(input))
    input && tag && array.push(input);
    wx.setStorageSync('history', array);
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