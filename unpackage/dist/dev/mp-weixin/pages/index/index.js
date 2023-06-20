"use strict";
const common_vendor = require("../../common/vendor.js");
const common_common = require("../../common/common.js");
const store_index = require("../../store/index.js");
require("../../common/qqmap-wx-jssdk.min.js");
require("../../api/login.js");
require("../../common/http.js");
if (!Math) {
  (MyHeader + MyUploadImg)();
}
const MyHeader = () => "../../components/MyHeader.js";
const MyUploadImg = () => "../../components/MyUploadImg.js";
const _sfc_main = {
  __name: "index",
  setup(__props, { expose }) {
    function login() {
      common_vendor.index.navigateTo({
        url: "../components/login/index"
      });
    }
    const store = store_index.GlobalStore();
    common_vendor.watch(address, (count) => {
      console.log(`count is: ${count}`);
    });
    const address = common_vendor.computed(() => {
      return store.address;
    });
    expose({
      getMapLocation: common_common.getMapLocation,
      login
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          leftTitle: "首页"
        }),
        b: common_vendor.p({
          numberData: 9
        }),
        c: common_vendor.o(login)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/ypgz/template/templeteP/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
