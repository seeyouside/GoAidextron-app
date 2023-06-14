import QQMapWX from './qqmap-wx-jssdk.min.js'
import {
	GlobalStore
} from '../store/index.js'
console.log(GlobalStore);
const store = GlobalStore()
// 打开地图定位
function getMapLocation() {
	let latitude = ''
	let longitude = ''
	let address = ''
	uni.chooseLocation({
		type: 'gcj02',
		success: (res) => {
			console.log("详细", res);
			// this.getRegionFn(res);
			latitude = res.latitude
			longitude = res.longitude,
				uni.setStorageSync('longitude', res.longitude)
			uni.setStorageSync('latitude', res.latitude)
			console.log(1);
			let qqmapSdk = new QQMapWX({
				key: 'WXWBZ-TWL65-BTXIQ-QIBGZ-2VFVV-A7FX4'
			})
			console.log(2);
			// debugger
			qqmapSdk.reverseGeocoder({
				location: {
					longitude: res.longitude,
					latitude: res.latitude
				},
				success: function(data) {
					console.log('地图数据address', data);
					address = data.result.address_component.district
					uni.setStorageSync('address', address)

					store.setAddress(address)
				}
			})
		},

	});
}
// 调用本地相册获取图片视频
function uploadImg(data) {
	return new Promise((resolve, reject) => {
		uni.chooseImage({
			count: data, //图片数量
			sizeType: ["original", "compressed"], //original compressed ，原图 压缩图
			sourceType: ["album", "camera"], //album camera， 相册 相机，
			success: async function(res) {
				let tempFiles = res.tempFilePaths;
				console.log('tempFiles', res);
				//上传多张
				let imgArr = []
				for (let i = 0; i < tempFiles.length; i++) {
					const res = await uploadingFile(tempFiles[i])
					imgArr.push(res)
				}
				resolve(imgArr)
			}
		});
	})
}
// 上传文件
function uploadingFile(data) {
	console.log('uploadingFile', data);
	return new Promise((resolve, reject) => {
		uni.uploadFile({
			url: 'https://natu.zjqichuang.com/api/upload/image', //上传文件地址
			filePath: data, // 文件
			name: 'file',
			formData: {},
			success: res => {
				const data = JSON.parse(res.data)
				if (data.code == "1") {
					resolve(data.data.uri)
					// console.log("上传文件返回 成功：" + data.data)
				} else {
					reject(data)
					// console.log("上传文件返回 失败：" + JSON.stringify(data))
				}
			},
			fail: (e) => {
				// console.log("上传文件fail返回：" + e)
				reject(e)
			}
		})
	})
}
export {
	getMapLocation,
	uploadImg
}