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





  #muticlass{
    background-color: rgb(143,118,108);
    width: 210px;
    height: 650px;
    color: aliceblue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }

  #muti-title{
    width: 210px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: black;
  }
  #muti-items{
    width: 210px;
    height: 600px;
    background-color: blue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }

  .muti-item{
    width: 210px;
    height: 60px;
    background-color: coral;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .muti-item-p{
    width: 210px;
    height: 24px;
    background-color: darkgoldenrod;
    font-size: 16px;
    line-height: 25px;
  }

  .muti-item-lis{
    width: 210px;
    height: 36px;
    background-color: firebrick;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;


  }

  .muti-item-lis li{

    margin-left: 30px;
    list-style: none;
    font-size: 12px;
    /* width: 100px; */
    /* width: fit-content; */
    /* margin-left: 300px; */
    /* float: left; */
  }
  .item-hover{
    /* background-color: darkcyan; */
    width: 700px;
    /* height: 100px; */
    position: absolute;
    left: 210px;
    top: 0px;
    box-shadow: 0 0 5px 1px darkgray;
    display: none;
    background-color: aliceblue;
  }
  .hover-ul{
    width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }
  .hover-li{
    width: 660px;
    /* height: 60px; */
    /* background-color: cornflowerblue; */
    border-bottom: solid 2px darkgray;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .hover-li p{
    width: 80px;
    font-size: 12px;
    color: black;
    font-weight: bold;
    text-align: left;
  }
  .hover-item-ul{
    /* margin-left: 40px; */
    width: 600px;
    /* background-color: chartreuse; */
    /* 		display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center; */
  }
  .hover-item{
    height: 60px;
    height: 20px;
    list-style: none;
    float: left;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 12px;
    border-left: solid 2px darkgray;
    color: darkgray;
  }
  .muti-item:hover  .item-hover{
    display: block;
  }

</style>