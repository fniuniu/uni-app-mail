<template>
	<view>
		<!-- 自定义顶部导航栏 -->
		<page-header></page-header>
		<!-- 轮播图 -->
		<view class="swiper">
			<swiper :indicator-dots="true" :autoplay="true"  circular="true" :interval="3000" :duration="1000">
				<swiper-item v-for="swiper in swiperList" :key="swiper.id">
					<image :src="swiper.img" mode=""></image>
				</swiper-item>
			</swiper>
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
			}
		},
		onLoad() {
			this.initData()
			
		},
		methods: {
			initData() {
				uni.request({
					url: interfaces.getMallData,
					// console.log(res)
					success: (res) => {
						this.categoryList = res.data.data.categoryList;
						this.promotion = res.data.data.promotion;
						this.swiperList = res.data.data.swiperList;
					}
				})
			},
		}
	}
</script>

<style>

</style>
