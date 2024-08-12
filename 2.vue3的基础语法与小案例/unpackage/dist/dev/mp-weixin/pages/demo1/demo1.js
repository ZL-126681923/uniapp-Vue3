"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "demo1",
  setup(__props) {
    let show = common_vendor.ref(true);
    let people = common_vendor.ref([
      { id: "1", name: "张三", like: "吃饭" },
      { id: "2", name: "李四", like: "睡觉" },
      { id: "3", name: "王五", like: "打豆豆" }
    ]);
    function changeimg() {
      show.value = !show.value;
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(($event) => changeimg()),
        b: common_vendor.unref(show)
      }, common_vendor.unref(show) ? {
        c: common_assets._imports_0$1
      } : {
        d: common_assets._imports_1
      }, {
        e: common_assets._imports_2,
        f: common_vendor.f(common_vendor.unref(people), (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.like),
            c: item.id
          };
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-eb3f1cf4"]]);
wx.createPage(MiniProgramPage);
