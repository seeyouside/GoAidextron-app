"use strict";
const common_vendor = require("../../../common/vendor.js");
const store_index = require("../../../store/index.js");
require("../../../api/login.js");
require("../../../common/http.js");
const _sfc_main = {
  data() {
    return {
      // 复选框数据
      checkboxValue1: []
    };
  },
  computed: {
    ...common_vendor.mapState(store_index.GlobalStore, ["token"])
  },
  methods: {
    ...common_vendor.mapActions(store_index.GlobalStore, ["login"]),
    async handleSubmit() {
      const that = this;
      const params = {
        password: this.form.password,
        mobile: this.form.mobile
      };
      await that.login(params);
    },
    // 复选框切换
    checkboxChange(n) {
      console.log("change", n);
    }
  },
  onShow() {
  }
};
if (!Array) {
  const _easycom_u_checkbox2 = common_vendor.resolveComponent("u-checkbox");
  const _easycom_u_checkbox_group2 = common_vendor.resolveComponent("u-checkbox-group");
  (_easycom_u_checkbox2 + _easycom_u_checkbox_group2)();
}
const _easycom_u_checkbox = () => "../../../node-modules/uview-plus/components/u-checkbox/u-checkbox.js";
const _easycom_u_checkbox_group = () => "../../../node-modules/uview-plus/components/u-checkbox-group/u-checkbox-group.js";
if (!Math) {
  (_easycom_u_checkbox + _easycom_u_checkbox_group)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      shape: "circle",
      size: "26rpx"
    }),
    b: common_vendor.o($options.checkboxChange),
    c: common_vendor.o(($event) => $data.checkboxValue1 = $event),
    d: common_vendor.p({
      placement: "column",
      modelValue: $data.checkboxValue1
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f9c7640e"], ["__file", "D:/ypgz/template/templatevuePlus/pages/components/login/index.vue"]]);
wx.createPage(MiniProgramPage);
