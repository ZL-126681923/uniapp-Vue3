"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "user",
  setup(__props) {
    common_vendor.onShow(() => {
      common_vendor.index.hideTabBarRedDot({
        index: 2
      });
    });
    common_vendor.index.showLoading({
      title: "加载中..."
      // mask:true 有mask啥操作都做不了
    });
    setTimeout(() => {
      common_vendor.index.hideLoading();
    }, 2e3);
    return (_ctx, _cache) => {
      return {};
    };
  }
};
wx.createPage(_sfc_main);
