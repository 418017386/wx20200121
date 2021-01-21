// pages/list/list_edit.js
const BASE_URL = "https://www.haiyougis.cn/wechat/"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    name: '',
    password: '',
    role: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = '';
    var _this = this;
    wx.getStorage({
      key: 'key',
      success: function (res) {

        id = res.data
        console.log(id)
        wx.request({
          url: BASE_URL + 'user/' + id,
          method: 'POST',
          success: function (response) {
            _this.setData({
              _this,
              id: response.data.user.id,
              _this,
              name: response.data.user.name,
              _this,
              password: response.data.user.password,
              _this,
              role: response.data.user.role
            })
            console.log(_this.id)
          }
        })
      }
    })
  },
  formSubmit: function (e) {
    console.log(e)
    var a = e.detail.value
    wx.request({
      url: BASE_URL + 'modifyUser',
      method: 'POST',
      data: JSON.stringify(a),
      header: 'application/json'
    })
    wx.navigateTo({
      url: '/pages/list/list'
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