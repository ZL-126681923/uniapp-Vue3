"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo4",
  setup(__props) {
    let arrs = common_vendor.ref([]);
    async function request() {
      let res = await common_vendor.index.request({
        url: "https://jsonplaceholder.typicode.com/posts"
      });
      arrs.value = res.data;
    }
    request();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(arrs), (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.t(item.body),
            c: item.id
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a524b516"]]);
wx.createPage(MiniProgramPage);
