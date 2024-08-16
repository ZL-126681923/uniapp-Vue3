"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_segmented_control2 = common_vendor.resolveComponent("uni-segmented-control");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_uni_segmented_control2 + _easycom_uni_icons2 + _easycom_uni_load_more2)();
}
const _easycom_uni_segmented_control = () => "../../uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_uni_segmented_control + _easycom_uni_icons + _easycom_uni_load_more)();
}
const _sfc_main = {
  __name: "requestDemo",
  setup(__props) {
    const pets = common_vendor.ref([]);
    const current = common_vendor.ref(0);
    const classify = [{ key: "all", value: "全部" }, { key: "dog", value: "狗狗" }, { key: "cat", value: "猫猫" }];
    const values = common_vendor.computed(() => classify.map((item) => item.value));
    const onClickItem = (e) => {
      current.value = e.currentIndex;
      pets.value = [];
      network();
    };
    const onPreview = function(index) {
      let urls = pets.value.map((item) => item.url);
      common_vendor.index.previewImage({
        current: index,
        urls
      });
    };
    const onRefresh = function() {
      common_vendor.index.startPullDownRefresh();
    };
    const onTop = () => {
      common_vendor.index.pageScrollTo({
        scrollTop: 0,
        duration: 100
      });
    };
    function network() {
      common_vendor.index.showNavigationBarLoading();
      common_vendor.index.request({
        url: "https://tea.qingnian8.com/tools/petShow",
        data: {
          size: 5,
          type: classify[current.value].key
        },
        header: {
          "access-key": "xxm123321@#"
        }
      }).then((res) => {
        if (res.data.errCode === 0) {
          pets.value = [...pets.value, ...res.data.data];
          console.log(pets.value);
        } else if (res.data.errCode === 400) {
          common_vendor.index.showToast({
            title: res.data.errMsg,
            icon: "none"
          });
        }
      }).catch((err) => {
        common_vendor.index.showToast({
          title: "请求有误，请重新刷新",
          icon: "none"
        });
      }).finally(() => {
        common_vendor.index.hideNavigationBarLoading();
        common_vendor.index.stopPullDownRefresh();
      });
    }
    common_vendor.onReachBottom(() => {
      network();
    });
    common_vendor.onPullDownRefresh(() => {
      pets.value = [];
      current.value = 0;
      network();
    });
    network();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onClickItem),
        b: common_vendor.p({
          current: current.value,
          values: values.value,
          styleType: "button",
          activeColor: "#2B9939"
        }),
        c: common_vendor.f(pets.value, (item, index, i0) => {
          return {
            a: item.url,
            b: common_vendor.o(($event) => onPreview(index), item._id),
            c: common_vendor.t(item.content),
            d: common_vendor.t(item.author),
            e: item._id
          };
        }),
        d: common_vendor.p({
          type: "refreshempty",
          size: "26",
          color: "#888"
        }),
        e: common_vendor.o(onRefresh),
        f: common_vendor.p({
          type: "arrow-up",
          size: "26",
          color: "#888"
        }),
        g: common_vendor.o(onTop),
        h: common_vendor.p({
          status: "loading"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e25b1ed9"]]);
wx.createPage(MiniProgramPage);
