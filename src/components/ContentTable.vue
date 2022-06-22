<template>
    <!-- :data只能读数组的数据 -->
    <!-- Object.values($store.state.car[0])把对象转换成数组形式,但只是value值放入数组 -->
    <!-- $store.state.n === 2 ? [this.$store.state.car[0]] : $store.state.n === 3 ? [this.$store.state.car[1]] : [ ] -->
  <el-table
    :data = "chooseData()"
    border
    style="width: 100%">
    <el-table-column
      prop="name"
      label="名称">
    </el-table-column>
    <el-table-column
      prop="cost"
      label="时长">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        // tableData: [{
        //   date: '2016-05-02',
        //   name: '王小虎',
        //   cost: '上海市普陀区金沙江路 1518 弄'
        // }, {
        //   date: '2016-05-04',
        //   name: '王小虎',
        //   cost: '上海市普陀区金沙江路 1517 弄'
        // }, {
        //   date: '2016-05-01',
        //   name: '王小虎',
        //   cost: '上海市普陀区金沙江路 1519 弄'
        // }, {
        //   date: '2016-05-03',
        //   name: '王小虎',
        //   cost: '上海市普陀区金沙江路 1516 弄'
        // }]
      }
    },
    methods: {
      //判断显示哪个数据
      chooseData(){
        let formData
        switch (this.$store.state.n) {
          case 2:
            formData = [this.$store.state.car[0]]
            break;
          case 3:
            formData = [this.$store.state.car[1]]
            break;
          case 5:
            formData = [this.$store.state.ship[0]]
            break;
          case 6:
            formData = [this.$store.state.ship[1]]
            break;
          case 7:
            formData = [this.$store.state.car[2]]
            break;
          default:
            break;
        }
        return formData
      }
    },
  }
</script>