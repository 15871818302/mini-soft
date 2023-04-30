Page({

  /**
   * 页面的初始数据
   */
  data: {
    exploreList: [
      {
        imgSrc: "../../images/qiandao.png",
        title: "每日签到",
        messageDetail: "连续签到积分多多",
      },
      {
        imgSrc: "../../images/dingweidaka.png",
        title: "活动打卡",
        messageDetail: "德育分upup",
      },
      {
        imgSrc: "../../images/jingyan.png",
        title: "经验分享",
        messageDetail: "前辈的升级经验包",
      },
      {
        imgSrc: "../../images/tuandui.png",
        title: "团队摇人",
        messageDetail: "比赛活动组队大厅",
      },
      {
        imgSrc: "../../images/icon_xueyebaogao.png",
        title: "学业辅导",
        messageDetail: "更少时间，更高效率",
      },
      {
        imgSrc: "../../images/zuzhi.png",
        title: "寻找组织",
        messageDetail: "哪儿都有国院人",
      },
    ]
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
  }
})