<template>
  <div id="imageshow-m">

    <img src="@/../public/imageshow-m-1.webp" alt="">
    <img src="@/../public/imageshow-m-2.webp" alt="">
    <img src="@/../public/imageshow-m-3.webp" alt="">
    <img src="@/../public/imageshow-m-1.webp" alt="">
    <img src="@/../public/imageshow-m-2.webp" alt="">
    <img src="@/../public/imageshow-m-3.webp" alt="">

  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

#imageshow-m{
  width: 1200px;
  height: 380px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  background-color: aquamarine;
  flex-wrap: wrap;
}

</style>