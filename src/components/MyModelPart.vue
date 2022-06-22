<template>
  <div class="ModelBox">
      <h2>Model</h2>
      <MyCartoon></MyCartoon>
  </div>
</template>

<script>
import MyCartoon from './MyCartoon.vue'
export default {
  components:{
    MyCartoon
  }
}
</script>

<style scoped>
.ModelBox {
    width: 50vw;
    background-color: #fff;
}
</style>