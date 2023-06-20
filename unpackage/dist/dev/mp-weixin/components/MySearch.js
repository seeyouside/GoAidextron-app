"use strict";
const common_vendor = require("../common/vendor.js");
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_search2 = common_vendor.resolveComponent("u-search");
  (_easycom_u_icon2 + _easycom_u_search2)();
}
const _easycom_u_icon = () => "../node-modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_u_search = () => "../node-modules/uview-plus/components/u-search/u-search.js";
if (!Math) {
  (_easycom_u_icon + _easycom_u_search)();
}
const _sfc_main = {
  __name: "MySearch",
  props: {
    isAddress: {
      type: Boolean,
      required: true
    },
    placeholder: {
      type: String,
      default: "搜索"
    }
  },
  emits: ["searchClick", "addressClick"],
  setup(__props, { emit }) {
    const searchClick = () => {
      emit("searchClick", true);
    };
    const addressClick = () => {
      emit("addressClick", true);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          name: "map",
          color: "#000",
          size: "16"
        }),
        b: common_vendor.o(addressClick),
        c: common_vendor.p({
          placeholder: __props.placeholder,
          disabled: "true",
          height: "68rpx",
          showAction: false
        }),
        d: common_vendor.o(searchClick)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e50ea3f3"], ["__file", "D:/ypgz/template/templeteP/components/MySearch.vue"]]);
wx.createComponent(Component);
