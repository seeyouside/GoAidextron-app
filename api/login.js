import {myRequest} from '../common/http.js'
 
export function login (data) {  //登录密码
	return myRequest({
		url:'/login/password',
		method:'post',
		data
	})
}

export function code (data) {  //获取验证码
	return myRequest({
		url:'/code',
		method:'get',
		data
	})
}
export function loginCode (data) {  //验证码登陆
	return myRequest({
		url:'/login',
		method:'post',
		data
	})
}