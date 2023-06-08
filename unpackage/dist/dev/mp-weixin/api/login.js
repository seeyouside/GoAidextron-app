"use strict";
const common_http = require("../common/http.js");
function login(data) {
  return common_http.myRequest({
    url: "/login/password",
    method: "post",
    data
  });
}
function loginCode(data) {
  return common_http.myRequest({
    url: "/login",
    method: "post",
    data
  });
}
exports.login = login;
exports.loginCode = loginCode;
