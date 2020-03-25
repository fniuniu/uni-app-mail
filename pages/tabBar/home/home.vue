<template>
	<view class="container">
		<!-- 自定义顶部导航栏 -->
		<page-header></page-header>
		
		<!-- 轮播图 -->
		<view class="swiper">
			<view class="swiper-box">
				<swiper :indicator-dots="true" indicator-active-color="#fff" :autoplay="true"  circular="true" :interval="3000" :duration="1000">
					<swiper-item v-for="swiper in swiperList" :key="swiper.id">
						<image :src="swiper.img" mode=""></image>
					</swiper-item>
				</swiper>
			</view>
		</view>
		
		<!-- 分类列表 -->
		<view class="category-list">
			<view  class="category" v-for="(category, index) in categoryList" :key="category.id">
				<view class="img"><image :src="category.img" mode=""></image></view>
				<text>{{ category.name }} </text>
			</view>
		</view>
		<!-- 广告区 -->
		<view class="banner" v-if="promotion.length > 0">
			<image src="/static/img/category/ad.jpg"></image>
		</view>
		
		<!-- 优惠区-->
		<view class="promotion" v-if="promotion.length > 0">
			<view class="text">优惠活动</view>
			<view class="list">
				<view class="column" v-for="(item, index) in promotion" :key="index" @tap="toPromotion(item)">
					<view class="top">
						<view class="title">{{ item.title }}</view>
					</view>
					<view class="left">
						<view class="ad">{{ item.ad }}</view>
						<view class="into">点击进入</view>
					</view>
					<view class="right"><image :src="item.img"></image></view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import pageHeader from "./pageHeader.vue"
	import interfaces from "../../../utils/interfaces.js"
	export default {
		components: {
			pageHeader
		},
		data() {
			return {
				categoryList: [],	//分类
				promotion: [],		//活动
				swiperList: [],		//轮播图	
				currentSwiper: 0	//当前轮播下标
			}
		},
		onLoad() {
			this.initData()
			
		},
		methods: {
		// 	asaync initData() {
		// 		let res = await this.$fetch(this.$api.initData)
		// 		this.swiperList = res.data.data.swiperList.sort(function() { return 0.5 - Math.random() })
		// 	},
			initData() {
				uni.request({
					url: interfaces.getMallData,
					success: (res) => {
						this.categoryList = res.data.data.categoryList;
						this.promotion = res.data.data.promotion;
						this.swiperList = res.data.data.swiperList;
						console.log(res)
					}
				})
				 
			},
			// toPromotion(item) {
			// 	uni.showToast({ title: e.title, icon: 'none' });
			// }
		}
	}
</script>

<style lang="less">
	.swiper {
		width: 100%;
		margin-top: 0upx;
		display: flex;
		justify-content: center;	
		.swiper-box {
			top: 100upx; //自己加的，是图片下移，完整呈现
			width: 92%;
			height: 30.7vw;
			overflow: hidden;
			border-radius: 15upx;
			box-shadow: 0upx 8upx 25upx rgba(0, 0, 0, 0.2);
			//兼容ios，微信小程序
			position: relative;
			z-index: 1;
			swiper {
				width: 100%;
				height: 30.7vw;
				swiper-item {
					image {
						width: 100%;
						height: 40vw;
					}
				}
			}
		}		
	}
	.category-list {		
		width: 92%;
		margin: 40px 4%;
		padding: 0 0 30upx 0;
		border-bottom: 2upx solid #f6f6f6;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		//top: 100px;
		.category {
			width:25%;
			margin-top: 50upx;
			display: flex;
			flex-wrap: wrap;
			.img {
				width: 100%;
				display: flex;
				justify-content: center;
				image {	
					width: 11vw;
					height: 11vw;
				}
			}
			text {
				margin-top: 16upx;
				width: 100%;
				display: flex;
				justify-content: center;
				font-size: 24upx;
				color: #3c3c3c;
			}
		}
		
	}
	
	.banner {
		width: 92%;
		margin: 40upx 4%;
		image {
			width: 100%;
			height: 36vw;
			border-radius: 4upx;
			box-shadow: 0upx 5upx 25upx rgba(0, 0, 0, 0.3);
		}
	}
	.promotion {
		width: 92%;
		margin: 10upx 4% 30upx 4%;
		.text {
			width: 100%;
			height: 60upx;
			font-size: 34upx;
			font-weight: 600;
			margin: 10upx;
		}
		.list {
			width: 100%;
			display: flex;
			justify-content: space-between;
			.column {
				width: 43%;
				padding: 15upx 3%;
				background-color: #ebf9f9;
				border-radius: 10upx;
				overflow: hidden;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				.top {
					width: 100%;
					height: 40upx;
					display: flex;
					align-items: center;
					margin-bottom: 5upx;
					.title {
						font-size: 30upx;
					}	
				}
				
				.left {
					width: 50%;
					height: 18.86vw;
					display: flex;
					flex-wrap: wrap;
					align-content: space-between;
					.ad {
						margin-top: 5upx;
						width: 100%;
						font-size: 22upx;
						color: #acb0b0;
					}
					.into {
						width: 100%;
						font-size: 24upx;
						color: #aaa;
						margin-bottom: 5upx;
					}
				}
				.right {
					width: 18.86vw;
					height: 18.86vw;
					image {
						width: 18.86vw;
						height: 18.86vw;
					}
				}
			}
	 	}
	}
</style>
