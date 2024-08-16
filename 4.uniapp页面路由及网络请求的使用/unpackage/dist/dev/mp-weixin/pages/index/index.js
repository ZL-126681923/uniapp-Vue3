"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    function show() {
      common_vendor.index.showToast({
        title: "加载中...",
        // icon:"loading",
        image: "/static/images/pic2.jpg",
        duration: 3e3
        // mask:true //弹窗消失前无法触发别的事件
      });
    }
    function hide() {
      common_vendor.index.hideToast();
    }
    function stop() {
      common_vendor.index.stopPullDownRefresh();
    }
    common_vendor.ref(0);
    common_vendor.onMounted(() => {
      console.log("onMounted(数据渲染完成)");
    });
    common_vendor.onLoad(() => {
      console.log("onLoad(页面加载)");
    });
    common_vendor.onShow(() => {
      console.log("onShow(页面显示)");
    });
    common_vendor.onReachBottom(() => {
      console.log("到底了");
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(show),
        b: common_vendor.o(hide),
        c: common_vendor.o(stop),
        d: common_assets._imports_0,
        e: common_vendor.f(50, (item, k0, i0) => {
          return {
            a: common_vendor.t(item)
          };
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
