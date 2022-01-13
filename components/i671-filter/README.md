# 兼容平台说明
目前测试的平台有H5、微信小程序、APP都可以兼容。

# 使用说明
在页面中使用
```
<i671-filter
  @result="filterResult"
  :headerTextList="headerTextList"
  :checkboxList="checkboxList"
  :radioList="radioList"></i671-filter>
```

# 参数

| 参数 | 类型 | 默认值 | 是否必填 | 使用说明 |
| ------- | ------- | ------- | ------- |------- |
| headerTextList | Array | [] | 是 | 头部默认文字与key |
| radioList | Array | [] | 是 | 单选数据列表(第一个) |
| checkboxList | Array | [] | 是 | 多选数据列表(最后一个) |
| @result | EventHandle |  | 否 | 选择时触发，返回Object |

### 1.headerTextList属性说明(数组必须为三项)

| 名称 | 说明 | 是否必填 |
| ------- | ------- | ------- |
| name | 名称 | 是 |
| key | key | 是 |

### 2.radioList属性说明

| 名称 | 说明 | 是否必填 |
| ------- | ------- | ------- |
| name | 名称 | 是 |
| key | key | 是 |

### 3.checkboxList属性说明
```
const checkboxList = ['第一项', '第二项', '第三项', ....]
```

# 使用实例
```
<template>
  <view class="eg-filter">
    <i671-filter
      @result="filterResult"
      :headerTextList="headerTextList"
      :checkboxList="checkboxList"
      :radioList="radioList"></i671-filter>
      
    <view class="eg-filter-list">
    </view>
  </view>
</template>

<script>
  import i671Filter from '@/components/i671-filter/i671-filter.vue'
  
  export default {
    data () {
      return {
        headerTextList: [{
          name: '户型',
          key: 'house_type'
        }, {
          name: '价格',
          key: 'price_sort'
        }, {
          name: '配置筛选',
          key: 'filtrate'
        }],
        
        // 户型
        radioList: [{
          name: '全部',
          key: 0
        }, {
          name: '单间',
          key: 1
        }, {
          name: '公寓',
          key: 2
        }, {
          name: '套房',
          key: 3
        }, {
          name: '写字楼',
          key: 4
        }],
        
        // 多选
        checkboxList: [
          '冰箱', '电视', '洗衣机',
          '热水器', '空调', '宽带',
          '沙发', '床', '暖气',
          '衣柜', '可做饭', '卫生间',
          '阳台', '智能门锁', '油烟机',
          '燃气灶', '座椅', '拎包入住'
        ]
      }
    },
    components: {
      i671Filter
    },
    methods: {
      // 获取结果
      filterResult (data) {
        console.log(data)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .eg-filter {
    .eg-filter-list {
      padding-top: 100rpx;
    }
  }
</style>
```