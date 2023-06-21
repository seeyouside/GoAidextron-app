"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  props: {
    // 所有列选项数据
    columns: {
      type: Array,
      default: () => []
    },
    // 每一列默认选中值数组，不传默认选中第一项
    selectVals: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    // 每一列选中项的索引，当默认选中值变化的时候这个值也要变化
    indexArr: {
      // 多维数组，深度监听
      cache: false,
      get() {
        if (this.selectVals.length > 0) {
          return this.columns.map((col, cIdx) => {
            return col.findIndex((i) => i == this.selectVals[cIdx]);
          });
        } else {
          return [].fill(0, 0, this.columns.length);
        }
      }
    }
  },
  methods: {
    onChange(e) {
      const { value } = e.detail;
      let ret = this.columns.map((item, index) => {
        let idx = value[index];
        if (idx < 0) {
          idx = 0;
        }
        if (idx > item.length - 1) {
          idx = item.length - 1;
        }
        return item[idx];
      });
      this.$emit("onChange", {
        value: ret
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-20ac5870"], ["__file", "D:/ypgz/template/templeteP/pages/car/index.vue"]]);
wx.createPage(MiniProgramPage);
