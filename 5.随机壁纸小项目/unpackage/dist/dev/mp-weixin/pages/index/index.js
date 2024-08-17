"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_uni_icons2 + _easycom_uni_load_more2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_load_more)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    let imglist = common_vendor.ref([]);
    network1();
    function onPreview(idx) {
      let urls = imglist.value.map((item) => item.url);
      common_vendor.index.previewImage({
        current: idx,
        urls
      });
    }
    async function network1() {
      try {
        common_vendor.index.showToast({
          title: "加载中",
          icon: "loading"
        });
        let { data: { data } } = await common_vendor.index.request({
          url: "https://tea.qingnian8.com/tools/petShow",
          data: {
            size: 5
          }
        });
        imglist.value = [...imglist.value, ...data];
        common_vendor.index.hideToast();
        common_vendor.index.stopPullDownRefresh();
      } catch (e) {
        console.log(e);
        common_vendor.index.showToast({
          title: e.errMsg,
          duration: 2e3,
          icon: "none"
        });
      }
    }
    async function network2() {
      common_vendor.index.showNavigationBarLoading();
      common_vendor.index.request({
        url: "https://tea.qingnian8.com/tools/taoShow",
        data: {
          size: 5
        }
      }).then((res) => {
        if (res.data.errCode === 0) {
          imglist.value = [...imglist.value, ...res.data.data];
          console.log(res);
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
      network2();
    });
    common_vendor.onPullDownRefresh(() => {
      imglist.value = [];
      network1();
    });
    const onRefresh = function() {
      common_vendor.index.startPullDownRefresh();
    };
    const onTop = () => {
      common_vendor.index.pageScrollTo({
        scrollTop: 0,
        duration: 100
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(network1),
        b: common_vendor.o(network2),
        c: common_vendor.f(common_vendor.unref(imglist), (item, idx, i0) => {
          return common_vendor.e({
            a: item.url,
            b: common_vendor.o(($event) => onPreview(idx)),
            c: item.content
          }, item.content ? {
            d: common_vendor.t(item.content)
          } : item.comment ? {
            f: common_vendor.t(item.comment)
          } : {}, {
            e: item.comment,
            g: item.author
          }, item.author ? {
            h: common_vendor.t(item.author)
          } : item.shop ? {
            j: common_vendor.t(item.shop)
          } : {}, {
            i: item.shop
          });
        }),
        d: common_vendor.p({
          type: "refreshempty",
          size: "30"
        }),
        e: common_vendor.o(onRefresh),
        f: common_vendor.p({
          type: "arrow-up",
          size: "30"
        }),
        g: common_vendor.o(onTop),
        h: common_vendor.p({
          status: "loading"
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
