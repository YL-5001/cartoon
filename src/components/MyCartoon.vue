<template>
<div>
    <video 
        id="myVideo"
        :src = "chooseVideo()"
        class="video1"
        controls = true
        oncanplaythrough="myFunction(this)"
        >
    </video>
    <!-- <video 
        class="video2"
        autoplay
        loop = true
        >
        
        <source
            src="../assets/VCG42N1330709780.mp4"
            type="video/mp4"
            >
    </video> -->
    <div @click="getVideoTime">获取时长</div>
</div>
</template>

<script>
import Video from 'video.js'
export default {
data() {
    return {
        // videoUrl:require('../assets/VCG42N1336438262.mp4')
        // videoUrl : this.$store.state.car[0].src

    }
},
// mounted: function() {
//     this.getVideoTime()
// },
computed: {
 			refreshSwitchStatus () {
 				return this.$store.getters.getRefreshSwitch
 			}
 		},
watch:{
 			// 开关状态发生改变即调用**getVideoTime**方法
 			refreshSwitchStatus () {
 				this.getVideoTime()
 			}
 		},
methods: {
    // onInputFileChange() {
    //   var file = document.getElementById('file').files[0];
    //   var url = URL.createObjectURL(file);
    //   console.log(url);
    //   document.getElementById("video_id").src = url;
    // },
    //获取视频时长
    getVideoTime(){
        this.$store.state.videoTime = document.getElementById("myVideo").duration
        console.log(this.$store.state.videoTime)
        // let player = Video('myVideo')
        // var videoLength = player.duration()
        // console.log(videoLength)
    },
    //根据点击，更换视频地址
    chooseVideo(){
        let currentVideo 
        switch (this.$store.state.n) {
            case 1:
            currentVideo = ' '
            break;
          case 2:
            currentVideo = this.$store.state.car[0].src
            break;
          case 3:
            currentVideo = this.$store.state.car[1].src
            break;
          case 5:
            currentVideo = this.$store.state.ship[0].src
            break;
          case 6:
            currentVideo = this.$store.state.ship[1].src
            break;
          case 7:
            currentVideo = this.$store.state.car[2].src
            break;
          default:
            break;
        }
        return currentVideo
    },
    myFunction(ele) {
　　　　　//视频时长  单位秒
      alert(Math.floor(ele.duration));
      console.log(Math.floor(ele.duration));
    }
},

}
</script>

<style scoped>
#myVideo {
    width: 50vw;
    height: 50vh;
    /* border: none; */
}
.video2 {
    width: 30vw;
    margin: 0 10vw;
}
.video3 {
    width: 50vw;
    height: 50vh;
}
</style>