<template>
	<div class="header">
		<div class="header-body">
			<div class="left">
				<p>早上好！ <font>abc</font> 新华伴你畅游书海。</p>
				<a href="#" class="logout"><font>退出登录</font></a>
			</div>
			<div class="right">
				<li>我的学习</li>
				<li>个人中心</li>
				<li>我的订单</li>
				<li>客户服务</li>
				<li>手机新华</li>
			</div>
		</div>
		
	</div>
</template>

<script>
</script>

<style>
	
	.header{
		width: 100%;
		height: 60px;
/* 		position: absolute;
		top: 0px; */
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background-color: #eaeaea;
	}
	
	.header-body{
		width: 1200px;
		height: 60px;
		/* background-color: aqua; */
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	
	.left{
		width:550px;
		height: 40px;
		/* background-color: azure; */
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}
	
	
	.right{
		width: 450px;
		height: 40px;
		/* background-color: red; */
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
	.right li{
		list-style: none;
	}
	
</style>