import {
	defineStore
} from 'pinia'
import {
	login,
	loginCode
} from '../api/login.js'
// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const GlobalStore = defineStore({
	// id: 必须的，在所有 Store 中唯一
	id: "myGlobalState",
	// state: 返回对象的函数
	state: () => ({
		address: '去定位',
		token: ''
	}),
	getters: {},
	actions: {
		setAddress(data) {
			console.log('00000', data);
			this.address = data
		},
		// 密码登陆
		async login(data) {
			const res = await login(data)
			// console.log('login>>>>>>>>>',res.data.data.token);
			this.token = res.data.data.token
		},
		// 验证码登陆
		async loginCode(data) {
			const res = await loginCode(data)
			// console.log('login>>>>>>>>>',res.data.data.token);
			this.token = res.data.data.token
		}
	},
});