<template>
  <view class="lucky">
    <i671-lucky
      ref="lucky"
      startText="开始"
      :wIndex="wIndex"
      :luckyList="list"
      @onReadyStart="onReadyStart"
      @lotteryData="getLotterData"></i671-lucky>
  </view>
</template>

<script>
  import i671Lucky from '@/components/i671-lucky/i671-lucky.vue'
  
  export default {
    data () {
      return {
        wIndex: 0,
        list: [
          {
            img: '/static/i671-lucky/apple.png',
            text: 'iphone11'
          },
          {
            img: '/static/i671-lucky/apple.png',
            text: 'iphone12'
          },
          {
            img: '/static/i671-lucky/apple.png',
            text: 'iphone13'
          },
          {
            img: '/static/i671-lucky/apple.png',
            text: 'iphone14'
          },
          {
            img: '/static/i671-lucky/apple.png',
            text: 'iphone15'
          },
          {
            img: '/static/i671-lucky/apple.png',
            text: 'iphone16'
          }
        ]
      }
    },
    components: {
      i671Lucky
    },
    methods: {
      // 开始转动
      onReadyStart () {
        // 后台处理获得开奖数据
        this.wIndex = 2
        this.$refs.lucky.onStart()
      },
      
      // 获取停止转动时数据
      getLotterData (data) {
        console.log(data)
      }
    }
  }
</script>

<style>
  .lucky {
    padding: 30rpx;
  }
</style>
