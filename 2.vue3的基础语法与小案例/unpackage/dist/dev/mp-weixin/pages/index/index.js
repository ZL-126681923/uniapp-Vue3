"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const title = "你好呀";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    let num1 = common_vendor.ref(1);
    let people = common_vendor.reactive({ name: "张三", age: "16" });
    let size = common_vendor.ref(12);
    let color = common_vendor.ref("#ccc");
    let lod = common_vendor.ref(false);
    console.log(num1);
    console.log(people);
    function change() {
      size.value += 2;
      color.value = "#" + String(Math.random()).substring(3, 9);
    }
    function changeloding(e) {
      lod.value = e.detail.value;
    }
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.t(title),
        c: common_vendor.t(Date.now()),
        d: common_vendor.t(Math.floor(Math.random() * 10)),
        e: common_vendor.o(change),
        f: common_vendor.unref(color),
        g: common_vendor.unref(size) + "px",
        h: common_vendor.o(changeloding),
        i: common_vendor.unref(lod)
      };
    };
  }
};
wx.createPage(_sfc_main);
