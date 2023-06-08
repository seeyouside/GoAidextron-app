"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      form: {},
      rules: {
        // 手机号
        contactNumber: [
          {
            required: false
          },
          {
            // 自定义验证函数
            validator: (rule, value, callback) => {
              if (value) {
                return this.$u.test.mobile(value);
              } else {
                return true;
              }
            },
            message: "手机号码不正确",
            // 触发器可以同时用blur和change
            trigger: ["change", "blur"]
          }
        ],
        // 微信号
        wxAccount: [
          {
            required: false
          },
          {
            // 自定义验证函数
            validator: (rule, value, callback) => {
              if (value) {
                let i = 0;
                for (i = 0; i < value.length; i++) {
                  if (this.$u.test.chinese(value[i])) {
                    return false;
                  }
                }
                return true;
              } else {
                return true;
              }
            },
            message: "请不要输入汉字",
            // 触发器可以同时用blur和change
            trigger: ["change", "blur"]
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit() {
      ({
        wxAccount: this.form.wxAccount,
        contactNumber: this.form.contactNumber
      });
      this.$refs.form.validate((valid) => {
      });
    }
  },
  onShow() {
  },
  onReady() {
    this.$refs.form.setRules(this.rules);
  }
};
if (!Array) {
  const _easycom_u_input2 = common_vendor.resolveComponent("u-input");
  const _easycom_u_form_item2 = common_vendor.resolveComponent("u-form-item");
  const _easycom_u_form2 = common_vendor.resolveComponent("u-form");
  (_easycom_u_input2 + _easycom_u_form_item2 + _easycom_u_form2)();
}
const _easycom_u_input = () => "../../node-modules/uview-plus/components/u-input/u-input.js";
const _easycom_u_form_item = () => "../../node-modules/uview-plus/components/u-form-item/u-form-item.js";
const _easycom_u_form = () => "../../node-modules/uview-plus/components/u-form/u-form.js";
if (!Math) {
  (_easycom_u_input + _easycom_u_form_item + _easycom_u_form)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.form.contactNumber = $event),
    b: common_vendor.p({
      placeholder: "请输入联系电话",
      maxlength: "11",
      modelValue: $data.form.contactNumber
    }),
    c: common_vendor.p({
      ["label-width"]: "150",
      label: "联系电话",
      prop: "contactNumber"
    }),
    d: common_vendor.o(($event) => $data.form.wxAccount = $event),
    e: common_vendor.p({
      placeholder: "请输入微信号",
      modelValue: $data.form.wxAccount
    }),
    f: common_vendor.p({
      ["label-width"]: "150",
      label: "微信号",
      prop: "wxAccount"
    }),
    g: common_vendor.sr("form", "924a5f10-0"),
    h: common_vendor.p({
      model: $data.form
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/ypgz/template/templatevuePlus/pages/components/index.vue"]]);
wx.createPage(MiniProgramPage);
