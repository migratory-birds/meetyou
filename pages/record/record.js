var app = getApp()
Page({
  data:{
    user:'user'
  },
  onLoad:function(options){
    console.log('---index page is onLoad---');
  },
  onShow:function(){
    console.log('---index page is onShow---');
  },
  onReady:function(){
    console.log('---index page is  onReady---');
  },
  onHide:function(){
    console.log('---index page is onHide---');
  },
  onUnload:function(){
    console.log('---index page is onUnload---');

  }
})