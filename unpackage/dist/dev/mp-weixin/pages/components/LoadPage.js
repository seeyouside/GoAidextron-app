"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "LoadPage",
  setup(__props) {
    setTimeout(() => {
      common_vendor.index.switchTab({
        url: "../index/index",
        fail: (res) => {
          console.log(res);
        }
      });
    }, 3e3);
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-70b07b7c"], ["__file", "D:/ypgz/template/templeteP/pages/components/LoadPage.vue"]]);
wx.createPage(MiniProgramPage);
