<template>
  <div class="home">
    <a href="javascript:void(0);" @click="toJump(0)">跳转主线页面</a>
    <a href="javascript:void(0);" @click="toJump(1)">跳转自定义页面</a>
    {{ message }}
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      message: 'this is base page'
    }
  },
  methods: {
    toJump(type) {
      const { origin } = window.location
      switch (type) {
        case 0:
          window.location.replace(`${origin}/main/#/`)
          break
        case 1:
          window.location.replace(`${origin}/custom/#/`)
          break
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
}
</style>