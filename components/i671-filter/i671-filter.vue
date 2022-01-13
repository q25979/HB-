<template>
  <view class="i671-filter">
    <view
      @touchmove.stop.prevent="moveHandle"
      id="i671filterHeader"
      class="i671-filter-list i671-bottom-1px">
      <view
        @click="onRadio"
        :class="{'i671-filter-item-active': headerIndex === 0}"
        class="i671-filter-item i671-filter-radio">
        <text v-if="radioIndex === -1">{{headerTextList[0].name}}</text>
        <text v-else>{{radioList[radioIndex].name}}</text>
        <view
          :class="{'i671-triangle-reverse': radioHeight > 0}"
          class="i671-triangle"></view>
      </view>
      <view
        @click="onSort"
        :class="{'i671-filter-item-active': headerIndex === 1}"
        class="i671-filter-item i671-filter-sort">
        <text>{{headerTextList[1].name}}</text>
      </view>
      <view
        @click="onCheckbox"
        :class="{'i671-filter-item-active': headerIndex === 2}"
        class="i671-filter-item i671-filter-checkbox">
        <text>{{headerTextList[2].name}}</text>
        <view
          :class="{'i671-triangle-reverse': checkboxHeight > 0}"
          class="i671-triangle"></view>
      </view>
    </view>

    <!-- 蒙层 -->
    <view
      class="i671-filter-mask"
      :style="'height:' + radioMaskHeight + 'px'"
      @click="onRadio()"
      @touchmove.stop.prevent="moveHandle">
      <view
        :style="'height:' + radioHeight + 'rpx'"
        :class="{'i671-mask-transition': radioHeight > 0}"
        class="i671-filter-mask-radio">
        <view
          v-for="(item, index) in radioList"
          :key="index"
          @click.stop="onRadioItem(index)"
          :class="{'i671-radio-active': radioIndex === index}"
          class="i671-filter-mask-radio-item i671-bottom-1px">
          <view>{{item.name}}</view>
          <image
            v-if="radioIndex === index"
            src="@/static/i671-filter/right.svg"></image>
        </view>
      </view>
    </view>

    <view
      class="i671-filter-mask"
      :style="'height:' + checkboxMaskHeight + 'px'"
      @click="onCheckbox()"
      @touchmove.stop.prevent="moveHandle">
      <view
        :style="'height:' + checkboxHeight + 'rpx'"
        :class="{'i671-mask-transition': checkboxHeight > 0}"
        class="i671-filter-mask-checkbox">
        <view
          v-for="(item, index) in checkboxList"
          :key="index"
          @click.stop="onCheckboxItem(index)"
          :class="{'i671-checkbox-active': checkboxSelected[index]}"
          class="i671-filter-mask-checkbox-item">
          <view>{{item}}</view>
        </view>
        <view class="checkbox-btn-group">
          <view @click.stop="onCheckboxReset">重置</view>
          <view @click.stop="onCheckboxConfirm">确认</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data () {
      return {
        // 顶部属性
        headerIndex: -1,

        // 单选属性
        radioShow: false,
        radioIndex: -1,
        radioHeight: 0,
        radioMaskHeight: 0,

        // 排序
        sort: 'desc',

        // 多选属性
        checkboxShow: false,
        checkboxSelected: [],
        checkboxHeight: 0,
        checkboxMaskHeight: 0,
      }
    },
    props: {
      // 头部文字
      headerTextList: {
        type: Array
      },

      // 单选数据列表-第一个
      radioList: {
        type: Array
      },

      // 多选数据列表
      checkboxList: {
        type: Array
      }
    },
    created () {
      this.onCheckboxReset()
    },
    watch: {
      // 处理隐藏
      headerIndex (index) {
        if (index === 0) {
          this.checkboxShow = true
          this.onCheckbox()
        } else if (index === 1) {
          this.radioShow = true
          this.checkboxShow = true
          this.onRadio()
          this.onCheckbox()
        } else if (index === 2) {
          this.radioShow = true
          this.onRadio()
        }
      }
    },
    methods: {
      // 禁止滚动
      moveHandle () {},

      // 获取chebox数据
      getCheckboxArray () {
        let checkboxArray = [], count = 0
        this.checkboxList.forEach((item, index) => {
          if (this.checkboxSelected[index]) {
            checkboxArray[count++] = item
          }
        })
        return checkboxArray
      },

      // chebox确定
      onCheckboxConfirm () {
        this.onCheckbox()
        this.handleDataReturn()
      },

      // chebox重置
      onCheckboxReset () {
        let checkboxArray = []
        this.checkboxList.forEach((item, index) => {
          checkboxArray[index] = false
        })
        this.checkboxSelected = checkboxArray
      },

      // 点击多选item
      onCheckboxItem (index) {
        this.$set(this.checkboxSelected, index, !this.checkboxSelected[index])
      },

      // 点击多选
      onCheckbox () {
        this.checkboxShow = !this.checkboxShow
        if (this.checkboxShow) {
          this.headerIndex = 2
          this.checkboxMaskHeight = this.getMaskNeedHeight()

          let step = this.checkboxList.length % 3 > 0 ? 1 : 0
          let h = (parseInt(this.checkboxList.length / 3) + step) * 100 + 130
          this.checkboxHeight = h
        } else {
          this.checkboxMaskHeight = 0
          this.checkboxHeight = 0
        }
      },

      // 点击排序
      onSort () {
        this.headerIndex = 1
        this.sort = this.sort === 'desc' ? 'asc' : 'desc'
        this.handleDataReturn()
      },

      // 点击单选item
      onRadioItem (index) {
        this.radioIndex = index
        this.onRadio()
        this.handleDataReturn()
      },

      // 单选显示控制
      onRadio () {
        this.radioShow = !this.radioShow
        if (this.radioShow) {
          this.headerIndex = 0
          this.radioMaskHeight = this.getMaskNeedHeight()
          this.radioHeight = this.radioList.length * 100
        } else {
          this.radioMaskHeight = 0
          this.radioHeight = 0
        }
      },

      // 获取蒙层所需的高度
      getMaskNeedHeight () {
        let systemInfo = uni.getSystemInfoSync()
        let headerHeight = 100 * systemInfo.screenWidth / 750

        return systemInfo.windowHeight - headerHeight
      },

      // 处理数据返回
      handleDataReturn () {
        let obj = {}

        obj[this.headerTextList[0].key] = this.radioIndex < 0
          ? ''
          : this.radioList[this.radioIndex].key
        obj[this.headerTextList[1].key] = this.sort
        obj[this.headerTextList[2].key] = this.getCheckboxArray()
        this.$emit('result', obj)
      }
    }
  }
</script>

<style lang="scss" scoped>
  $i671filterActiveColor: #FFAC00;

  .i671-filter {
    position: absolute;
    top: 0;
    width: 750rpx;
    .i671-bottom-1px {
      position: relative;
      &::after {
        position: absolute;
        bottom: 0;
        height: 2rpx;
        width: 100%;
        content: '';
        background-color: #E1E1E1;
        transform: scaleY(0.5);
      }
    }
    .i671-filter-list {
      height: 100rpx;
      position: fixed;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      background-color: white;
      .i671-filter-item {
        $defaultColor: #999999;
        display: flex;
        align-items: center;
        text {
          color: $defaultColor;
        }
        .i671-triangle {
          border: 10rpx solid $defaultColor;
          border-top-color: transparent;
          border-right-color: transparent;
          border-left-color: transparent;
          margin-left: 10rpx;
          position: relative;
          bottom: 6rpx;
          &.i671-triangle-reverse {
            bottom: -4rpx;
            transform: rotate(180deg);
          }
        }
        &.i671-filter-item-active {
          text {
            color: $i671filterActiveColor;
          }
          .i671-triangle {
            border-bottom-color: $i671filterActiveColor;
          }
        }
      }
    }

    .i671-filter-mask {
      position: fixed;
      top: 100rpx;
      // #ifdef H5
      top: 200rpx;
      // #endif
      width: 100%;
      z-index: 999;
      height: 0;
      background-color: rgba(0, 0, 0, .5);
      overflow: hidden;
      .i671-mask-transition {
        transition: height 0.5s;
      }
      .i671-filter-mask-radio,
      .i671-filter-mask-checkbox {
        background-color: white;
        overflow: hidden;
        .i671-filter-mask-radio-item {
          padding: 0 30rpx;
          height: 100rpx;
          display: flex;
          align-items: center;
          justify-content: space-between;
          view {
            color: #333333;
          }
          image {
            width: 50rpx;
            height: 50rpx;
          }
          &.i671-radio-active {
            view {
              color: $i671filterActiveColor;
            }
          }
        }
        &.i671-filter-mask-checkbox {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          padding: 20rpx;
        }
        .i671-filter-mask-checkbox-item {
          width: calc(33.33% - 13rpx);
          margin-bottom: 20rpx;
          height: 80rpx;
          line-height: 80rpx;
          text-align: center;
          border: 1rpx solid #e1e1e1;
          border-radius: 6rpx;
          &.i671-checkbox-active {
            background-color: $i671filterActiveColor;
            color: white;
            border-color: $i671filterActiveColor;
          }
        }
        .checkbox-btn-group {
          width: 100%;
          display: flex;
          justify-content: space-between;
          view {
            width: calc(50% - 10rpx);
            height: 90rpx;
            line-height: 90rpx;
            border-radius: 6rpx;
            text-align: center;
            border: 1rpx solid $i671filterActiveColor;
            color: $i671filterActiveColor;
            &:nth-child(2) {
              background-color: $i671filterActiveColor;
              color: white;
            }
          }
        }
      }
    }
  }
</style>
