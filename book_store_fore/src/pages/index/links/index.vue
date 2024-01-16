<template>
	<div id="links">
		<ul>
			<li>首页</li>
			<li>主题出版</li>
			<li>中版书房</li>
			<li>新华优选</li>
			<li>新华定制</li>
			<li>特惠精选</li>
			<li>专业考试</li>
			<li>新华直播</li>
			<li>礼品卡</li>
			<li>新时代新经典</li>
		</ul>
	</div>
</template>

<script>
</script>

<style>
	#links{
		background-color: aqua;
		width: 990px;
		height: 50px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}
		
	#links ul{
		margin-left: 10px;
		
		width: 910px;
		height: 50px;
		background-color: bisque;
		display: flex;
		flex-direction: row;
		justify-items: flex-start;
		align-items: center;
		font-size: 16px;
		
	}
	#links li{
		list-style: none;
		margin-left: 26px;
	}
</style>