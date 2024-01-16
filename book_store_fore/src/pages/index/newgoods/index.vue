<template>

  <div id="newgoods">
    <div id="newgoods-t">
      <img src="@/../public/newgoods-icon.webp" id="newgoods-img" height="60px" />
      <div id="newgoods-t-r">
        <p>图书</p>
        <p>文创</p>
        <p>日百</p>
        <p>好食</p>
      </div>
    </div>
    <div id="newgoods-b">
      <img src="@/../public/newgoods-left-img.webp" width="241px" height="600px"/>
      <ul id="newgoods-b-ul">
        <li class="newgoods-b-ul-li">
          <img src="@/../public/newgoods-item-img.webp">
          <div>
            <p>太有意思了，生活中的化学（全...）</p>
            <div class="newgoods-item-prices">
              <p>￥ 41.80</p>
              <p style="text-decoration: line-through">￥ 150.00</p>
            </div>
          </div>
        </li>
        <li class="newgoods-b-ul-li">
          <img src="@/../public/newgoods-item-img.webp">
          <div>
            <p>太有意思了，生活中的化学（全...）</p>
            <div>
              <p>￥ 41.80</p>
              <p>￥ 150.00</p>
            </div>
          </div>
        </li>
        <li class="newgoods-b-ul-li">
          <img src="@/../public/newgoods-item-img.webp">
          <div>
            <p>太有意思了，生活中的化学（全...）</p>
            <div>
              <p>￥ 41.80</p>
              <p>￥ 150.00</p>
            </div>
          </div>
        </li>
        <li class="newgoods-b-ul-li">
          <img src="@/../public/newgoods-item-img.webp">
          <div>
            <p>太有意思了，生活中的化学（全...）</p>
            <div>
              <p>￥ 41.80</p>
              <p>￥ 150.00</p>
            </div>
          </div>
        </li>
        <li class="newgoods-b-ul-li">
          <img src="@/../public/newgoods-item-img.webp">
          <div>
            <p>太有意思了，生活中的化学（全...）</p>
            <div>
              <p>￥ 41.80</p>
              <p>￥ 150.00</p>
            </div>
          </div>
        </li>
        <li class="newgoods-b-ul-li">
          <img src="@/../public/newgoods-item-img.webp">
          <div>
            <p>太有意思了，生活中的化学（全...）</p>
            <div>
              <p>￥ 41.80</p>
              <p>￥ 150.00</p>
            </div>
          </div>
        </li>
        <li class="newgoods-b-ul-li">
          <img src="@/../public/newgoods-item-img.webp">
          <div>
            <p>太有意思了，生活中的化学（全...）</p>
            <div>
              <p>￥ 41.80</p>
              <p>￥ 150.00</p>
            </div>
          </div>
        </li>
        <li class="newgoods-b-ul-li">
          <img src="@/../public/newgoods-item-img.webp">
          <div>
            <p>太有意思了，生活中的化学（全...）</p>
            <div>
              <p>￥ 41.80</p>
              <p>￥ 150.00</p>
            </div>
          </div>
        </li>
      </ul>
    </div>

  </div>



</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

#newgoods{
  background-color: aqua;
  width: 1200px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#newgoods-t{
  width: 1200px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: antiquewhite;
}

#newgoods-t-r{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
#newgoods-t-r p{
  width: 80px;
  height: 30px;
  line-height: 30px;
  background-color: #C62E2D;
  border-radius: 15px;
  margin-right: 15px;
  color: #eaeaea;
}
#newgoods-b{
  width: 1200px;
  height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
}

#newgoods-b-ul{
  /*float: left;*/
  width: 1000px;
  height: 599px;
  border-top: 1px solid gray;
  border-left: 1px solid gray;
}

.newgoods-b-ul-li{
  /*display: inline;*/
  float: left;
  width: 238px;
  height: 298px;
  background-color: #00ff33;
  border-right: 1px solid gray;
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 15px;
}

.newgoods-item-prices{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: #C62E2D;
}

</style>