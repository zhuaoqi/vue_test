// localstorage ;
const STORAGE_KEY = 'addlist'
export default {
	storage: function (data) {
		if (data != '') {
			window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
			console.log('加入成功 !')
		}
	},
	getStorage: function () {
		return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
	},
	removeStorage: function (data) {
		let stordata = JSON.parse(window.localStorage.getItem(STORAGE_KEY))
		stordata.forEach (function (e ,i) {
			if (e.item == data) {
				stordata.splice(i, 1)
			}
		})
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stordata))
	}
}