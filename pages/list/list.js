// pages/list/list.js
const BASE_URL = "https://www.haiyougis.cn/wechat/"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userList: [

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this = this;
    // 请求数据
    wx.request({
      url: BASE_URL + 'users',
      method: 'POST',
      data: {},
      header: {
        'content-type': 'json' // 默认值
      },
      success: function (res) {
        _this.setData({
          _this,
          userList: res.data.data
        })
      }
    })
  },
  add: function (options) {
    wx.navigateTo({
      url: '/pages/list/list_add',
    })
  },
  detail: function (options) {
    var id = options.currentTarget.dataset.item.id;
    wx.setStorage({
      data: id,
      key: 'key'
    })
    wx.navigateTo({
      url: '/pages/list/list_detail',
    })
  },
  edit: function (options) {
    var id = options.currentTarget.dataset.item.id;
    wx.setStorage({
      data: id,
      key: 'key'
    })
    wx.navigateTo({
      url: '/pages/list/list_edit',
    })
  },
  delete: function (options) {
    //var id = options.currentTarget.dataset.item.id;
    console.log(options)
    var _this = this;
    console.log(_this)
    wx.showModal({
      cancelColor: 'cancelColor',
      content: '是否删除',
      success: function (res) {
        if (res.confirm) {
          console.log(options)
          wx.request({
            url: BASE_URL + 'deleteUser/' + options.currentTarget.dataset.item.id,
            method: 'POST',
            header: 'application/json'
          })
          _this.onLoad();
        } else {
          console.log("用户点击了取消")
        }
      }
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