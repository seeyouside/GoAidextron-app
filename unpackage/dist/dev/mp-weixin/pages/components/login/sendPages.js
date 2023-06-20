"use strict";
const common_vendor = require("../../../common/vendor.js");
const store_index = require("../../../store/index.js");
const api_login = require("../../../api/login.js");
require("../../../common/http.js");
if (!Array) {
  const _easycom_u_code_input2 = common_vendor.resolveComponent("u-code-input");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  (_easycom_u_code_input2 + _easycom_u_button2)();
}
const _easycom_u_code_input = () => "../../../node-modules/uview-plus/components/u-code-input/u-code-input.js";
const _easycom_u_button = () => "../../../node-modules/uview-plus/components/u-button/u-button.js";
if (!Math) {
  (_easycom_u_code_input + _easycom_u_button)();
}
const _sfc_main = {
  __name: "sendPages",
  setup(__props) {
    store_index.GlobalStore();
    common_vendor.onLoad(async (e) => {
      if (e.code) {
        const res = await api_login.code({
          mobile: e.code,
          scene: "YZMDL"
        });
        console.log(res);
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => _ctx.value3 = $event),
        b: common_vendor.p({
          size: "45",
          maxlength: 6,
          modelValue: _ctx.value3
        }),
        c: common_vendor.p({
          shape: "circle",
          text: "登陆",
          color: "linear-gradient(to right, pink, skyBlue)",
          size: "large"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b0e224f3"], ["__file", "D:/ypgz/template/templeteP/pages/components/login/sendPages.vue"]]);
wx.createPage(MiniProgramPage);
