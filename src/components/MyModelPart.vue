<template>
  <div class="ModelBox">
      <h2>Model</h2>
      <MyCartoon ref="myCartoon"></MyCartoon>
  </div>
</template>

<script>
import MyCartoon from './MyCartoon.vue'
export default {
  components:{
    MyCartoon
  },
  methods: {
    getMyCartoonClick(){
      this.$refs.myCartoon.getVideoTime()
    }
  },
}
</script>

<style scoped>
.ModelBox {
    width: 50vw;
    background-color: #fff;
}
</style>