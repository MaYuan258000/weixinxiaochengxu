//index.js
//获取应用实例
const app = getApp()
import wxServie from '../../service/wxServie'
import APppservice from '../../service/APppservice'
var listt=require('./data1')
Page({
  data: {
    goodss:listt,
    modelHidden:true,
    num:1
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
  navEvent(){
    //带有返回的路由
  wx.navigateTo({
    url: '../search/search',
  })
  },
  help(){
    wx.navigateTo({
      url: '/pages/wode/wode',
    })
  },
  onLoad(){

  //  wxServie.login().then((res)=>{
  //     console.log('服务封装的wx',res)
  //     return wxServie.getUserInfo().then(data=>{
  //       data.code=res.code;
  //       return data;
  //     });
  //  }).then((userInfo)=>{
  //    console.log('服务封装的wx', userInfo)
  //    var code = userInfo.code;
  //    var userimg = JSON.parse(userInfo.rawData).avatarUrl;
  //    var nickName = JSON.parse(userInfo.rewData).nickName;
  //   return APppservice.login(code,userimg,nickName)
  //  }).then(res=>{
  //    console.log('1112',res)
  //  }).catch(err=>{
  //    console.log(err)
  //  })

    wxServie.login().then((res) => {
      console.log('服务封装的wx', res);
      return wxServie.getUserInfo().then(data => {
        data.code = res.code;
        return data;
      })
    }).then(userInfo => {
      console.log('服务封装的wx', userInfo);
      var code = userInfo.code;
      var userimg = userInfo.userInfo.avatarUrl;
      var username = userInfo.userInfo.nickName;
      console.log(code);
      return APppservice.login(code, userimg, username)

    }).then(res => {
      console.log('1112', res);

    }).catch(err => {
      console.log(err);
    }) 

  },
  onShareAppMessage:function(){
    return{
      title:"图吧同行",
      path:'/pages/index/index'
    }
  }
})
