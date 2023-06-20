"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  MySearch();
}
const MySearch = () => "../../components/MySearch.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const searchClick = (e) => {
      console.log("searchClick>>>>>", e);
    };
    const addressClick = (e) => {
      console.log("addressClick>>>>>>>>>>", e);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(addressClick),
        b: common_vendor.o(searchClick),
        c: common_vendor.p({
          isAddress: true,
          placeholder: "不要提"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/ypgz/template/templeteP/pages/my/index.vue"]]);
wx.createPage(MiniProgramPage);
