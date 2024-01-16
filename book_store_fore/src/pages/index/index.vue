<template >
	<div id="index-page">
		<Select></Select>
		<div id="LinksAndMuti">
			<MultClass></MultClass>
			<Links ></Links>
			<div id="ImgAndSR">
				<div id="SlideAndRank">
					<SlideShow></SlideShow>
					<RankList></RankList>
				</div>
				<ImageShowT></ImageShowT>
			</div>
		</div>
		
			
		<!-- </div> -->
		
	</div>
	
</template>

<script>
	
	import Select from '@/pages/index/select'
	import Links from '@/pages/index/links'
	import MultClass from '@/pages/index/multclass'
	import SlideShow from '@/pages/index/slideshow'
	import RankList from '@/pages/index/ranklist'
	import ImageShowT from '@/pages/index/imageshow-t'
	export default {
	  // name: 'in',
	  components: {
	    Select,
		Links,
		MultClass,
		SlideShow,
		RankList,
		ImageShowT,
	  }
	}

</script>

<style>
	#index-page{
		width: 1200px;
		height: 1000px;
		background-color: chartreuse;
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
		width: 980px;
		height: 580px;
		position: absolute;
		left: 220px;
		top: 50px;
	}
	#SlideAndRank{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}


</style>