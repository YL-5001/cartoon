<template>
    <div class="ContentBox">
        <h2>内容</h2>
        <ContentTable></ContentTable>
        <h3>视频时长：{{this.$store.state.videoTime}}</h3>
    </div>
</template>

<script>
import ContentTable from '@/components/ContentTable.vue'
export default {
    components: {
        ContentTable
    }
}
</script>

<style scoped>
.ContentBox{
    width: 30vw;
}
</style>