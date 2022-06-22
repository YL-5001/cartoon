<template>
  <div class="video">
      <h2>欢迎</h2>
      <video ref="myvideo" @canplay="getTotal" @timeupdate="timeUpdate">
          <source :src = "src">
      </video>
      <div class="controls">
          <div class="con_left">
              <!-- 动态绑定图表样式 -->
                <span :class="{'iconfont icon-24gf-play' : !isPaused,'icon-shipinbofangshizanting' : isPaused}" @click="togglePlay"></span>
                <!-- 大暂停键，点击后时间回到起始值 -->
                <span class="iconfont icon-zanting" @click="stopPlay"></span>
                <!-- 播放总时长 -->
                <span>{{currentTime}}/{{totalTime}}</span>
          </div>
          <div class="con_right">
              <!-- 声音 -->
              <!-- <span class=""></span> -->
              <!-- 全屏 -->
              <span class="iconfont icon-bg-fullscreen"></span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:['src'],
    data() {
        return {
            myvideo: null,
            isPaused: false,
            //当前播放时间
            currentTime:'00:00',
            //总时长
            totalTime:''
        }
    },
    mounted(){
        this.myvideo = this.$refs.myvideo
    },
    methods:{
        //播放与暂停
        togglePlay(){
            if(isPaused){
                this.myvideo.play()
            }
            else{
                this.myvideo.pause()
            }
            //修改播放状态
            this.isPaused = !this.isPaused
        },
        //大暂停
        stopPlay(){
            this.myvideo.pause()
            //currentTime属性标记当前播放时间
            this.myvideo.currentTime = 0
            //重置播放状态
            this.isPaused = false
        },
        //获取总时长
        getTotal(){
            this.totalTime = this.timeFormat(this.myvideo.duration)
        },
        //时间格式化
        timeFormat(time){
            let hour = Math.floor(time / 3600)
            let minute = Math.floor((time % 3600) / 60)
            let second = Math.floor(time % 60)
            hour = hour < 10 ? '0' + hour : hour
            minute = minute < 10 ? '0' + minute : minute
            second = second < 10 ? '0' + second : second
            return `${hour}:${minute}:${second}`
        },
        //获取当前视频播放到的时间
        timeUpdate(){
            this.currentTime = this.timeFormat(this.myvideo.currentTime)
        }

    }

}
</script>

<style lang='less' scoped>
.video {
    position: relative;
    video {
        width: 100%;
        height: 100%;
    }
    .controls {
        width: 100%;
        height: 40px;
        position: absolute;
        bottom: 0;
        left: 0;
        background: rgba(0,0,0,0.5);
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
            padding: 0 5px;
            color: #fff;
        }
    }
}
</style>