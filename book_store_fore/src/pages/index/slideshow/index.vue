<template>
	<div>
<!-- 		<swiper
			  :slides-per-view="3"
			  :space-between="50"
			  @swiper="onSwiper"
			  @slideChange="onSlideChange"
			  :autoplay="autoplay"
			  :interval="100"
			  :options="swiperOption"
			  
			  id="slideshow"
			>
			
				<swiper-slide>
					<img src="@/../public/muti-img1.webp" alt="" width="660px" height="360px">
				</swiper-slide>
				<swiper-slide>
					<img src="@/../public/muti-img2.png" alt="" width="660px" height="360px">
				</swiper-slide>
				<swiper-slide>
					<img src="@/../public/muti-img3.webp" alt="" width="660px" height="360px">
				</swiper-slide>
				<swiper-button-prev></swiper-button-prev>
				<swiper-button-next></swiper-button-next> -->
				<!-- <div class="swiper-button-prev"></div>
				<div class="swiper-button-next"></div> -->
				
		<!-- </swiper> -->
		
		<div class="swiper">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide">
					<img src="@/../public/muti-img1.webp" alt="" width="680px" height="360px">
				</div>
		        <div class="swiper-slide">
					<img src="@/../public/muti-img2.png" alt="" width="680px" height="360px">
				</div>
		        <div class="swiper-slide">
					<img src="@/../public/muti-img3.webp" alt="" width="680px" height="360px">
				</div>
		    </div>
		    <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper外面，需要自定义样式。-->
		    <div class="swiper-button-next"></div><!--右箭头。如果放置在swiper外面，需要自定义样式。-->
		</div>
		
		
	</div>
	
</template>

<script>
	
	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.css'
	
	export default{
		data() {
		    return {
		   //      dataList: {
		   //          type: Array,
		   //          default: () => [],
		   //          required: true
		   //      },
		   //      swiperOption: {
		   //          direction: 'horizontal',
		   //          // 改变swiper样式时，自动初始化swiper
		   //          observer: true,
		   //          // 监测swiper父元素，如果有变化则初始化swiper
		   //          observeParents: true,
		   //          loop: true,
		   //          autoplay: {
		   //              delay: 2000,
		   //              disableOnInteraction: false
		   //          },
					// rewind:true,
					// navigation: {
					//     nextEl: '.swiper-button-next',
					//     prevEl: '.swiper-button-prev',
					// },
					
					
		   //      }
		    }
		},
		mounted() {
		    // this.getListData()
			
			var mySwiper = new Swiper('.swiper',{
				width:680,
				height:360,
				
				autoplay:{
					delay:3000,
					stopOnLastSlide: false,
					disableOnInteraction:false
				},
				navigation:{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				rewind:true,
				effect:"fade",
			}
				
			)
			
		},
		methods: {
		//     getListData() {
		//         axios.get('https://test.com/api')
		//             .then(res => {
		//                 this.dataList = res.data
		//             })
		//             .catch(err => {
		
		//             })
		//     }
		}
	}
	
</script>

<style>
	 .swiper{
		width: 680px;
		height: 360px;
		background-color: yellowgreen;
		position: relative;
		
		--swiper-theme-color: #ff6600;/* 设置Swiper风格 */
		--swiper-navigation-color: #00ff33;/* 单独设置按钮颜色 */
		--swiper-navigation-size: 30px;/* 设置按钮大小 */
	}


</style>