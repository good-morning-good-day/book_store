<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
	<PageHeader></PageHeader>
	<router-view></router-view>
	<PageTail></PageTail>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PageHeader from '@/components/PageHeader.vue'
import PageTail from '@/components/PageTail.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
	PageHeader,
	PageTail
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* background-color: black; */

}

body,ol,ul,h1,h2,h3,h4,h5,h6,p,th,td,dl,dd,form,fieldset,legend,input,textarea,select{

margin:0;
padding:0

}
</style>
