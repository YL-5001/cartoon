<template>
    <div class="ContentBox">
        <h2>内容</h2>
        <Count></Count>
    </div>
</template>

<script>
import Count from '@/components/Count.vue'
export default {
    components: {
        Count
    }
}
</script>

<style scoped>
.ContentBox{
    width: 30vw;
}
</style>