<template>
  <div class="root">
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