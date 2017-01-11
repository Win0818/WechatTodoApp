//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [       'http://m.qianft.com/FileUpLoad/Banner/2016/12/fd7926bc-f274-4bd6-8ba9-f2871c30c768.jpg',  
    'http://m.qianft.com/FileUpLoad/Banner/2016/12/3c2ed3f4-c084-43ef-9625-93d5f31fd7df.jpg', 
      'http://m.qianft.com/FileUpLoad/Banner/2017/1/febccf1d-b2cf-4a6b-be03-657972353b36.jpg',
      'http://m.qianft.com/FileUpLoad/Banner/38b8a747-8308-405f-a3f3-c04e0eea4a79.jpg'
    ],  
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
