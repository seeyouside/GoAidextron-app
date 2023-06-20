"use strict";
const common_vendor = require("../../../common/vendor.js");
const store_index = require("../../../store/index.js");
require("../../../api/login.js");
require("../../../common/http.js");
const _sfc_main = {
  data() {
    return {
      // 复选框数据
      checkData: false,
      code: "13042774519"
    };
  },
  computed: {
    ...common_vendor.mapState(store_index.GlobalStore, ["token"])
  },
  methods: {
    ...common_vendor.mapActions(store_index.GlobalStore, ["loginWx"]),
    // 验证手机号 传递手机号并跳转短信验证码界面
    handleSubmit() {
      if (!this.checkData) {
        common_vendor.index.showToast({
          title: "请先阅读协议",
          icon: "error"
        });
        return;
      }
      const that = this;
      const phoneRegex = /^1[3-9]\d{9}$/;
      if (phoneRegex.test(that.code)) {
        common_vendor.index.navigateTo({
          url: "./sendPages?code=" + that.code
        });
      } else {
        common_vendor.index.showToast({
          title: "手机号有误！"
        });
      }
    },
    // 复选框切换
    checkboxChange(n) {
      this.checkData = !this.checkData;
      console.log(this.checkData);
    },
    // 微信登陆
    loginwx() {
      let that = this;
      common_vendor.index.login({
        provider: "weixin",
        success: async (LoginInfo) => {
          console.log("login", LoginInfo);
          that.loginWx({
            code: LoginInfo.code
          });
        }
      });
    }
  },
  onShow() {
  }
};
if (!Array) {
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u_checkbox2 = common_vendor.resolveComponent("u-checkbox");
  const _easycom_u_checkbox_group2 = common_vendor.resolveComponent("u-checkbox-group");
  (_easycom_u_button2 + _easycom_u_checkbox2 + _easycom_u_checkbox_group2)();
}
const _easycom_u_button = () => "../../../node-modules/uview-plus/components/u-button/u-button.js";
const _easycom_u_checkbox = () => "../../../node-modules/uview-plus/components/u-checkbox/u-checkbox.js";
const _easycom_u_checkbox_group = () => "../../../node-modules/uview-plus/components/u-checkbox-group/u-checkbox-group.js";
if (!Math) {
  (_easycom_u_button + _easycom_u_checkbox + _easycom_u_checkbox_group)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.code,
    b: common_vendor.o(($event) => $data.code = $event.detail.value),
    c: common_vendor.p({
      color: "#4dbaaa",
      shape: "circle",
      type: "primary",
      text: "同意，获取验证码"
    }),
    d: common_vendor.o((...args) => $options.handleSubmit && $options.handleSubmit(...args)),
    e: common_vendor.p({
      shape: "circle",
      size: "26rpx"
    }),
    f: common_vendor.o($options.checkboxChange),
    g: common_vendor.p({
      placement: "column"
    }),
    h: common_vendor.o((...args) => $options.loginwx && $options.loginwx(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f9c7640e"], ["__file", "D:/ypgz/template/templeteP/pages/components/login/index.vue"]]);
wx.createPage(MiniProgramPage);
