"use strict";
const common_vendor = require("./vendor.js");
const common_qqmapWxJssdk_min = require("./qqmap-wx-jssdk.min.js");
const store_index = require("../store/index.js");
console.log(store_index.GlobalStore);
const store = store_index.GlobalStore();
function getMapLocation() {
  let address = "";
  common_vendor.index.chooseLocation({
    type: "gcj02",
    success: (res) => {
      console.log("详细", res);
      res.latitude;
      res.longitude, common_vendor.index.setStorageSync("longitude", res.longitude);
      common_vendor.index.setStorageSync("latitude", res.latitude);
      console.log(1);
      let qqmapSdk = new common_qqmapWxJssdk_min.QQMapWX({
        key: "WXWBZ-TWL65-BTXIQ-QIBGZ-2VFVV-A7FX4"
      });
      console.log(2);
      qqmapSdk.reverseGeocoder({
        location: {
          longitude: res.longitude,
          latitude: res.latitude
        },
        success: function(data) {
          console.log("地图数据address", data);
          address = data.result.address_component.district;
          common_vendor.index.setStorageSync("address", address);
          store.setAddress(address);
        }
      });
    }
  });
}
function uploadImg(data) {
  return new Promise((resolve, reject) => {
    common_vendor.index.chooseImage({
      count: data,
      //图片数量
      sizeType: ["original", "compressed"],
      //original compressed ，原图 压缩图
      sourceType: ["album", "camera"],
      //album camera， 相册 相机，
      success: async function(res) {
        let tempFiles = res.tempFilePaths;
        console.log("tempFiles", res);
        let imgArr = [];
        for (let i = 0; i < tempFiles.length; i++) {
          const res2 = await uploadingFile(tempFiles[i]);
          imgArr.push(res2);
        }
        resolve(imgArr);
      }
    });
  });
}
function uploadingFile(data) {
  console.log("uploadingFile", data);
  return new Promise((resolve, reject) => {
    common_vendor.index.uploadFile({
      url: "https://natu.zjqichuang.com/api/upload/image",
      //上传文件地址
      filePath: data,
      // 文件
      name: "file",
      formData: {},
      success: (res) => {
        const data2 = JSON.parse(res.data);
        if (data2.code == "1") {
          resolve(data2.data.uri);
        } else {
          reject(data2);
        }
      },
      fail: (e) => {
        reject(e);
      }
    });
  });
}
exports.getMapLocation = getMapLocation;
exports.uploadImg = uploadImg;
