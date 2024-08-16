"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo2",
  setup(__props) {
    let people = common_vendor.ref({});
    common_vendor.onLoad((e) => {
      console.log(e);
      people.value = e;
    });
    function goBack() {
      common_vendor.index.navigateBack();
    }
    console.log(getCurrentPages());
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(people).name),
        b: common_vendor.t(common_vendor.unref(people).age),
        c: common_vendor.t(common_vendor.unref(people).like),
        d: common_vendor.o(goBack)
      };
    };
  }
};
wx.createPage(_sfc_main);
