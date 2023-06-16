"use strict";
const common_vendor = require("../common/vendor.js");
const common_common = require("../common/common.js");
require("../common/qqmap-wx-jssdk.min.js");
require("../store/index.js");
require("../api/login.js");
require("../common/http.js");
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  _easycom_u_icon2();
}
const _easycom_u_icon = () => "../node-modules/uview-plus/components/u-icon/u-icon.js";
if (!Math) {
  _easycom_u_icon();
}
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
    const query = common_vendor.index.createSelectorQuery();
    query.select("#myView").boundingClientRect((data) => {
      console.log("得到布局位置信息：", data);
    }).exec();
    const inputRef = common_vendor.ref();
    onReady(() => {
      console.log(inputRef);
    });
    let isainmtion = common_vendor.ref(false);
    let longressIndex = common_vendor.ref();
    function longpressEvent(index) {
      longressIndex.value = index;
      isainmtion.value = !isainmtion.value;
      console.log(longressIndex, "isainmtion", isainmtion.value);
    }
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
    const deleteImg = (e) => {
      common_vendor.index.showModal({
        title: "提示",
        content: "确定删除图片吗",
        success: function(res) {
          if (res.confirm) {
            imageArr.splice(e, 1);
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
    };
    const maxW = common_vendor.ref();
    const maxH = common_vendor.ref();
    const isShopBgc = common_vendor.ref(false);
    const uploadImgBoxMousemove = (e) => {
      maxW.value = e.changedTouches[0].pageX - 40 + "px";
      maxH.value = e.changedTouches[0].pageY - 40 + "px";
    };
    const uploadImgBoxClick = (e) => {
      maxW.value = e.changedTouches[0].pageX - 40 + "px";
      maxH.value = e.changedTouches[0].pageY - 40 + "px";
      isShopBgc.value = true;
    };
    const uploadImgBoxTouchend = () => {
      isShopBgc.value = false;
    };
    let trashText = common_vendor.ref("拖入图标删除");
    const touchstartTrash = (e) => {
      console.log("touchstartTrash", e);
      trashText.value = "松手即可删除";
    };
    expose({
      uploadImgEvent,
      deleteImg,
      longpressEvent,
      uploadImgBoxMousemove,
      uploadImgBoxTouchend,
      touchstartTrash
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(imageArr), (item, index, i0) => {
          return {
            a: item,
            b: common_vendor.o(($event) => common_vendor.isRef(isainmtion) ? isainmtion.value = false : isainmtion = false, index),
            c: common_vendor.o(($event) => longpressEvent(index), index),
            d: common_vendor.n(common_vendor.unref(longressIndex) == index && common_vendor.unref(isainmtion) ? "imgAnimation" : ""),
            e: index,
            f: common_vendor.o(uploadImgEvent, index)
          };
        }),
        b: maxH.value,
        c: maxW.value,
        d: common_vendor.p({
          name: "trash-fill",
          color: "#ff0000",
          size: "36"
        }),
        e: common_vendor.t(common_vendor.unref(trashText)),
        f: common_vendor.n(isShopBgc.value ? "" : "show"),
        g: common_vendor.o(touchstartTrash),
        h: common_vendor.o(uploadImgBoxMousemove),
        i: common_vendor.o(uploadImgBoxTouchend),
        j: common_vendor.o(uploadImgBoxClick)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f7544660"], ["__file", "D:/ypgz/template/templatevuePlus/components/MyUploadImg.vue"]]);
wx.createComponent(Component);
