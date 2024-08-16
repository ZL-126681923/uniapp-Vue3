"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "classify",
  setup(__props) {
    common_vendor.index.showNavigationBarLoading();
    setTimeout(() => {
      common_vendor.index.setNavigationBarTitle({
        title: "动态标题"
      });
      common_vendor.index.hideNavigationBarLoading();
    }, 2e3);
    function remove() {
      common_vendor.index.showModal({
        title: "是否删除？",
        content: "删除后将自动关机",
        showCancel: false,
        cancelText: "No",
        confirmText: "Yes",
        cancelColor: "#999",
        confirmColor: "#f00",
        editable: true,
        success: (res) => {
          if (res.confirm)
            common_vendor.index.showToast({ title: "已经获取你电脑的所有数据!" });
          console.log(res);
        }
      });
    }
    let arrs = ["高中生", "大专生", "本科生", "研究生"];
    let schoolpeo = common_vendor.ref("小卡拉米");
    function select() {
      common_vendor.index.showActionSheet({
        title: "请选择",
        itemList: arrs,
        success: (res) => {
          console.log(res);
          schoolpeo.value = arrs[res.tapIndex];
        }
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(remove),
        b: common_vendor.o(select),
        c: common_vendor.t(common_vendor.unref(schoolpeo))
      };
    };
  }
};
wx.createPage(_sfc_main);
