const domain = "https://uniapp-interface.herokuapp.com"
const interfaces = {
	//获取首页数据
	getMallData: domain + "/api/profiles/mall_list",
	//获取分类数据,购物车页
	getCategory: domain + "/api/profiles/category",
}
module.exports = interfaces;