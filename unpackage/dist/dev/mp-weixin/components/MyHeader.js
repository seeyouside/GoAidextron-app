"use strict";
const common_systemInfo = require("../common/system-info.js");
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "HeadView",
  props: {
    // 左侧宽度需求
    leftWight: {
      type: String,
      default: "140"
    },
    // 左侧文本区内容
    leftTitle: {
      type: String
    },
    // 左边显示icon
    leftIcom: {
      type: Boolean
      // default:true
    },
    iconName: {
      type: String,
      default: "arrow-left"
    },
    // 左侧显示logo
    leftLogo: {
      type: Boolean
    },
    logoImg: {
      type: String,
      default: "../static/logo.png"
    },
    // 中间文本
    centerTitle: {
      type: String
      // default:'标题'
    },
    // 中间显示搜索框
    search: {
      type: String
      // default: true
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
      windowWidth: 0,
      menuButtonWidth: "0",
      // 胶囊宽度
      // 搜索框数据返回优化
      flag: false
    };
  },
  methods: {
    // 搜索框数据改变时触发
    searchEvent(e) {
      if (this.flag) {
        return;
      }
      this.flag = true;
      this.flag = setTimeout(() => {
        this.$emit("searchEvent", e);
        this.flag = false;
      }, 300);
    },
    // 搜索框被点击后做的事
    searchClick(e) {
      this.$emit("searchClick", true);
    }
  },
  created() {
    const SystemInfomations = common_systemInfo.systemInfo();
    this.statusBarHeight = SystemInfomations.statusBarHeight;
    this.scaleFactor = SystemInfomations.scaleFactor;
    this.windowWidth = SystemInfomations.windowWidth;
    this.menuButtonWidth = SystemInfomations.menuButtonWidth;
    this.navHeight = SystemInfomations.navHeight + SystemInfomations.statusBarHeight;
    this.navigationBarHeight = SystemInfomations.navHeight;
    this.customHeight = SystemInfomations.menuButtonHeight;
    this.menubarLeft = SystemInfomations.menuButtonLeft;
  }
};
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.leftIcom
  }, $props.leftIcom ? {
    b: common_vendor.p({
      name: $props.iconName,
      color: "#000",
      size: "18"
    })
  } : $props.leftLogo ? {
    d: $props.logoImg
  } : $props.leftTitle ? {
    f: common_vendor.t($props.leftTitle),
    g: $data.customHeight + "rpx"
  } : {}, {
    c: $props.leftLogo,
    e: $props.leftTitle,
    h: $props.leftWight + "rpx",
    i: $props.centerTitle
  }, $props.centerTitle ? {
    j: common_vendor.t($props.centerTitle),
    k: $data.customHeight + "rpx"
  } : $props.search == "search" ? {
    m: common_vendor.o($options.searchEvent),
    n: common_vendor.o(($event) => _ctx.searchData = $event),
    o: common_vendor.p({
      height: $data.customHeight + "rpx",
      clearabled: false,
      ["show-action"]: false,
      actionText: "搜索",
      animation: true,
      modelValue: _ctx.searchData
    })
  } : $props.search == "click" ? {
    q: common_vendor.o($options.searchClick),
    r: common_vendor.o(($event) => _ctx.searchData = $event),
    s: common_vendor.p({
      height: $data.customHeight + "rpx",
      clearabled: false,
      ["show-action"]: false,
      disabled: true,
      actionText: "搜索",
      animation: true,
      modelValue: _ctx.searchData
    })
  } : {}, {
    l: $props.search == "search",
    p: $props.search == "click",
    t: $data.menuButtonWidth + "rpx",
    v: $data.customHeight + "rpx",
    w: $data.navigationBarHeight + "rpx",
    x: $data.statusBarHeight + "rpx",
    y: $data.navHeight + "rpx",
    z: $data.navHeight + "rpx"
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/ypgz/template/templeteP/components/MyHeader.vue"]]);
wx.createComponent(Component);
