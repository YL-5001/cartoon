<template>
  <div>
      <!-- <h1>当前求和：{{$store.state.sum}}</h1>
      <select v-model.number="n">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
      </select>
      <button @click="increment">+</button> -->
      <!-- <div @click="watch">点我看数据<h2 v-show="a === 1" v-for="(value,key) in $store.state">state中数据：{{key}}-{{value}}</h2> </div>
      <div @click="watch1">点我看车1<h2 v-show="a === 2" v-for="(value,key) in $store.state.car[0]">state中数据：{{key}}-{{value}}</h2> </div>
      <div @click="watch2">点我看车2<h2 v-show="a === 3" v-for="(value,key) in $store.state.car[1]">{{key}}-{{value}}</h2> </div> -->
      <h2 v-show="$store.state.n === 2" v-for="(value,key) in $store.state.car[0]" :key="key">{{key}}-{{value}}</h2>
      <h2 v-show="$store.state.n === 3" v-for="(value,key) in $store.state.car[1]" >{{key}}-{{value}}</h2>
  </div>
</template>

<script>
export default {
    name:'Count',
    data() {
        return {
            n:1
        }
    },
    methods:{
        increment(){
            this.$store.dispatch('jia',this.n)
        },
        watch(){
            // console.log(this.$store.state)
            this.a = 1 
        },
        watch1(){
            // console.log(this.$store.state.car[0])
            this.a = 2 
        },
        watch2(){
            // console.log(this.$store.state.car1)
            this.a = 3 
        }
    },
    mounted() {
        // console.log('Count',this)
    }
}
</script>

<style>

</style>