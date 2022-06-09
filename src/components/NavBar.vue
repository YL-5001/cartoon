<template>
    <div class="NavBox">
        <div class="intro">
            <span>基础模型管理</span>
            <br> 
            <span>部署模型管理</span> 
        </div>
        <el-tree class="nav" 
            :data="data" 
            :props="defaultProps" 
            @node-click="handleNodeClick">
        </el-tree>
        <button class="addBtn" @click="addToStore">添加</button>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        //测试：要新增的对象
        newCarObj:{name:'DaBen',cost:'30w'},
        data: [{
          label: '汽车',
          children: [{
            label: 'CAR1',
            },
            {
            label: 'CAR2'
            }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      //点击tree，更新Vuex里面的数据n
      handleNodeClick(data,b) {
        console.log(this.$store.state.car);
        console.log(this.newCarObj);
        this.$store.state.n = b.id
      },
      //点击添加新对象到store
      addToStore() {
        this.$store.state.car.push(this.newCarObj);
        console.log(this.$store.state.car);
      }
      // getMyData() {
      //   this.$axios.get("../../public/carData.json",{}).then(response => {})

      // }
    }
  };
</script>

<style scoped>
.NavBox {
    height: 100%;
    background-color: #eb7347;
}
.nav {
    width: 20vw;
    /* height: 100%; */
    /* background-color: transparent; */
    background: transparent;
    color: seagreen;
}
.addBtn {
  position: absolute;
  left: 5vw;
  bottom: 5vh;
}
/* .el-tree {
    background: transparent;
    color: seagreen;

} */
</style>