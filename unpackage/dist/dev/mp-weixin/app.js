"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const common_systemInfo = require("./common/system-info.js");
if (!Math) {
  "./pages/components/LoadPage.js";
  "./pages/index/index.js";
  "./pages/components/login/index.js";
  "./pages/components/login/sendPages.js";
  "./pages/classify/index.js";
  "./pages/my/index.js";
  "./pages/car/index.js";
}
const _sfc_main = {
  onLaunch: function() {
    this.globalData.navHeight = common_systemInfo.systemInfo().navHeight + common_systemInfo.systemInfo().statusBarHeight;
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/ypgz/template/templeteP/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(common_vendor.createPinia());
  return {
    app,
    Pinia: common_vendor.Pinia
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
