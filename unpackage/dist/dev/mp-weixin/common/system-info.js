"use strict";
const common_vendor = require("./vendor.js");
const systemInfo = function() {
  let systemInfomations = common_vendor.index.getSystemInfoSync();
  let scaleFactor = 750 / systemInfomations.windowWidth;
  let windowHeight = systemInfomations.windowHeight * scaleFactor;
  let windowWidth = systemInfomations.windowWidth * scaleFactor;
  let statusBarHeight = systemInfomations.statusBarHeight * scaleFactor;
  let navHeight = 0;
  const menuButtonInfo = common_vendor.wx$1.getMenuButtonBoundingClientRect();
  let menuButtonHeight = menuButtonInfo.height * scaleFactor;
  let menuButtonWidth = menuButtonInfo.width * scaleFactor;
  let menuButtonTop = menuButtonInfo.top * scaleFactor;
  let menuButtonRight = menuButtonInfo.right * scaleFactor;
  let menuButtonBottom = menuButtonInfo.bottom * scaleFactor;
  let menuButtonLeft = menuButtonInfo.left * scaleFactor;
  navHeight = menuButtonHeight + (menuButtonTop - statusBarHeight) * 2;
  return {
    scaleFactor,
    windowHeight,
    windowWidth,
    statusBarHeight,
    menuButtonHeight,
    menuButtonWidth,
    menuButtonTop,
    menuButtonRight,
    menuButtonBottom,
    menuButtonLeft,
    navHeight
  };
};
exports.systemInfo = systemInfo;
