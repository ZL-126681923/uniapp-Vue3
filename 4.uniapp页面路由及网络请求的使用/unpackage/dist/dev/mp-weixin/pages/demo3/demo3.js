"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo3",
  setup(__props) {
    common_vendor.index.setStorageSync("name", "李四");
    common_vendor.index.setStorageSync("arrs", [1, 2, 3]);
    let myName = common_vendor.index.getStorageSync("name");
    console.log(myName);
    const res = common_vendor.index.getStorageInfoSync();
    console.log(res);
    function remove() {
      common_vendor.index.removeStorageSync("name");
    }
    function clear() {
      common_vendor.index.clearStorageSync();
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(remove),
        b: common_vendor.o(clear)
      };
    };
  }
};
wx.createPage(_sfc_main);
