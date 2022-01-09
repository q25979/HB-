<template>
  <view class="_671-lucky">
    <view class="outer-ring">
      <view class="outer-dot-container">
        <canvas canvas-id="luckyDot"></canvas>
      </view>
      <view
        :style="'transform: rotate(' + deg + 'deg)'"
        class="inner-ring">
        <canvas canvas-id="innerPrizeCanvas"></canvas>
      </view>
      <view class="start-button-box">
        <view class="triangle"></view>
        <view class="start-button" @click="onReadyStart">{{startText}}</view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data () {
      return {
        screenW: 0,

        // 圆形大小-外圈
        circleSize: 670,
        ctx: null,

        // 圆形大小-内圈
        innerCircleSize: 550,
        innerCtx: null,

        // 定时器
        dotTimer: null,
        dotSpeed: 0.3,
        dotCount: 0,

        // 旋转角度
        deg: 0,
        degDelay: 1,
        degFlag: false,
        degCount: 0
      }
    },
    props: {
      // 中间按钮文字
      startText: {
        type: String,
        default: '开始'
      },

      // 中奖下标
      wIndex: {
        type: Number,
        default: 0
      },

      // 奖项
      luckyList: {
        type: Array,
        default: []
      }
    },
    mounted () {
      const systemInfo = uni.getSystemInfoSync()
      this.screenW = systemInfo.windowWidth

      this.handleDrawCircle()
      this.handleInnerRing()
    },
    destroyed () {
      clearInterval(this.dotTimer)
    },
    methods: {
      // 准备
      onReadyStart () {
        this.$emit('onReadyStart')
      },

      // 开始按钮
      onStart () {
        if (this.degFlag) {
          return false
        }

        this.degFlag = true
        setTimeout(() => {
          this.deg--
          this.degCount++
          if (this.deg <= -360) {
            this.deg = 0
          }
          if (Math.abs(this.deg) % 200 === 0) {
            this.degDelay++
          }

          this.degFlag = false
          if (this.degCount < 1801) {
            this.onStart()
          } else {
            // 开奖
            if (this.deg === this.getLotteryAngle(this.wIndex)) {
              this.degCount = 0
              this.degDelay = 1
              this.$emit('lotteryData', this.luckyList[this.wIndex])
            } else {
              this.onStart()
            }
          }
        }, this.degDelay)
      },

      // 获取开奖角度
      getLotteryAngle (index) {
        let angle = 0
        for (let i = 0; i < 6; i++) {
          if (index === i) {
            return -angle - ( i * 60 )
          }
        }
      },

      // 内圈&产品
      handleInnerRing () {
        let center = this.rpxToPx(this.innerCircleSize / 2)  // 中心点
        let imgSize = this.rpxToPx(100)
        let pi = Math.PI
        let defaultPaht = ''
        this.innerCtx = uni.createCanvasContext('innerPrizeCanvas')

        let start = 0, end = 1/3, interval = 1/3
        for (let i = 0; i < 6; i++) {
          if (i % 2 === 0) {
            this.innerCtx.arc(center, center, center, start * pi, end * pi)
            this.innerCtx.lineTo(center, center)
            this.innerCtx.setFillStyle('#FF4E54')
            this.innerCtx.fill()
          }
          start += interval
          end += interval
        }

        let imgPostion = [{
            x: 2 * center - (imgSize / 4),
            y: 2 * center - center / 2 - (imgSize / 2),
            r: 2
          }, {
            x: center + (imgSize / 2),
            y: center * 2 - 10,
            r: 3
          }, {
            x: center / 2 - (imgSize / 1.5),
            y: 2 * center - center / 2 + (imgSize / 3),
            r: 4
          }, {
            x: center / 2 - imgSize * 1.1,
            y: center - center / 2 + (imgSize / 2),
            r: 5
          }, {
            x: center - (imgSize / 2),
            y: imgSize / 6,
            r: 0
          }, {
            x: 2 * center - center / 2 + (imgSize / 1.5),
            y: center - center / 2 - (imgSize / 3),
            r: 7
          }
        ]
        for (let i = 0; i < 6; i++) {
          this.innerCtx.save()
          this.innerCtx.translate(
            imgPostion[i].x,
            imgPostion[i].y
          )
          this.innerCtx.rotate(imgPostion[i].r * interval * pi)
          this.innerCtx.drawImage(
            this.luckyList[i].img,
            0,
            0,
            imgSize,
            imgSize
          )
          this.innerCtx.setFillStyle('#FFFFFF')
          this.innerCtx.setFontSize(15)

          let x = 0
          let l = this.stringLength(this.luckyList[i].text)
          if (l > 8) {
            x = -(imgSize / 4)
          }
          if (l === 8) {
            x = -5
          }
          if (l <= 6) {
            x = 2
          }
          if (l <= 4) {
            x = imgSize / 4
          }
          if (l <= 2) {
            x = +imgSize / 3
          }
          this.innerCtx.fillText(
            this.luckyList[i].text,
            x,
            0 + imgSize + 15
          )
          this.innerCtx.restore()
        }

        this.innerCtx.draw()
      },

      // 外圈-画圆
      handleDrawCircle () {
        this.ctx = uni.createCanvasContext('luckyDot')

        this.handleDrawDot()
        clearInterval(this.dotTimer)
        this.dotTimer = setInterval(() => {
          this.handleDrawDot()
        }, this.dotSpeed * 1000)
      },

      // 外圈-画点
      handleDrawDot () {
        this.dotCount++

        let color1 = '#FFFFFF'
        let color2 = '#efef00'
        if (this.dotCount % 2 !== 0) {
          color1 = '#efef00'
          color2 = '#FFFFFF'
        }

        let center = this.rpxToPx(this.circleSize / 2)  // 中心点
        let dotSize = this.rpxToPx(15)
        let c = 2 * Math.PI * center // 周长
        let interval = c / 20 // 间隔

        // 坐标
        let coor = [
          // LEFT
          {
            x: this.rpxToPx(30),
            y: center
          }, {
            x: this.rpxToPx(50),
            y: center - interval
          }, {
            x: this.rpxToPx(110),
            y: center - interval * 1.97
          }, {
            x: this.rpxToPx(210),
            y: center - interval * 2.64
          },
          // TOP
          {
            x: center,
            y: this.rpxToPx(30)
          }, {
            x: center * 2 - this.rpxToPx(210),
            y: center - interval * 2.64
          }, {
            x: center * 2 - this.rpxToPx(110),
            y: center - interval * 1.97
          }, {
            x: center * 2 - this.rpxToPx(50),
            y: center - interval
          },
          // RIGHT
          {
            x: this.rpxToPx(this.circleSize - 30),
            y: center
          }, {
            x: center * 2 - this.rpxToPx(50),
            y: center + interval
          }, {
            x: center * 2 - this.rpxToPx(110),
            y: center + interval * 1.97
          }, {
            x: center * 2 - this.rpxToPx(210),
            y: center + interval * 2.64
          },
          // BOTTOM
          {
            x: center,
            y: this.rpxToPx(this.circleSize - 30)
          }, {
            x: this.rpxToPx(210),
            y: center + interval * 2.64
          }, {
            x: this.rpxToPx(110),
            y: center + interval * 1.97
          }, {
            x: this.rpxToPx(50),
            y: center + interval
          }
        ]
        for (let i = 0; i < 16; i++) {
          // left
          this.ctx.beginPath()
          this.ctx.arc(coor[i].x, coor[i].y, dotSize, 0, 2 * Math.PI)
          this.ctx.setFillStyle(i % 2 ? color1 : color2)
          this.ctx.closePath()
          this.ctx.fill()
        }
        this.ctx.draw()
      },

      // 返回字符串长度
      stringLength (str) {
        let length = 0
        for (let i = 0; i < str.length; i++) {
          let c = str.charCodeAt(i)
          if ((c >= 0x0001 && c <= 0x007e) || ( c >= 0xff60 && c <= 0xff9f )) {
            length++
          } else {
            length += 2
          }
        }
        return length
      },

      // rpx => px
      rpxToPx (number) {
        if (this.screenW === 0) {
          return 0
        }
        return (this.screenW * number) / 750
      }
    }
  }
</script>

<style lang="scss" scoped>
  $outer-size: 670rpx;
  $lnner-size: 550rpx;
  $btn-size: 150rpx;
  $dot-size: 30rpx;

  ._671-lucky {
    width: $outer-size;
    height: $outer-size;
    margin: 0 auto;
    position: relative;
    .outer-ring {
      width: 100%;
      height: 100%;
      background-color: #ED3D44;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      .outer-dot-container {
        position: absolute;
        width: $outer-size;
        height: $outer-size;
        canvas {
          width: 100%;
          height: 100%;
        }
      }
      .inner-ring {
        transform: rotate(0deg);
        width: $lnner-size;
        height: $lnner-size;
        border-radius: 50%;
        background-color: #FF6166;
        canvas {
          width: 100%;
          height: 100%;
        }
      }
      .start-button-box {
        $buttonShadow: #00000099;

        width: $btn-size;
        height: $btn-size;
        background-color: #F5A331;
        position: absolute;
        border-radius: 50%;
        padding: 15rpx;
        .triangle {
          position: absolute;
          top: -75rpx;
          left: 50%;
          transform: translateX(-50%);
          content: "";
          border: 50rpx solid #F5A331;
          border-top-color: transparent;
          border-right-color: transparent;
          border-left-color: transparent;
        }
        .start-button {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          line-height: $btn-size;
          background-image: radial-gradient(circle farthest-corner at bottom, #F6DA86 70%, white);
          color: white;
          text-align: center;
          text-shadow: 2rpx 2rpx 0 $buttonShadow;
          font-size: 22px;
          box-shadow: 0 0 2rpx $buttonShadow;
          z-index: 1;
        }
      }
    }
  }
</style>
