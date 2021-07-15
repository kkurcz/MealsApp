// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    restaurants: [{
      id: 1,
      address: "101 Chengdu City",
      name: "Burger Bears",
      description: "Beautiful burgers by the beach",
      photo: "https://source.unsplash.com/random/800x600",
    },
    {
      id: 2,
      address: "102 Chengdu City",
      name: "Sweetest Bake",
      description: "Sweetest bakery with suspicously good bakes",
      photo: "https://source.unsplash.com/random/800x600",
    },
    {
      id: 3,
      address: "103 Chengdu City",
      name: "Coco Coffe",
      description: "Chocolatey coco coffee by the coast",
      photo: "https://source.unsplash.com/random/800x600",
    }]
  }
})
