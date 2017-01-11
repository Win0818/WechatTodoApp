// pages/todos/todos.js
let _createTodoItem = (todos, name) => {

  todos.push({
      name,
      completed: false
    });
  return todos;
}
let _toggleTodoItem = (todos, index) => {
  todos[index].completed = !todos[index].completed;
  return todos;
}

let _removeTodoItem = (todos, index) => {
  todos.splice(index, 1);
  return todos;
}
let _calculateTodoCount = (todos) => {
  return todos.filter((todo) =>  !todo.completed).length;
}

let _toggleAll = (todos) => {
  todos.map((todo)=> {
    if (!todo.completed)
      todo.completed = !todo.completed;
      return todo;
  });

  return todos;
}
  
Page({
  data:{
    inputValue: "",
    todoCount: 1,
    todos: [
      {
        name: "基业长青",
        completed: false
      },
      {
        name: "重新定义公司",
        completed: true
      },
      {
        name: "明天开会",
        completed: false
      },
      {
        name: "见客户",
        completed: true
      }
    ]
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
  changeInputValue: function(e) {
    console.log(e.detail.value);
    this.setData({
      inputValue: e.detail.value
    });
  },
  createTodoItem: function() {
    this.setData({
      todos: _createTodoItem(this.data.todos, this.data.inputValue),
      inputValue: '',
      todoCount: _calculateTodoCount(this.data.todos)
    });
  },
  toggleTodoItem: function(e) {
    console.log("toggleTodoItem")
    // console.log(e.currentTarget.dataset.index);
    this.setData({
        todos: _toggleTodoItem(this.data.todos, e.currentTarget.dataset.index),
        todoCount: _calculateTodoCount(this.data.todos)
    });
  },
  removeTodoItem: function(e) {
    console.log("remove todo item");

    this.setData({
      todos: _removeTodoItem(this.data.todos, e.currentTarget.dataset.index),
      todoCount: _calculateTodoCount(this.data.todos)

    });
  },
  toggleAll: function() {
    this.setData({
      todos: _toggleAll(this.data.todos),
      todoCount: _calculateTodoCount(this.data.todos)
    });
  },
  removeAll: function() {
    this.setData({
      todos: []
    });
  },
  bindVIewTap: function() {
    wx.request({
      url: 'https://URL',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }

})