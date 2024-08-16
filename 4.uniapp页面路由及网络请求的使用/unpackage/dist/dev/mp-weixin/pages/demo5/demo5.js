"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo5",
  setup(__props) {
    function request() {
      common_vendor.index.showLoading();
      common_vendor.index.request({
        url: "https://jsonplaceholder.typicode.com/posts",
        data: {
          id: 5
        },
        header: {
          token: "adfadsfadsf",
          "content-type": "application/x-www-form-urlencoded"
        },
        method: "post",
        timeout: 15e3,
        success: (res) => {
          console.log(res);
        },
        fail: (err) => {
          console.log("超时");
          console.log(err);
        },
        complete: () => {
          common_vendor.index.hideLoading();
        }
      });
    }
    request();
    return (_ctx, _cache) => {
      return {};
    };
  }
};
wx.createPage(_sfc_main);
