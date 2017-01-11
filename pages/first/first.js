// pages/first/first.js
Page({
  data:{
    text: "这是Text的内容",
    btnText: "这是按钮的内容",
    show: false,
    news: ['aaa', 'bbb', 'ccc', "dddddd"]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },

   btnClick: function () {
    console.log("按钮被点击了");
    var isShow = this.data.show;
    console.log("is show: " + isShow);

     var newsData = this.data.news;
     newsData.shift();
    this.setData({text: "这是新的内容vvvvvvv", show: !isShow, news: newsData});

  }
})