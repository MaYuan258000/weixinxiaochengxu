//index.js
//获取应用实例
const app = getApp()
var listt=require('./data1')
Page({
  data: {
    goodss:listt,
    modelHidden:true
  },
  // 盒子点击事件，点击后弹出模态框
  modelEvent(){
   this.setData({
     modelHidden: false
   })
  },
  //改变事件，当我点击确认后模态框消失
  modalChange(){
   this.setData({
     modelHidden:true
   })
  },
  //当我点击确认后模态框显示
  modalCancel() {
    this.setData({
      modelHidden: true
    })
  },
  onLoad(){

  }
})
