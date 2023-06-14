"use strict";
const common_vendor = require("../common/vendor.js");
const common_common = require("../common/common.js");
require("../common/qqmap-wx-jssdk.min.js");
require("../store/index.js");
require("../api/login.js");
require("../common/http.js");
const _sfc_main = {
  __name: "MyUploadImg",
  props: {
    numberData: {
      type: Number,
      required: true
    }
  },
  setup(__props, { expose }) {
    const props = __props;
    let imageArr = common_vendor.reactive(["../static/logo.png"]);
    async function uploadImgEvent() {
      let imgData = null;
      if (imageArr[imageArr.length - 1] == "../static/logo.png") {
        imgData = props.numberData - (imageArr.length - 1);
      } else {
        common_vendor.index.showToast({
          title: "不可在添加图"
        });
        return;
      }
      const res = await common_common.uploadImg(imgData);
      if (res.length < props.numberData) {
        imageArr.unshift(...res);
        if (imageArr.length > props.numberData) {
          imageArr.pop();
        }
      } else {
        imageArr.unshift(...res);
        if (imageArr.length > props.numberData) {
          imageArr.pop();
        }
        console.log(imageArr);
      }
    }
    expose({
      uploadImgEvent
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(imageArr), (item, index, i0) => {
          return {
            a: item,
            b: index,
            c: common_vendor.o(uploadImgEvent, index)
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f7544660"], ["__file", "D:/ypgz/template/templatevuePlus/components/MyUploadImg.vue"]]);
wx.createComponent(Component);
