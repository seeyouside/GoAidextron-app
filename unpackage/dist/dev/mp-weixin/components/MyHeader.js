"use strict";
const common_systemInfo = require("../common/system-info.js");
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "HeadView",
  props: {
    // 文本区内容
    title: {
      type: String,
      default: "123"
    }
  },
  data() {
    return {
      statusBarHeight: 0,
      //状态栏高度
      navHeight: 0,
      //头部导航栏总体高度
      navigationBarHeight: 0,
      //导航栏高度
      customHeight: 0,
      //胶囊高度
      scaleFactor: 0,
      //比例系数
      menubarLeft: 0,
      //胶囊定位的左边left
      windowWidth: 0
    };
  },
  methods: {},
  created() {
    const SystemInfomations = common_systemInfo.systemInfo();
    this.statusBarHeight = SystemInfomations.statusBarHeight;
    this.scaleFactor = SystemInfomations.scaleFactor;
    this.windowWidth = SystemInfomations.windowWidth;
    this.navHeight = SystemInfomations.navHeight + SystemInfomations.statusBarHeight;
    this.navigationBarHeight = SystemInfomations.navHeight;
    this.customHeight = SystemInfomations.menuButtonHeight;
    this.menubarLeft = SystemInfomations.menuButtonLeft;
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.title),
    b: $data.customHeight + "rpx",
    c: $data.customHeight + "rpx",
    d: $data.navigationBarHeight + "rpx",
    e: $data.statusBarHeight + "rpx",
    f: $data.navHeight + "rpx"
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/ypgz/template/templatevuePlus/components/MyHeader.vue"]]);
wx.createComponent(Component);
