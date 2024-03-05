<template>
<div class="wrapper">
  <div class="header-wrapper">
   <div class="header-title">
     <span>空气质量-良好</span>
     <span>广州市</span>
   </div>
   <div class="header-text">
     <span>55</span>
     <span>阴</span>
   </div>
   
  </div>
  <div class="body-wrapper">
    <div class="body">
      <div class="data-wrapper">
        <div class="data">
          <img class="data-logo" src="/static/images/door.png"/>
          <div class="data-text">
            <div class="data-title">开关</div>
            <div class="data-value">
              <switch  @change="onDoorChange" :checked ="Door" color="#3d7ef6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { connect } from 'mqtt/dist/mqtt.js';

const mqttUrl = "wxs://zgmzgm.top:8084/mqtt"

export default {
  data () {
    return {
      client:{},
      Door:false,
      };
  },


  components: {
   
  },

  methods: {
    onDoorChange(event){
      var that = this
      console.log(event.mp.detail)
      let sw = event.mp.detail.value
      that.Door = sw
      if(sw){
        that.client.publish('/wangqiu/sub','{"door":2}',function (err){
          if(!err){
            console.log("成功下发命令将开关打开")
          }
        })
      }
        },
  },
 
 onShow() {
      var that = this
      that.client = connect ( mqttUrl )
      that.client.on('connect',function(){
      console.log('成功连接mqtt服务器')
      that.client.subscribe("/wangqiu/pub",function(err){
        if(!err){
          console.log('成功订阅设备上行数据Topic')
        }
      })
    })
    that.client.on('message',function(topic,message){
      console.log(topic)
      let dataFromDev = {}
      dataFromDev = JSON.parse(message),
      console.log(dataFromDev)
      that.Door = dataFromDev.Door
    })
   }
    
 
};
</script>

<style lang="scss" scoped>
  .wrapper{
    padding: 35px;
    .header-wrapper{
      background-color: #aabfeaf0;
      border-radius: 30px;
      color: #fff;
      box-shadow: #d6d6d6 0px 0px 15px;
      padding: 50px 50px;
      .header-title{
      display: flex;
      justify-content: space-around;
      
    }
    .header-text{
      font-size: 32px;
      font-weight: 500;
      display: flex;
      justify-content: space-between;
    }
    
  }
  .data-wrapper{
     margin-top: 50px;
    display:flex;
     justify-content: center;
     .data{
       background-color: rgb(214, 228, 241);
       width: 200px;
       height: 200px;
       border-radius: 60px;
       display:flex;
       justify-content: space-around;
       padding: 0 60px;
       box-shadow: #b8c2bb 0px 5px;
       .data-logo{
         height: 160px;
         width: 200px;
         margin-top: 26px;
         justify-content: space-between;
       }
       .data-text{
         margin-top: 40px;
         color: #ffffff;
         .data-title{
           font-size: 30px;
           text-align: rightS;
           
         }
         .data-value{
           font-size: 75px;
         }
       }
  }
  }}

</style>
