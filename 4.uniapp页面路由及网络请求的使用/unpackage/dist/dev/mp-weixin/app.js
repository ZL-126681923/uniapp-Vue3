"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/user/user.js";
  "./pages/classify/classify.js";
  "./pages/demo/demo.js";
  "./pages/demo2/demo2.js";
  "./pages/demo3/demo3.js";
  "./pages/demo4/demo4.js";
  "./pages/demo5/demo5.js";
  "./pages/requestDemo/requestDemo.js";
}
const _sfc_main = {
  // uni.setTabBarBadge:为 tabBar 某一项的右上角添加文本。
  // uni.showTabBarRedDot:显示 tabBar 某一项的右上角的红点。
  onLaunch: function() {
    console.log("App 初始化");
    common_vendor.index.setTabBarBadge({
      index: 2,
      text: "1"
    }), common_vendor.index.showTabBarRedDot({
      index: 0
    });
  },
  onShow: function() {
    console.log("App 展示");
  },
  onHide: function() {
    console.log("App 隐藏");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
