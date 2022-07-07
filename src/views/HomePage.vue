<template>
    <div class="container">
        <div class="box">
            <router-link to="/MyModel"><div class="box1"><span>模型1</span></div></router-link>
            <div class="box2"><span>模型2</span></div>
            <div class="box3"><span>模型3</span></div>
            <div class="box4"><span>模型4</span></div>
        </div>
    </div>
</template>

<script>
export default {
    
    components: {
        
    }
}
</script>

<style scoped lang="less">
.container {
    display: flex;
    align-items:center;  /*垂直居中*/
    justify-content: center;
    height: 100vh;
    .box {
        display: flex;
        align-items:center;  /*垂直居中*/
        justify-content: space-around;

        width: 100vw;
        height: 50vh;
        // background-color: pink;
        // margin:auto;
        // position: absolute;
        // top: 25%;
        // left: 25%;
        a {
            text-decoration: none;
        }
        
        .router-link-active {
            text-decoration: none;
        }
        .box1,
        .box2,
        .box3,
        .box4 {
            text-align:center;
            line-height: 50vh;
            width: 20vw;
            height: 100%;
            background-color: #eb7347;
            font-size: 3vw;
            color: #fff;
        }
    }
}
    
</style>