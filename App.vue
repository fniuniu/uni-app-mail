<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	 @import "/static/iconfont/iconfont.css" ;
	page {
		position: relative;
		background-color: #fff;		
	}
	/* 自定义轮播图指示点样式 */
	uni-swiper .uni-swiper-dot {
	        width: 40upx !important;  
	        height: 5upx !important;   
	        border-radius: 0px !important;  
			
	    }
</style>
