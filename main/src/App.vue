<template>
  <div class="root">
    <img src="./assets/images/logo.jpeg" alt="">
    <h1>{{ message }}</h1>
    <span class="test">测试样式</span>
    <router-link to="/home" >to home</router-link>
    <router-link to="/about" >to about</router-link>
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      message: 'this is app'
    }
  }
}
</script>
<style>
.root {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
img {
  align-self: center;
  height: 100%;
}
h1 {
  text-align: center;
}
</style>
<style scoped>
.test {
  font-size: 30px;
}
</style>