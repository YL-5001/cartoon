<template>
        <el-container class="mycontain">
            <MyHeader></MyHeader>
            <el-container>
                <NavBar></NavBar>
                <MyModelPart></MyModelPart>
                <MyContent></MyContent>
            </el-container>
        </el-container>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'
import NavBar from '@/components/NavBar.vue'
import MyModelPart from '@/components/MyModelPart.vue'
import MyContent from '@/components/MyContent.vue'

export default {
    components: {
        MyHeader,
        NavBar,
        MyModelPart,
        MyContent
    }
}
</script>

<style scoped lang="less">
.mycontain {
    display: flex;
    flex-direction: column;
    height: 100vh;
}
</style>