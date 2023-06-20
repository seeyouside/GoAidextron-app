"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    const currentDate = this.getDate({
      format: true
    });
    return {
      date: currentDate,
      timeStart: "14:00",
      timeEnd: "16:00",
      startDate: this.getDate("start"),
      endDate: this.getDate("end")
    };
  },
  props: {
    startDate: {
      type: String
    }
  },
  methods: {
    // 选择时间 日期
    bindDateChange: function(e) {
      this.date = e.target.value;
    },
    getDate(type) {
      const date = /* @__PURE__ */ new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      if (type === "start") {
        year = year - 20;
      } else if (type === "end") {
        year = year + 2;
      }
      month = month > 9 ? month : "0" + month;
      day = day > 9 ? day : "0" + day;
      return `${year}-${month}-${day}`;
    },
    // 开始时间
    bindTimeStart: function(e) {
      this.timeStart = e.target.value;
    },
    // 结束时间
    bindTimeEnd: function(e) {
      this.timeEnd = e.target.value;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.date),
    b: $data.date,
    c: $props.startDate,
    d: $data.endDate,
    e: common_vendor.o((...args) => $options.bindDateChange && $options.bindDateChange(...args)),
    f: common_vendor.t($data.timeStart),
    g: $data.timeStart,
    h: common_vendor.o((...args) => $options.bindTimeStart && $options.bindTimeStart(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-20ac5870"], ["__file", "D:/ypgz/template/templeteP/pages/car/index.vue"]]);
wx.createPage(MiniProgramPage);
