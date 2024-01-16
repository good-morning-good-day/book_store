<template >
	<div id="index-page">
<!--		<Select></Select>-->
<!--		<div id="LinksAndMuti">-->
<!--			<MultClass></MultClass>-->
<!--			<Links ></Links>-->
			<div id="ImgAndSR">
				<div id="SlideAndRank">
					<SlideShow></SlideShow>
					<RankList></RankList>
				</div>
        <div style="margin-left: 220px;">
          <ImageShowT></ImageShowT>
        </div>

			</div>
<!--    </div>-->


    <NewGoods></NewGoods>

    <ImageShowM></ImageShowM>
		<!-- </div> -->

	</div>
	
</template>

<script>
	
	// import Select from '@/pages/index/select'
	// import Links from '@/pages/index/links'
	// import MultClass from '@/pages/index/multclass'
	import SlideShow from '@/pages/index/slideshow'
	import RankList from '@/pages/index/ranklist'
	import ImageShowT from '@/pages/index/imageshow-t'
  import NewGoods from '@/pages/index/newgoods'
  import ImageShowM from '@/pages/index/imageshow-m'
	export default {
	  // name: 'in',
	  components: {
	    // Select,
		// Links,
		// MultClass,
		SlideShow,
		RankList,
		ImageShowT,
      NewGoods,
      ImageShowM
	  }
	}

</script>

<style>
	#index-page{
		width: 1200px;
		height: 1850px;
		background-color: chartreuse;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
	}
	#LinksAndMuti{
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
		flex-wrap: wrap;
		position: relative;
	}
	#ImgAndSR{
		background-color: cornflowerblue;
		/*width: 980px;*/
		/*height: 580px;*/
    width: 1200px;
    height: 580px;
		/*position: absolute;*/
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
		/*left: 220px;*/
		/*top: 20px;*/
    margin-bottom: 20px;
	}
	#SlideAndRank{
    width: 980px;
    height: 580px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
    margin-left: 220px;
	}


</style>