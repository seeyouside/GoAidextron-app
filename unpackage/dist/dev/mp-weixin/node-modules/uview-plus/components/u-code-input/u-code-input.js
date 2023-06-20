"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-code-input",
  mixins: [common_vendor.mpMixin, common_vendor.mixin, common_vendor.props$3],
  data() {
    return {
      inputValue: "",
      isFocus: this.focus
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.inputValue = String(val).substring(0, this.maxlength);
      }
    }
  },
  computed: {
    // 根据长度，循环输入框的个数，因为头条小程序数值不能用于v-for
    codeLength() {
      return new Array(Number(this.maxlength));
    },
    // 循环item的样式
    itemStyle() {
      return (index) => {
        const addUnit = common_vendor.index.$u.addUnit;
        const style = {
          width: addUnit(this.size),
          height: addUnit(this.size)
        };
        if (this.mode === "box") {
          style.border = `${this.hairline ? 0.5 : 1}px solid ${this.borderColor}`;
          if (common_vendor.index.$u.getPx(this.space) === 0) {
            if (index === 0) {
              style.borderTopLeftRadius = "3px";
              style.borderBottomLeftRadius = "3px";
            }
            if (index === this.codeLength.length - 1) {
              style.borderTopRightRadius = "3px";
              style.borderBottomRightRadius = "3px";
            }
            if (index !== this.codeLength.length - 1) {
              style.borderRight = "none";
            }
          }
        }
        if (index !== this.codeLength.length - 1) {
          style.marginRight = addUnit(this.space);
        } else {
          style.marginRight = 0;
        }
        return style;
      };
    },
    // 将输入的值，转为数组，给item历遍时，根据当前的索引显示数组的元素
    codeArray() {
      return String(this.inputValue).split("");
    },
    // 下划线模式下，横线的样式
    lineStyle() {
      const style = {};
      style.height = this.hairline ? "2px" : "4px";
      style.width = common_vendor.index.$u.addUnit(this.size);
      style.backgroundColor = this.borderColor;
      return style;
    }
  },
  methods: {
    // 监听输入框的值发生变化
    inputHandler(e) {
      const value = e.detail.value;
      this.inputValue = value;
      if (this.disabledDot) {
        this.$nextTick(() => {
          this.inputValue = value.replace(".", "");
        });
      }
      this.$emit("change", value);
      this.$emit("input", value);
      if (String(value).length >= Number(this.maxlength)) {
        this.$emit("finish", value);
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($options.codeLength, (item, index, i0) => {
      return common_vendor.e({
        a: _ctx.dot && $options.codeArray.length > index
      }, _ctx.dot && $options.codeArray.length > index ? {} : {
        b: common_vendor.t($options.codeArray[index]),
        c: _ctx.$u.addUnit(_ctx.fontSize),
        d: _ctx.bold ? "bold" : "normal",
        e: _ctx.color
      }, _ctx.mode === "line" ? {
        f: common_vendor.s($options.lineStyle)
      } : {}, {
        g: $data.isFocus && $options.codeArray.length === index
      }, $data.isFocus && $options.codeArray.length === index ? {
        h: _ctx.color
      } : {}, {
        i: common_vendor.s($options.itemStyle(index)),
        j: index
      });
    }),
    b: _ctx.mode === "line",
    c: _ctx.disabledKeyboard,
    d: _ctx.focus,
    e: $data.inputValue,
    f: _ctx.maxlength,
    g: _ctx.adjustPosition,
    h: common_vendor.o((...args) => $options.inputHandler && $options.inputHandler(...args)),
    i: _ctx.$u.addUnit(_ctx.size),
    j: common_vendor.o(($event) => $data.isFocus = true),
    k: common_vendor.o(($event) => $data.isFocus = false)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-cff11be3"], ["__file", "D:/ypgz/template/templeteP/node_modules/uview-plus/components/u-code-input/u-code-input.vue"]]);
wx.createComponent(Component);
