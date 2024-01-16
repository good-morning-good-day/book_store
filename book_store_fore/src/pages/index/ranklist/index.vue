<template>
	<div id="ranklist">
		<div id="ranklist-title">
			<p>排行榜</p>
		</div>
		
			<div id="ranklist-label">
				<p>图书</p>
				<p>文创</p>
				<p>日百</p>
				<p>农产品</p>
			</div>
			
			<ul id="ranklist-items">
				<li class="ranklist-item" v-on:mouseenter="enterhover($event)" v-on:mouseover="overhover($event)">
					<p class="ranklist-item-sp">奇迹湖(汉英对照)(精)</p>
					<div class="ranklist-item-rank">
						1
					</div>
					<img src="@/../public/rank-icon.png" alt="" class="ranklist-item-rankimg">
					<div class="ranklist-item-hdiv" >
						<img src="@/../public/rankbook1.webp" alt="">
						<div class="ranklist-item-prices">
							<p style="font-size: 12px;">奇迹湖(汉英对照)(精)</p>
							<p style="font-size: 12px; color: darkgray; margin-top: 5px; margin-bottom: 5px;">于明</p>
							<p><font style="color: red;font-size: 16px;">￥21.90</font> <font style="font-size: 12px;text-decoration: line-through">￥68.00</font></p>
						</div>
					</div>
				</li>
				<div style="border-top:1px dashed #cccccc;height: 1px;overflow:hidden"></div>
				<!-- <li>中国书法大全 全3册</li> -->
				<li class="ranklist-item">
					<p class="ranklist-item-sp">奇迹湖(汉英对照)(精)</p>
					<div class="ranklist-item-rank">
						2
					</div>
					<img src="@/../public/rank-icon.png" alt="" class="ranklist-item-rankimg">
					<!-- <div>
						<img src="" alt="">
						<div>
							<p>奇迹湖(汉英对照)(精)</p>
							<p><font>￥21.90</font><font>￥68.00</font></p>
						</div>
					</div> -->
				</li>
				<div style="border-top:1px dashed #cccccc;height: 1px;overflow:hidden"></div>
				<!-- <li>一年级，我来啦！全四册 平装塑封 四色全彩</li> -->
				<li class="ranklist-item">
					<p class="ranklist-item-sp">奇迹湖(汉英对照)(精)</p>
					<div class="ranklist-item-rank">
						3
					</div>
					<img src="@/../public/rank-icon.png" alt="" class="ranklist-item-rankimg">
					<!-- <div>
						<img src="" alt="">
						<div>
							<p>奇迹湖(汉英对照)(精)</p>
							<p><font>￥21.90</font><font>￥68.00</font></p>
						</div>
					</div> -->
				</li>
				<div style="border-top:1px dashed #cccccc;height: 1px;overflow:hidden"></div>
				<li class="ranklist-item">
					<p class="ranklist-item-sp">奇迹湖(汉英对照)(精)</p>
<!-- 					<div class="ranklist-item-rank">
						1
					</div>
					<img src="@/../public/rank-icon.png" alt="" class="ranklist-item-rankimg"> -->
					<!-- <div>
						<img src="" alt="">
						<div>
							<p>奇迹湖(汉英对照)(精)</p>
							<p><font>￥21.90</font><font>￥68.00</font></p>
						</div>
					</div> -->
				</li>
				<div style="border-top:1px dashed #cccccc;height: 1px;overflow:hidden"></div>
				<li class="ranklist-item">
					<p class="ranklist-item-sp">奇迹湖(汉英对照)(精)</p>
<!-- 					<div class="ranklist-item-rank">
						1
					</div>
					<img src="@/../public/rank-icon.png" alt="" class="ranklist-item-rankimg"> -->
					<!-- <div>
						<img src="" alt="">
						<div>
							<p>奇迹湖(汉英对照)(精)</p>
							<p><font>￥21.90</font><font>￥68.00</font></p>
						</div>
					</div> -->
				</li>

			</ul>
		
	</div>
</template>

<script>
	
	export default{
		data(){
			return{
				rankDetailShow:[true,false,false,false,false]
			}
		},
		mounted() {
			
		},
		methods:{
			 enterhover(event){
				 
				// alert("hi")
				// console.log( event.currentTarget )
				event.currentTarget.getElementsByClassName("ranklist-item-hdiv")[0].style.display="flex"
				event.currentTarget.getElementsByClassName("ranklist-item-sp")[0].style.display="none"

			},

      // overhover(event){
      //   console.log(event.currentTarget)
      //   event.currentTarget.getElementsByClassName("ranklist-item-hdiv")[0].style.display="none"
      //   event.currentTarget.getElementsByClassName("ranklist-item-sp")[0].style.display="block"
      // }

		}
		
	}
</script>

<style>
	#ranklist{
		width: 290px;
		height: 360px;
		background-color: aquamarine;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		
	}
	#ranklist-title{
		background-color: red;
		text-align: left;
		width: 290px;
		height: 35px;
		color: aliceblue;
		font-weight: bold;
		line-height: 35px;
		font-size: 20px;
	}
	#ranklist-title p{
		padding-left: 10px;
	}
	#ranklist-label{
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		width: 290px;
		height: 40px;
		background-color: coral;
		border-bottom: solid 1px #cccccc;
	}
	#ranklist-label p{
		width: 60px;
		height: 25px;
		font-size: 16px;
		line-height: 25px;
		text-align: center;
		background-color: red;
		margin-left: 8px;
		border-radius: 10px;
		color: aliceblue;
	}
	#ranklist-items{
		width: 290px;
		height: 285px;
		background-color: burlywood;
		
	}
	.ranklist-item{
		width: 290px;
		background-color: aqua;
		position: relative;
	}
	.ranklist-item-sp{
		width: 200px;
		height: 45px;
		line-height: 45px;
		font-size: 12px;
		/* margin-left: 10px; */
	}
	.ranklist-item-rank{
		position: absolute;
		width: 22px;
		height: 22px;
		top: 0px;
		left: 10px;
		z-index: 1;
		color: aliceblue;
		
	}
	.ranklist-item-rankimg{
		position: absolute;
		width: 22px;
		height: 22px;
		top: 0px;
		left: 10px;
	}
	.ranklist-item-hdiv{
		width: 290px;
		height: 95px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		display: none;
	}
	.ranklist-item-hdiv img{
		width: 70px;
		height: 70px;
		margin-right: 10px;
	}
	.ranklist-item-prices{
		height: 50px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-start;
	}
	
</style>