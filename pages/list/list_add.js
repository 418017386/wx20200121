// pages/list/list_add.js
const BASE_URL = "https://www.haiyougis.cn/wechat/"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    password: '',
    role: ''
  },

  formSubmit: function (e) {
    console.log(e)
    var json_e = e.detail.value;
    wx.request({
      url: BASE_URL + 'addUser',
      method: 'POST',
      data: JSON.stringify(json_e),
      header: 'application/json'
    })
    wx.navigateTo({
      url: '/pages/list/list'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    _this.setData({
      _this,
      name: options.name,
      _this,
      password: options.password,
      _this,
      role: options.role
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