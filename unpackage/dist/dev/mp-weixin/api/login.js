"use strict";
const common_http = require("../common/http.js");
function login(data) {
  return common_http.myRequest({
    url: "/shopapi/shop/mnpLogin",
    method: "post",
    data
  });
}
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
exports.code = code;
exports.login = login;
exports.loginCode = loginCode;
