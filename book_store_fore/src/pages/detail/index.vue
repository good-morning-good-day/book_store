<template>
  <div id="detail">
<!--    <div id="detail-class">-->
      <el-breadcrumb separator-class="el-icon-arrow-right" id="detail-class">
        <el-breadcrumb-item class="detail-class-item">首页</el-breadcrumb-item>
        <el-breadcrumb-item class="detail-class-item">活动管理</el-breadcrumb-item>
        <el-breadcrumb-item class="detail-class-item">活动列表</el-breadcrumb-item>
        <el-breadcrumb-item class="detail-class-item">活动详情</el-breadcrumb-item>
      </el-breadcrumb>
<!--    </div>-->
    <div id="detail-info">
      <div id="detail-info-top">
        <img src="@/../public/detail-02.webp" />
        <div id="detail-info-top-right">
          <p style="font-size: 25px">少年励志读书吧（全10册）</p>
<!--          margin-top: 20px;margin-bottom: 20px-->
          <p style="font-size: 17px;"><span style="color: #1890FF;">应急管理出版社</span> 编 <span style="color: #1890FF;">蔡景仙</span> 著</p>
<!--          <div >-->

            <div id="detail-countDown">
              <div id="detail-countDown-t">
                <div id="detail-countDown-t-l">
                  <!--                <svg t="1706117873116" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11842" width="30" height="30">-->
                  <!--                  <path d="M512 64C264.57 64 64 264.58 64 512s200.57 448 448 448c247.42 0 448-200.58 448-448-0.34-247.28-200.72-447.66-448-448z m0 803.31c-196.24 0-355.31-159.08-355.31-355.31S315.76 156.69 512 156.69c196.23 0 355.31 159.08 355.31 355.31-0.34 196.09-159.22 354.97-355.31 355.31z" p-id="11843"></path><path d="M512 295.72h-92.69v308.97h308.97V512H512z" p-id="11844"></path>-->
                  <!--                </svg>-->
                  <svg t="1706193588546" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10659" width="30" height="30">
                    <path d="M512.414 62.99c-247.824 0-449.424 201.6-449.424 449.424 0 247.842 201.592 449.424 449.424 449.424 247.842 0 449.424-201.582 449.424-449.424 0-247.824-201.582-449.424-449.424-449.424zM672.236 576.62h-191.574c-17.81-0.036-32.239-14.464-32.274-32.271v-255.441c0-0.016 0-0.035 0-0.053 0-17.695 14.345-32.040 32.040-32.040 0.020 0 0.037 0 0.057 0 0.016 0 0.037 0 0.060 0 17.695 0 32.040 14.345 32.040 32.040 0 0.020 0 0.037 0 0.057v223.673h159.822c0.019 0 0.041 0 0.063 0 17.695 0 32.040 14.345 32.040 32.040 0 0.022 0 0.044 0 0.067 0 17.771-14.499 31.928-32.274 31.928z" p-id="10660" fill="#ffffff"></path>
                  </svg>
                  <span>直降</span>
                </div>
                <div id="detail-countDown-t-r">
                  <span>距离活动结束</span>
                  <span style="margin-left: 5px;margin-right: 5px;">157天</span>
                  <span style="background-color: black;width: 30px;height: 35px;line-height: 35px">23</span>
                  <span style="margin-left: 5px;margin-right: 5px;">:</span>
                  <span style="background-color: black;width: 30px;height: 35px;line-height: 35px">23</span>
                  <span style="margin-left: 5px;margin-right: 5px;">:</span>
                  <span style="background-color: black;width: 30px;height: 35px;line-height: 35px">23</span>
                </div>
              </div>
              <div id="detail-countDown-b">
                <span style="width: 90px;height: 90px;line-height: 90px;font-size: 17px;">活动价</span>
                <span  style="width: 90px;height: 90px;line-height: 90px;font-size: 25px;color: #C62E2D;font-weight: bold;">￥17.80 </span>
                <span style="width: 90px;height: 90px;line-height: 90px;font-size: 17px;text-decoration: line-through;">￥158.00</span>
              </div>
            </div>


<!--          </div>-->
          <div id="detail-address">
            <div class="block">
              <span class="demonstration" style="margin-right: 30px;">配送至</span>
<!--              <span class="demonstration">默认 click 触发子菜单</span>-->
              <el-cascader
                  v-model="value"
                  :options="options"
                  @change="handleChange"></el-cascader>
            </div>
            <span>该地区有货</span>
          </div>
          <div id="detail-num">
            <span>数量</span>
            <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
          </div>
          <div id="detail-check">
            <div id="detail-check-car">加入购物车</div>
            <div id="detail-check-pay">立即购买</div>
          </div>
        </div>
      </div>
      <div id="detail-info-bottom">
        <ul id="detail-info-bottom-t">
          <li>
            <img src="@/../public/detail-01.webp" />
          </li>
          <li>
            <img src="@/../public/detail-01.webp" />
          </li>
          <li>
            <img src="@/../public/detail-01.webp" />
          </li>
        </ul>
        <div id="detail-info-bottom-b">
          <div id="detail-info-bottom-b-share">
            <svg t="1706112935250" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9649" width="15" height="15">
              <path d="M768.73106 703.537712c-35.606921 0-67.945574 14.793214-91.167479 38.359147l-309.109357-171.670082c9.116748-17.545439 14.621199-37.155048 14.621199-58.312783 0-12.55703-2.408198-24.426004-5.676466-35.950949l304.63699-189.215522c22.705863 20.469679 52.464304 33.198723 85.146985 33.198723 70.525785 0 127.978498-57.452713 127.978498-127.978498S837.708718 63.989249 767.182933 63.989249s-127.978498 57.452713-127.978498 127.978498c0 14.621199 2.92424 28.382328 7.396607 41.455401L344.716278 420.746514c-23.049891-22.705863-54.700487-36.983034-89.791366-36.983034-70.525785 0-127.978498 57.452713-127.978498 127.978498s57.452713 127.978498 127.978498 127.978498c25.630102 0 49.540064-7.740635 69.493701-20.813707l321.150344 178.378633c-3.096254 11.008903-5.160423 22.18982-5.160423 34.058794 0 70.525785 57.452713 127.978498 127.978498 127.978498s127.978498-57.452713 127.978498-127.978498S839.256845 703.537712 768.73106 703.537712zM767.182933 127.978498c35.262893 0 63.989249 28.726356 63.989249 63.989249s-28.726356 63.989249-63.989249 63.989249-63.989249-28.726356-63.989249-63.989249S731.92004 127.978498 767.182933 127.978498zM191.107677 511.913993c0-35.262893 28.726356-63.989249 63.989249-63.989249s63.989249 28.726356 63.989249 63.989249-28.726356 63.989249-63.989249 63.989249S191.107677 547.176886 191.107677 511.913993zM768.73106 895.505459c-35.262893 0-63.989249-28.726356-63.989249-63.989249s28.726356-63.989249 63.989249-63.989249 63.989249 28.726356 63.989249 63.989249C832.720309 866.951117 803.993953 895.505459 768.73106 895.505459z" fill="#515151" p-id="9650"></path>
            </svg>
            <span style="margin-left: 3px;">分享</span>
          </div>
          <div id="detail-info-bottom-b-collect">
            <svg t="1706215766437" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11861" width="15" height="15">
              <path d="M171.712 571.648l0.352 0.32 287.904 252.8a64 64 0 0 0 82.912 1.344l296.832-244.544a215.584 215.584 0 1 0-301.824-300.576L512 316.672l-25.888-35.616a215.584 215.584 0 1 0-314.4 290.624zM32 407.584a279.584 279.584 0 0 1 480-194.944 279.584 279.584 0 0 1 480 194.944 278.144 278.144 0 0 1-113.024 224.512l-295.36 243.392a128 128 0 0 1-165.888-2.592L129.984 620.16A278.976 278.976 0 0 1 32 407.584z" fill="#C62E2D" p-id="11862"></path>
            </svg>
            <span style="margin-left: 3px;">收藏宝贝</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data(){
    return{
      value: [],
      num: 1,
      options: [{
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          children: [{
            value: 'yizhi',
            label: '一致'
          }, {
            value: 'fankui',
            label: '反馈'
          }, {
            value: 'xiaolv',
            label: '效率'
          }, {
            value: 'kekong',
            label: '可控'
          }]
        }, {
          value: 'daohang',
          label: '导航',
          children: [{
            value: 'cexiangdaohang',
            label: '侧向导航'
          }, {
            value: 'dingbudaohang',
            label: '顶部导航'
          }]
        }]
      }
      ]
    }
  },
  mounted() {

    console.log( document.getElementById("muti-items").style.visibility="hidden")

  },
  methods:{
    handleChange(value) {
      console.log(value);
    }
  }

}
</script>

<style scoped>

  #detail{
    width: 1200px;
    height: 700px;
    background-color: white;
  }
  #detail-class{
    background-color: #EAEBEA;
    height: 50px;
    width: 1200px;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
  }

  .el-breadcrumb  /deep/  .el-breadcrumb__separator{
    color: darkgray;
  }

  .el-breadcrumb  /deep/  .el-breadcrumb__inner
  {
    color: darkgray;

    /*!important;*/
  }

  #detail-info-top{
    width: 1160px;
    height: 410px;
    /*background-color: #00ff33;*/
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  #detail-info-top >img{
    width: 328px;
    height: 328px;
  }
  #detail-info-top-right{
    width: 700px;
    height: 400px;
    /*background-color: yellow;*/
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
  }
  #detail-countDown{
    width:700px;
    /*height:140px;*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #detail-countDown-t{
    background-image: url("@/../public/detail-bg.png");
    width:700px;
    height:50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  #detail-countDown-t-l{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 17px;
    margin-left: 20px;
    color: white;
  }

  #detail-countDown-t-r{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 17px;
    margin-right: 20px;
    color: white;
  }
  #detail-countDown-b{
    width:700px;
    height:75px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: #F7F5F1;
  }

  #detail-address{
    width: 700px;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  #detail-address > span{
    margin-left: 10px;
  }

  #detail-num{
    width: 700px;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  #detail-num >span{
    margin-left: 15px;
    margin-right: 30px;
  }

  #detail-check{
    width: 700px;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  #detail-check-car{
    width: 160px;
    height: 50px;
    background-color: white;
    border: 1px solid #C62E2D;
    margin-left: 20px;
    line-height: 50px;
    color: #C62E2D;
  }
  #detail-check-pay{
    width: 160px;
    height: 50px;
    background-color: #C62E2D;
    margin-left: 30px;
    line-height: 50px;
    color: white;
  }

  #detail-info-bottom{
    width: 1180px;
    height: 120px;
    /*background-color: #00ff33;*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 10px;
  }
  #detail-info-bottom-t{
    width: 360px;
    height: 67px;
    /*background-color: #cccccc;*/
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  #detail-info-bottom-t > li{
    width: 65px;
    height: 65px;
    border: 1px solid #C62E2D;
    list-style: none;
    margin-right: 10px;
  }
  #detail-info-bottom-b{
    width: 360px;
    height: 36px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    /*background-color: #ff6600;*/
    margin-top: 5px;
  }

  #detail-info-bottom-b-share{
    width: 70px;
    height: 36px;
    /*background-color: #42b983;*/
    line-height: 36px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    line-height: 36px;
  }

  #detail-info-bottom-b-collect{
    width: 100px;
    height: 36px;
    /*background-color: #42b983;*/
    line-height: 36px;
    margin-left: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

</style>