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
exports.getMapLocation = getMapLocation;
