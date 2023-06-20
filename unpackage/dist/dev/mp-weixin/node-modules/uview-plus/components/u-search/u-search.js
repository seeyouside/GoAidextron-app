"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-search",
  mixins: [common_vendor.mpMixin, common_vendor.mixin, common_vendor.props$5],
  data() {
    return {
      keyword: "",
      showClear: false,
      // 是否显示右边的清除图标
      show: false,
      // 标记input当前状态是否处于聚焦中，如果是，才会显示右侧的清除控件
      focused: this.focus
      // 绑定输入框的值
      // inputValue: this.value
    };
  },
  watch: {
    keyword(nVal) {
      this.$emit("update:modelValue", nVal);
      this.$emit("change", nVal);
    },
    modelValue: {
      immediate: true,
      handler(nVal) {
        this.keyword = nVal;
      }
    }
  },
  computed: {
    showActionBtn() {
      return !this.animation && this.showAction;
    }
  },
  emits: ["clear", "search", "custom", "focus", "blur", "click", "clickIcon", "update:modelValue", "change"],
  methods: {
    // 目前HX2.6.9 v-model双向绑定无效，故监听input事件获取输入框内容的变化
    inputChange(e) {
      this.keyword = e.detail.value;
    },
    // 清空输入
    // 也可以作为用户通过this.$refs形式调用清空输入框内容
    clear() {
      this.keyword = "";
      this.$nextTick(() => {
        this.$emit("clear");
      });
    },
    // 确定搜索
    search(e) {
      this.$emit("search", e.detail.value);
      try {
        common_vendor.index.hideKeyboard();
      } catch (e2) {
      }
    },
    // 点击右边自定义按钮的事件
    custom() {
      this.$emit("custom", this.keyword);
      try {
        common_vendor.index.hideKeyboard();
      } catch (e) {
      }
    },
    // 获取焦点
    getFocus() {
      this.focused = true;
      if (this.animation && this.showAction)
        this.show = true;
      this.$emit("focus", this.keyword);
    },
    // 失去焦点
    blur() {
      setTimeout(() => {
        this.focused = false;
      }, 100);
      this.show = false;
      this.$emit("blur", this.keyword);
    },
    // 点击搜索框，只有disabled=true时才发出事件，因为禁止了输入，意味着是想跳转真正的搜索页
    clickHandler() {
      if (this.disabled)
        this.$emit("click");
    },
    // 点击左边图标
    clickIcon() {
      this.$emit("clickIcon");
    }
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  _easycom_u_icon2();
}
const _easycom_u_icon = () => "../u-icon/u-icon.js";
if (!Math) {
  _easycom_u_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.$slots.label || _ctx.label !== null
  }, _ctx.$slots.label || _ctx.label !== null ? {
    b: common_vendor.t(_ctx.label)
  } : {}, {
    c: common_vendor.o($options.clickIcon),
    d: common_vendor.p({
      size: _ctx.searchIconSize,
      name: _ctx.searchIcon,
      color: _ctx.searchIconColor ? _ctx.searchIconColor : _ctx.color
    }),
    e: common_vendor.o((...args) => $options.blur && $options.blur(...args)),
    f: $data.keyword,
    g: common_vendor.o((...args) => $options.search && $options.search(...args)),
    h: common_vendor.o((...args) => $options.inputChange && $options.inputChange(...args)),
    i: _ctx.disabled,
    j: common_vendor.o((...args) => $options.getFocus && $options.getFocus(...args)),
    k: _ctx.focus,
    l: _ctx.maxlength,
    m: _ctx.placeholder,
    n: `color: ${_ctx.placeholderColor}`,
    o: common_vendor.s({
      textAlign: _ctx.inputAlign,
      color: _ctx.color,
      backgroundColor: _ctx.bgColor,
      height: _ctx.$u.addUnit(_ctx.height)
    }),
    p: common_vendor.s(_ctx.inputStyle),
    q: $data.keyword && _ctx.clearabled && $data.focused
  }, $data.keyword && _ctx.clearabled && $data.focused ? {
    r: common_vendor.p({
      name: "close",
      size: "11",
      color: "#ffffff",
      customStyle: "line-height: 12px"
    }),
    s: common_vendor.o((...args) => $options.clear && $options.clear(...args))
  } : {}, {
    t: _ctx.bgColor,
    v: _ctx.shape == "round" ? "100px" : "4px",
    w: _ctx.borderColor,
    x: common_vendor.t(_ctx.actionText),
    y: common_vendor.s(_ctx.actionStyle),
    z: common_vendor.n(($options.showActionBtn || $data.show) && "u-search__action--active"),
    A: common_vendor.o((...args) => $options.custom && $options.custom(...args)),
    B: common_vendor.o((...args) => $options.clickHandler && $options.clickHandler(...args)),
    C: common_vendor.s({
      margin: _ctx.margin
    }),
    D: common_vendor.s(_ctx.$u.addStyle(_ctx.customStyle))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ed789780"], ["__file", "D:/ypgz/template/templeteP/node_modules/uview-plus/components/u-search/u-search.vue"]]);
wx.createComponent(Component);
