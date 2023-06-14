import {myRequest} from '../common/http.js'
 
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
export function loginWx (data) {  //微信登陆
	return myRequest({
		url:'/api/login/mnpLogin',
		method:'post',
		data
	})
}