Page({

  /**
   * 页面的初始数据
   */
  data: {
    showSearch: false,  // 控制搜索框的显示隐藏
    // 首页瀑布流数据
    waterfallList: [
      {
        userName: "111", // 用户名
        avatar: "", // 用户头像
        detailInfo: "12", // 列表返回的简略信息 
        title: "222", // 标题
        contextView: "3333", // 内容预览
        like: 10, // 喜欢数
        comment: 20, // 评论数
        mark: 30 // 标记数
      },
      {
        userName: "111", // 用户名
        avatar: "", // 用户头像
        detailInfo: "12", // 列表返回的简略信息 
        title: "222", // 标题
        contextView: "3333", // 内容预览
        like: 10, // 喜欢数
        comment: 20, // 评论数
        mark: 30, // 标记数
        specialMark: "职", // 文章特殊标记
      },
      {
        userName: "111", // 用户名
        avatar: "", // 用户头像
        detailInfo: "12", // 列表返回的简略信息 
        title: "222", // 标题
        contextView: "3333", // 内容预览
        like: 10, // 喜欢数
        comment: 20, // 评论数
        mark: 30, // 标记数
        specialMark: "留", // 文章特殊标记
      },
      {
        userName: "111", // 用户名
        avatar: "", // 用户头像
        detailInfo: "12", // 列表返回的简略信息 
        title: "222", // 标题
        contextView: "3333", // 内容预览
        like: 10, // 喜欢数
        comment: 20, // 评论数
        mark: 30, // 标记数
        specialMark: "考", // 文章特殊标记
      },
      {
        userName: "111", // 用户名
        avatar: "", // 用户头像
        detailInfo: "12", // 列表返回的简略信息 
        title: "222", // 标题
        contextView: "3333", // 内容预览
        like: 10, // 喜欢数
        comment: 20, // 评论数
        mark: 30 // 标记数
      },
      {
        userName: "111", // 用户名
        avatar: "", // 用户头像
        detailInfo: "12", // 列表返回的简略信息 
        title: "222", // 标题
        contextView: "3333", // 内容预览
        like: 10, // 喜欢数
        comment: 20, // 评论数
        mark: 30 // 标记数
      },
      {
        userName: "111", // 用户名
        avatar: "", // 用户头像
        detailInfo: "12", // 列表返回的简略信息 
        title: "222", // 标题
        contextView: "3333", // 内容预览
        like: 10, // 喜欢数
        comment: 20, // 评论数
        mark: 30 // 标记数
      },
      {
        userName: "111", // 用户名
        avatar: "", // 用户头像
        detailInfo: "12", // 列表返回的简略信息 
        title: "222", // 标题
        contextView: "3333", // 内容预览
        like: 10, // 喜欢数
        comment: 20, // 评论数
        mark: 30 // 标记数
      },
      {
        userName: "111", // 用户名
        avatar: "", // 用户头像
        detailInfo: "12", // 列表返回的简略信息 
        title: "222", // 标题
        contextView: "3333", // 内容预览
        like: 10, // 喜欢数
        comment: 20, // 评论数
        mark: 30 // 标记数
      },
      {
        userName: "111", // 用户名
        avatar: "", // 用户头像
        detailInfo: "12", // 列表返回的简略信息 
        title: "222", // 标题
        contextView: "3333", // 内容预览
        like: 10, // 喜欢数
        comment: 20, // 评论数
        mark: 30 // 标记数
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage(opts): WechatMiniprogram.Page.ICustomShareContent {
    console.log(opts.target)
    return {}
  },

  // 点击搜索按钮隐藏搜索图标，显示搜索框
  clickToSwitch() {
    this.setData({
      showSearch: true
    })
  }
})