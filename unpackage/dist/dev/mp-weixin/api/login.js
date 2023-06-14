"use strict";
const common_http = require("../common/http.js");
function code(data) {
  return common_http.myRequest({
    url: "/shopapi/sms/sendCode",
    method: "post",
    data
  });
}
function loginCode(data) {
  return common_http.myRequest({
    url: "/shopapi/shop/mobileLogin",
    method: "post",
    data
  });
}
function loginWx(data) {
  return common_http.myRequest({
    url: "/api/login/mnpLogin",
    method: "post",
    data
  });
}
exports.code = code;
exports.loginCode = loginCode;
exports.loginWx = loginWx;
