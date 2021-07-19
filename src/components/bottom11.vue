<template>
  <div class="main" v-if="dataCaseisShow1">
    <div
      @click="zhixian(1)"
      :class="['box1', currentindex === 1 ? 'active1' : '']"
    >
      <el-tooltip
        class="item"
        effect="dark"
        content="水平测量"
        placement="top-start"
      >
        <img src="../assets/img/底部导航/icon1_1.png" />
      </el-tooltip>
    </div>
    <div
      @click="zhuizhi(2)"
      :class="['box1', currentindex === 2 ? 'active2' : '']"
    >
      <el-tooltip
        class="item"
        effect="dark"
        content="垂直测量"
        placement="top-start"
      >
        <img src="../assets/img/底部导航/icon2_1.png" />
      </el-tooltip>
    </div>
    <div
      @click="mianji(3)"
      :class="['box1', currentindex === 3 ? 'active3' : '']"
    >
      <el-tooltip
        class="item"
        effect="dark"
        content="面积测量"
        placement="top-start"
      >
        <img src="../assets/img/底部导航/icon3_1.png" />
      </el-tooltip>
    </div>
    <div
      @click="shiyu(4)"
      :class="['box1', currentindex === 4 ? 'active4' : '']"
    >
      <el-tooltip
        class="item"
        effect="dark"
        content="视域分析"
        placement="top-start"
      >
        <img src="../assets/img/底部导航/icon4_1.png" />
      </el-tooltip>
    </div>
    <div
      @click="tianjixian(5)"
      :class="['box1', currentindex === 5 ? 'active5' : '']"
    >
      <el-tooltip
        class="item"
        effect="dark"
        content="天际线分析"
        placement="top-start"
      >
        <img src="../assets/img/底部导航/icon5_1.png" />
      </el-tooltip>
    </div>
    <div
      class="box1"
      @click="pouqie(6)"
      :class="['box1', currentindex === 6 ? 'active6' : '']"
    >
      <el-tooltip
        class="item"
        effect="dark"
        content="剖切"
        placement="top-start"
      >
        <img src="../assets/img/底部导航/icon6_1.png" />
      </el-tooltip>
    </div>
    <div
      class="box1"
      @click="xiayu(7)"
      :class="['box1', currentindex === 7 ? 'active7' : '']"
    >
      <el-tooltip
        class="item"
        effect="dark"
        content="下雨"
        placement="top-start"
      >
        <img src="../assets/img/底部导航/icon7_1.png" />
      </el-tooltip>
    </div>
    <div
      class="box1"
      @click="xiaxue(8)"
      :class="['box1', currentindex === 8 ? 'active8' : '']"
    >
      <el-tooltip
        class="item"
        effect="dark"
        content="下雪"
        placement="top-start"
      >
        <img src="../assets/img/底部导航/icon8_1.png" />
      </el-tooltip>
    </div>
    <div
      class="box1"
      @click="touming()"
      :class="['box1', currentindex === 9 ? 'active9' : '']"
    >
      <el-tooltip
        class="item"
        effect="dark"
        content="地形透明"
        placement="top-start"
      >
        <img src="../assets/img/底部导航/icon9_1.png" />
      </el-tooltip>
    </div>

    <div
      class="box1"
      @click="guandao()"
      :class="['box1', currentindex === 10 ? 'active10' : '']"
    >
      <el-tooltip
        class="item"
        effect="dark"
        content="管道查询"
        placement="top-start"
      >
        <img src="../assets/img/底部导航/icon10_1.png" />
      </el-tooltip>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      currentindex: 0,
      tools: "",
    };
  },
  computed: {
    ...mapState({
      dataCaseisShow1: (state) => state.dataCaseisShow1,
    }),
  },
  watch: {},
  methods: {
    qingchu() {
      __g.tools.stopMeasurement();
      __g.tools.stopViewshedAnalysis();
      __g.tools.stopSkylineAnalysis();
      __g.tools.stopPolygonClip();
      __g.weather.disableRainSnow();
    },
    guandao() {
      this.qingchu();
      if (this.currentindex === 10) {
        this.currentindex = 0;
      } else {
        this.currentindex = 10;
      }
    },
    xiayu() {
      this.qingchu();
      if (this.currentindex === 7) {
        this.currentindex = 0;
        __g.weather.disableRainSnow();
      } else {
        this.currentindex = 7;
        __g.weather.setRainParam(1, 1, 1);
      }
    },
    xiaxue() {
      this.qingchu();
      if (this.currentindex === 8) {
        this.currentindex = 0;
        __g.weather.disableRainSnow();
      } else {
        this.currentindex = 8;

        __g.weather.setSnowParam(1, 1, 1);
      }
    },
    zhixian() {
      this.qingchu();
      if (this.currentindex === 1) {
        this.currentindex = 0;
        __g.tools.stopMeasurement();
      } else {
        this.currentindex = 1;
        let options = {
          lineSize: 3.0,
          pointSize: 8.0,
          textColor: Color.Yellow,
          pointColor: [0, 0, 1, 0.3],
          lineColor: Color.Red,
          areaColor: [0, 1, 0, 0.3],
          showCoordinateText: false,
        };
        __g.tools.setMeasurement(MeasurementMode.Horizontal, options);

        setTimeout(() => {
          __g.tools.startMeasurement();
        }, 500);
      }

      // alert(11);
    },
    zhuizhi() {
      if (this.currentindex === 2) {
        this.currentindex = 0;
        __g.tools.stopMeasurement();
      } else {
        this.currentindex = 2;
      }
      this.qingchu();
      __g.tools.startMeasurement();
      let options = {
        lineSize: 3.0,
        pointSize: 8.0,
        textColor: Color.Yellow,
        pointColor: [0, 0, 1, 0.3],
        lineColor: Color.Red,
        areaColor: [0, 1, 0, 0.3],
        showCoordinateText: false,
      };
      __g.tools.setMeasurement(MeasurementMode.Vertical, options);
    },
    mianji() {
      this.qingchu();
      if (this.currentindex === 3) {
        this.currentindex = 0;
        __g.tools.stopMeasurement();
      } else {
        this.currentindex = 3;
        __g.tools.startMeasurement();
        let options = {
          lineSize: 3.0,
          pointSize: 8.0,
          textColor: Color.Yellow,
          pointColor: [0, 0, 1, 0.3],
          lineColor: Color.Red,
          areaColor: [0, 1, 0, 0.3],
          showCoordinateText: false,
        };
        __g.tools.setMeasurement(MeasurementMode.Volume, options);
      }
    },
    shiyu() {
      this.qingchu();
      if (this.currentindex === 4) {
        this.currentindex = 0;
        __g.tools.stopViewshedAnalysis();
      } else {
        this.currentindex = 4;
        let options = {
          fov_h: 150,
          fov_v: 45,
          height: 10.0,
          visibleColor: Color.Green,
          invisibleColor: Color.Red,
        };
        __g.tools.startViewshedAnalysis(options);
      }
    },
    tianjixian() {
      this.qingchu();
      if (this.currentindex === 5) {
        this.currentindex = 0;
        __g.tools.stopSkylineAnalysis();
      } else {
        this.currentindex = 5;
        let options = {
          showOutline: true,
          outlineThickness: 3.0,
          outlineColor: Color.Red,
          useSceneColor: false,
          sceneColor: Color.Black,
          showSkyline: true,
          windowSize: [400, 200],
          skylineColor: Color.Green,
          backgroundColor: Color.Gray,
          height: 50.0,
          tileLayers: [
            {
              color: Color.Blue,
              // ids: [
              //   "B1C4E5BD4888DA841D690AA396B061C3",
              //   "A659DF0E404D806CB3511C9DAC22D160",
              // ],
            },
          ],
        };
        __g.tools.startSkylineAnalysis(options);
      }
    },
    pouqie() {
      this.qingchu();
      if (this.currentindex === 6) {
        this.currentindex = 0;
        __g.tools.stopPlaneClip();
        __g.tools.stopPolygonClip();
      } else {
        this.currentindex = 6;
        __g.tools.startPlaneClip(
          [
            510296.3125, 2494092, 20.096796035766602, 510404.78125, 2494097.5,
            19.778057098388672,
          ],
          [1, 0, 0],
          true
        );
      }
    },

    touming() {
      if (this.currentindex === 9) {
        this.currentindex = 0;
        __g.tileLayer.disableXRay([
          "3B15473042BCF8EC3529B786FA7F6A34",
          "85464FDA47941043BFCB55B0C6B104AF",
          "46D13CDC451240431008C084E693A832",
          "96074E6E41EDFC7C3125FB90053AEE92",
        ]);
      } else {
        this.currentindex = 9;
        __g.tileLayer.enableXRay(
          [
            "3B15473042BCF8EC3529B786FA7F6A34",
            "85464FDA47941043BFCB55B0C6B104AF",
            "46D13CDC451240431008C084E693A832",
            "96074E6E41EDFC7C3125FB90053AEE92",
          ],
          [0.5, 0.5, 0.1, 0.99]
        );
        // __g.tileLayer.enableXRay(
        //   "85464FDA47941043BFCB55B0C6B104AF",
        //   [0.5, 0.5, 0.1, 0.99]
        // );
        // __g.tileLayer.enableXRay(
        //   "46D13CDC451240431008C084E693A832",
        //   [0.5, 0.5, 0.1, 0.99]
        // );
      }
    },
  },
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  components: {},
};
</script>

<style lang="scss" scoped>
.main {
  width: 660px;
  height: 60px;
  position: absolute;
  bottom: 15px;
  left: 650px;
  // background: rgba(0, 0, 0, 0.5);
  display: flex;
  color: white;
  z-index: 10000;
}
.box1 {
  width: 60px;
  height: 60px;
  margin-left: 6px;
  cursor: pointer;
  color: white;
}
//   background: url("../assets/img/底部导航/icon1_1.png") no-repeat center/cover;
//   background-size: 100% 100%;
// }
.active1 {
  width: 60px;
  height: 60px;
  margin-left: 6px;
  cursor: pointer;
  color: white;
  background: url("../assets/img/底部导航/icon1_2.png") no-repeat center/cover;
  background-size: 100% 100%;
  img {
    display: none;
  }
}
.active2 {
  width: 60px;
  height: 60px;
  margin-left: 6px;
  cursor: pointer;
  color: white;
  background: url("../assets/img/底部导航/icon2_2.png") no-repeat center/cover;
  background-size: 100% 100%;
  img {
    display: none;
  }
}
.active3 {
  width: 60px;
  height: 60px;
  margin-left: 6px;
  cursor: pointer;
  color: white;
  background: url("../assets/img/底部导航/icon3_2.png") no-repeat center/cover;
  background-size: 100% 100%;
  img {
    display: none;
  }
}
.active4 {
  width: 60px;
  height: 60px;
  margin-left: 6px;
  cursor: pointer;
  color: white;
  background: url("../assets/img/底部导航/icon4_2.png") no-repeat center/cover;
  background-size: 100% 100%;
  img {
    display: none;
  }
}
.active5 {
  width: 60px;
  height: 60px;
  margin-left: 6px;
  cursor: pointer;
  color: white;
  background: url("../assets/img/底部导航/icon5_2.png") no-repeat center/cover;
  background-size: 100% 100%;
  img {
    display: none;
  }
}
.active6 {
  width: 60px;
  height: 60px;
  margin-left: 6px;
  cursor: pointer;
  color: white;
  background: url("../assets/img/底部导航/icon6_2.png") no-repeat center/cover;
  background-size: 100% 100%;
  img {
    display: none;
  }
}
.active7 {
  width: 60px;
  height: 60px;
  margin-left: 6px;
  cursor: pointer;
  color: white;
  background: url("../assets/img/底部导航/icon7_2.png") no-repeat center/cover;
  background-size: 100% 100%;
  img {
    display: none;
  }
}
.active8 {
  width: 60px;
  height: 60px;
  margin-left: 6px;
  cursor: pointer;
  color: white;
  background: url("../assets/img/底部导航/icon8_2.png") no-repeat center/cover;
  background-size: 100% 100%;
  img {
    display: none;
  }
}
.active9 {
  width: 60px;
  height: 60px;
  margin-left: 6px;
  cursor: pointer;
  background: url("../assets/img/底部导航/icon9_2.png") no-repeat center/cover;
  background-size: 100% 100%;
  img {
    display: none;
  }
}
.active10 {
  width: 60px;
  height: 60px;
  margin-left: 6px;
  cursor: pointer;
  color: white;
  background: url("../assets/img/底部导航/icon10_2.png") no-repeat center/cover;
  background-size: 100% 100%;
  img {
    display: none;
  }
}
</style>

