import QQMapWX from  './qqmap-wx-jssdk.min.js'
import { GlobalStore } from '../store/index.js'
	console.log(GlobalStore);
	const store = GlobalStore()
	
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

export {
	getMapLocation

}