"use strict";
const common_vendor = require("../common/vendor.js");
const api_login = require("../api/login.js");
const GlobalStore = common_vendor.defineStore({
  // id: 必须的，在所有 Store 中唯一
  id: "myGlobalState",
  // state: 返回对象的函数
  state: () => ({
    address: "去定位",
    token: ""
  }),
  getters: {},
  actions: {
    setAddress(data) {
      console.log("00000", data);
      this.address = data;
    },
    // 密码登陆
    async loginWx(data) {
      const res = await api_login.loginWx(data);
      this.token = res.data.data.token;
    },
    // 验证码登陆
    async loginCode(data) {
      const res = await api_login.loginCode(data);
      console.log("login>>>>>>>>>", res);
      this.token = res.data.data.token;
    }
  }
});
exports.GlobalStore = GlobalStore;
