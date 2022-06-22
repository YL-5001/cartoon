<template>
    <div class="NavBox">
        <el-tree class="nav" 
            :data="data" 
            node-key="$treeNodeId"
            ref="treeRef"
            :props="defaultProps" 
            @node-click="handleNodeClick">
        </el-tree>
        <!-- 底部按钮 -->
        <div class="allBtn">
          <!-- 添加 -->
          <div class="change">
            <dialogForm @func="getMsgFormSon"></dialogForm>
          </div>

          <!-- 删除 -->
          <div><button class="treeDel" @click="treeDel">删除</button></div>
          
          <!-- 修改 -->
          <div><button class="treeRevise" @click="treeRevise">修改</button></div>
          
        </div>
    </div>
</template>

<script>
import { log } from 'video.js';
import dialogForm from './dialogForm.vue'
  export default {
    data() {
      return {
        delData:{},
        msgFormSon: {},
        //测试：要新增的对象
        newCarObj:{name:'DaBen',cost:'30w'},
        data: [
          {
          $treeNodeId:1,
          label: '汽车',
          children: [{
            $treeNodeId:2,
            label: 'CAR1',
            },
            {
            $treeNodeId:3,
            label: 'CAR2'
            }]
          }, 
          {
          $treeNodeId:4,
          label: '战船',
          children: [{
            $treeNodeId:5,
            label: 'SHIP1',
            // children: [{
            //   label: '三级 2-1-1'
            // }]
          }, {
            $treeNodeId:6,
            label: 'SHIP2'
          }]
          },
        ],
        currentNode: "",
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    components:{
      dialogForm,
    },
    methods: {
      //接收子组件传递过来的数据(data就是form)
      getMsgFormSon(data){
        // console.log(data);
        this.msgFormSon = data
        if(this.msgFormSon.region === 'qiche') {
          this.data[0].children.push({label: this.msgFormSon.name})
          console.log(this.msgFormSon)
          //添加时选择的类型
          console.log(this.msgFormSon.region)
          // console.log(this.msgFormSon)
          this.$store.state.car.push(this.msgFormSon)
        }
        else if(this.msgFormSon.region === 'zhanchuan') {
          this.data[1].children.push({label: this.msgFormSon.name})
          console.log(this.msgFormSon)
          //添加时选择的类型
          console.log(this.msgFormSon.region)
          // console.log(this.msgFormSon)
          this.$store.state.ship.push(this.msgFormSon)
        }
      },
      //点击tree，更新Vuex里面的数据n
      handleNodeClick(data,n) {
        this.delData = data
        console.log(this.$store.state.car)
        // this.$store.state.n = n.id
        this.$store.state.n = data.$treeNodeId
        // this.$store.state.videoUrl = this.$store.state.car[data.$treeNodeId - 2].videoSrc
        // this.$store.commit('getN',n.id)
        // this.$store.commit('getSrc')
        console.log(this.$store.state.n)
        // console.log(this.$store.state.car[0])
        console.log(data.$treeNodeId)
        //视频
        // this.$store.state.videoUrl = this.$store.state.car[0].src
        // console.log(this.$store.state.videoUrl)
      },
      //点击添加新对象到store
      addToStore() {
        this.$store.state.car.push(this.newCarObj);
        // console.log(this.$store.state.car);
        // console.log(this.$store.state.car[2]);
        console.log(this.data[0].children);
      },
      //新增
      addNode(){
        let id = Math.ceil(Math.random() * 100);
        let treeD = { id: id, label: 'CAR3' };
        this.$refs.tree.append(treeD, this.currentNode.parent);
      },
      //删除
      treeDel(){
        this.$refs.treeRef.remove(this.delData)
      },
      //修改
      treeRevise(){
        console.log('点击了修改');
      }
    },
  }
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
    color: skyblue;
}
/* 所有按钮面板 */
.allBtn {
  position: absolute;
  left: 0;
  bottom:2vh;
  width: 20vw;
  /* width: 100%; */
  /* background-color: red; */
  display: flex;
  justify-content: space-around;
  /* justify-content: space-around; */
}
/* 删除按钮 */
.treeDel {
  padding: 2vh 1.5vw;
  border: none;
  color: #409EFF;
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: color .5s , background 1s;
}
.treeDel:hover {
  color: #fff;
  background-color: #fa3a0a;
}
/* 修改按钮 */
.treeRevise {
  padding: 2vh 1.5vw;
  border: none;
  color: #409EFF;
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: color .5s , background 1s;
}
.treeRevise:hover {
  color: #fff;
  background-color: #409EFF;
}
</style>