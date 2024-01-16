<template>
	<div id="imageshowT">
		<div class="muti-img-ls">
			<img class="muti-img-l" src="@/../public/muti-img1.webp" alt="">
			<img class="muti-img-l" src="@/../public/muti-img2.png" alt="">
		</div>
		<img id="muti-img-r" src="@/../public/muti-img3.webp" alt="">
	</div>
</template>

<script>
</script>

<style>
	#imageshowT{
		background-color: cornsilk;
		width: 980px;
		height: 200px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-top: 10px;
	}
	.muti-img-ls{
		width: 680px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.muti-img-l{
		width: 335px;
		height: 200px;
	}
	#muti-img-r{
		width: 290px;
		height: 200px;
	}
</style>






