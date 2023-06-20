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
    let _this = common_vendor.getCurrentInstance();
    let propData = null;
    let getPropety = () => {
      const query = common_vendor.index.createSelectorQuery().in(_this);
      query.select(".prop").boundingClientRect((data) => {
        let newdata = JSON.parse(JSON.stringify(data));
        console.log(newdata);
        propData = newdata;
      }).exec();
    };
    let isainmtion = common_vendor.ref(false);
    let longressIndex = common_vendor.ref();
    function longpressEvent(index) {
      longressIndex.value = index;
      isainmtion.value = !isainmtion.value;
      console.log(longressIndex, "isainmtion", isainmtion.value);
      getPropety();
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
      if (!propData) {
        return;
      }
      maxW.value = e.changedTouches[0].pageX - 40 + "px";
      maxH.value = e.changedTouches[0].pageY - 40 + "px";
      if (e.changedTouches[0].pageX - 40 > propData.left && e.changedTouches[0].pageY > propData.top && (e.changedTouches[0].pageX - 40 < propData.right && e.changedTouches[0].pageY < propData.bottom)) {
        touchstartTrash();
      } else {
        touchstartTrash(1);
      }
    };
    const touchendEvent = (e) => {
      if (!propData) {
        return;
      }
      if (e.changedTouches[0].pageX - 40 > propData.left && e.changedTouches[0].pageY > propData.top && (e.changedTouches[0].pageX - 40 < propData.right && e.changedTouches[0].pageY < propData.bottom)) {
        deleteImg();
      }
      isainmtion.value = false;
      isShopBgc.value = false;
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
    let colorIcon = common_vendor.ref("#000");
    const touchstartTrash = (e) => {
      if (e == 1) {
        trashText.value = "拖入图标删除";
        colorIcon.value = "#000";
        return;
      }
      trashText.value = "松手即可删除";
      colorIcon.value = "#ff0000";
    };
    expose({
      uploadImgEvent,
      deleteImg,
      longpressEvent,
      uploadImgBoxMousemove,
      uploadImgBoxTouchend,
      touchstartTrash,
      touchendEvent
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(common_vendor.unref(imageArr), (item, index, i0) => {
          return {
            a: item,
            b: common_vendor.o(uploadImgBoxMousemove, index),
            c: common_vendor.o(($event) => longpressEvent(index), index),
            d: common_vendor.o(touchendEvent, index),
            e: common_vendor.n(common_vendor.unref(longressIndex) == index && common_vendor.unref(isainmtion) ? "imgAnimation" : ""),
            f: index,
            g: common_vendor.o(uploadImgEvent, index)
          };
        }),
        b: maxH.value,
        c: maxW.value,
        d: common_vendor.unref(isainmtion)
      }, common_vendor.unref(isainmtion) ? {} : {}, {
        e: common_vendor.p({
          name: "trash-fill",
          color: common_vendor.unref(colorIcon),
          size: "36"
        }),
        f: common_vendor.t(common_vendor.unref(trashText)),
        g: common_vendor.n(isShopBgc.value ? "" : "show"),
        h: common_vendor.o(touchstartTrash),
        i: common_vendor.o(uploadImgBoxTouchend),
        j: common_vendor.o(uploadImgBoxClick)
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f7544660"], ["__file", "D:/ypgz/template/templeteP/components/MyUploadImg.vue"]]);
wx.createComponent(Component);
