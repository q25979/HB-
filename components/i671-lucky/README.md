# 参数

| 参数 | 类型 | 默认值 | 是否必填 | 使用说明 |
| ------- | ------- | ------- | ------- |------- |
| startText | String | 开始 | 否 | 中奖按钮文字 |
| wIndex | Number | 0 | 否 | 中奖物品下标详细看第二张图 |
| luckyList | Array | [] | 是 | 抽奖物品列表 |

### 1.luckyList属性说明

| 名称 | 说明 | 是否必填 |
| ------- | ------- | ------- |
| img | 本地或网络地址 | 是 |
| text | 文字 | 是 |
| ... | 可新增自己的数据 | 否 |

# 使用实例
```
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

```