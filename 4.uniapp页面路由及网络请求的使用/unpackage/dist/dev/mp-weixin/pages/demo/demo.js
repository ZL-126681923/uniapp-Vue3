"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo",
  setup(__props) {
    function goDemo2() {
      common_vendor.index.navigateTo({
        url: "/pages/demo2/demo2?name=张三&age=18&like=篮球"
      });
    }
    function goIndex() {
      common_vendor.index.reLaunch({
        url: "/pages/index/index"
      });
    }
    console.log(getCurrentPages());
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(goDemo2),
        b: common_vendor.o(goIndex)
      };
    };
  }
};
wx.createPage(_sfc_main);
