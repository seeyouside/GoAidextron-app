import {myRequest} from '../common/http.js'
 
export function login (data) {  //登录密码
	return myRequest({
		url:'/shopapi/shop/mnpLogin',
		method:'post',
		data
	})
}

export function code (data) {  //获取验证码
	return myRequest({
		url:'/shopapi/sms/sendCode',
		method:'post',
		data
	})
}
export function loginCode (data) {  //验证码登陆
	return myRequest({
		url:'/shopapi/shop/mobileLogin',
		method:'post',
		data
	})
}