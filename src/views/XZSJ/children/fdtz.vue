<template>
  <div class="fdtz">
    <div class="datacase">
      <div class="clickdata">
        <div class="echwarp">
          <div class="echbox1"></div>
          <div class="echbox">
            <div class="top">
              <div class="top2" style="display: flex;margin-left: 20px;">
                <div class="igm_top">
                  <img src="../../../assets/img/3现状数据/icon_法定图则.svg" />
                </div>
                <span class="fading">法定图则</span>
              </div>
            </div>
            <div ref="ech1111" id="echarts11"></div>
          </div>
        </div>
        <div v-if="clickData1[2]" class="title">
          <div class="title_img">
            <img src="../../../assets/img/3现状数据/icon_地块信息.svg" />
          </div>
          <div class="title_con">
            {{ clickData.title ? clickData.title : "Loding..." }}
          </div>
        </div>
        <div v-if="clickData1[2]" class="top_item1">
          <div class="top_item1_btn">地块编号</div>
          <div class="top_item1_title" v-if="clickData1[2]">
            {{ clickData1[0].data }}
          </div>
        </div>
        <div v-if="clickData1[2]" class="top_item2">
          {{
            clickData1[2]
              ? clickData1[2].name + ":" + clickData1[2].data
              : "暂无数据"
          }}
        </div>
        <div v-if="clickData1[2]" class="top_item3">
          <div class="right_item11">
            <div class="right_item1"></div>
          </div>

          <div class="right_item2">
            <span class="spac" v-if="clickData1[2]">
              {{ clickData1[3].data }}</span
            >
            <span class="wan">m<sup>2</sup></span>
            <div>用地面积</div>
          </div>
        </div>
        <div v-if="clickData1[2]" class="box">
          <div class="condata1"></div>
          <div class="condata">
            <div
              class="condata_item"
              v-for="(item, index) in clickData1"
              :key="index"
            >
              <div class="span_left">{{ item.name }}</div>
              <span class="span_cen"> |</span>
              <span class="span_right"> {{ item.data }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { mapState } from "vuex";
import { showdata } from "../showdata";
// import __g from "../../../main";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      // 筛选过得数据
      clickData1: (state) => showdata(state.clickData),
      // 。原始数据
      clickData: (state) => state.clickData,
      // 图则内容的显示隐藏
      dataCaseisShow: (state) => state.dataCaseisShow,
      os: (state) => state.os,
    }),
  },
  watch: {
    // "$store.state.clickData": function() {
    //   if (this.clickData1) {
    //     console.log(11111111111111111);
    //     this.addecharts();
    //   }
    //   //你需要执行的代码
    // },
  },
  methods: {
    addecharts() {
      setTimeout(() => {
        this.$nextTick(() => {
          // var chartDom = this.$refs.ech1111;
          var chartDom = document.getElementById("echarts11");
          console.log(chartDom);
          var myChart = echarts.init(chartDom);

          var option;
          myChart.on("click", (params) => {
            console.log(params);
            if (params.name == "商业服务业用地") {
              this.Glow(this.ChuLiOs([0.99608, 0, 0, 1]));
            } else if (params.name == "居住用地") {
              this.Glow(this.ChuLiOs([1, 1, 0, 1]));
            } else if (params.name == "公共管理与服务设施用地") {
              this.Glow(this.ChuLiOs([1, 0, 1, 1]));
            } else if (params.name == "物流仓储用地") {
              this.Glow(this.ChuLiOs([0.4549, 0.43137, 0.86667, 1]));
            } else if (params.name == "公用设施用地") {
              this.Glow(this.ChuLiOs([0, 0.72157, 0.72157, 1]));
            } else if (params.name == "交通设施用地") {
              this.Glow(this.ChuLiOs([0, 0.43137, 0.86667, 1]));
            } else if (params.name == "绿地与广场用地") {
              this.Glow(this.ChuLiOs([0.25098, 1, 0.00392, 1]));
            } else if (params.name == "工业用地") {
              this.Glow(this.ChuLiOs([0.72157, 0.36078, 0.36471, 1]));
            } else if (params.name == "其他用地") {
              this.Glow(this.ChuLiOs([0.29412, 0.58431, 0, 1]));
            }
          });
          option = {
            color: [
              "#FA013B",
              "#ED28EE",
              "#7D684B",
              "#FFFF00",
              "#A66EDD",
              "#2D86E0",
              "#00B8B8",
              "#40FF01",
              "#608545",
            ],
            // backgroundColor: "#00032C",
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {d}%",
            },
            legend: {
              // backgroundColor: "#0000004d",
              //backgroundColor: "#00032C",
              orient: "horizontal",
              bottom: "5%",
              show: true,
              data: [
                "商业服务业用地",
                "公共管理与服务设施用地",
                "工业用地",
                "居住用地",
                "物流仓储用地",
                "公用设施用地",
                "交通设施用地",
                "绿地与广场用地",
                "其他用地",
              ],
              textStyle: {
                color: "#fff",
                fontSize: "12",
              },
            },
            series: [
              {
                name: "法定图则",
                type: "pie",
                radius: ["35%", "55%"],
                center: ["50%", "35%"],
                avoidLabelOverlap: true, //开启后饼图上的文字不会重叠，并且鼠标移入后文字不会消失
                selectedMode: "single",
                animationDuration: 2000,
                label: {
                  show: true,
                  position: "inside",
                  color: "#fff",
                  fontSize: "10",
                  formatter: "{d}%",
                },
                labelLine: {
                  show: false,
                },
                data: [
                  { value: 27.09, name: "商业服务业用地" },
                  { value: 11.76, name: "公共管理与服务设施用地" },
                  { value: 0.45, name: "工业用地" },
                  { value: 15.62, name: "居住用地" },
                  { value: 4.57, name: "物流仓储用地" },
                  { value: 2.31, name: "公用设施用地" },
                  { value: 32.61, name: "交通设施用地" },
                  { value: 4.62, name: "绿地与广场用地" },
                  { value: 0.97, name: "其他用地" },
                ],
              },
            ],
          };
          option && myChart.setOption(option);
        });
      }, 1000);
    },
    ChuLiOs(data) {
      // let echartsColorClass = []
      // console.log(this.os);
      // this.os.map(item => {
      //   if (!echartsColorClass[item.color]) {
      //     echartsColorClass[item.color] = []
      //     echartsColorClass[item.color].push(item)

      //   } else {
      //     echartsColorClass[item.color].push(item)
      //   }
      // })
      // console.log(echartsColorClass);
      let odata = data.join();
      let newos = this.os
        .map((item) => {
          if (item.color.join() === odata) {
            return [item.id, item.coordinates[0][0]];
          } else {
            return 666;
          }
        })
        .filter((item) => {
          if (item == 666) {
            return false;
          } else {
            return item;
          }
        });
      console.log(newos);
      return newos;
    },
    Glow(newos) {
      console.log(newos);

      __g.polygon.glow(
        newos.map((item) => {
          return item[0];
        }),
        5,
        (res) => {}
      );

      __g.polyline.clear(() => {
        let oo1 = [];
        newos.forEach((item, index) => {
          // console.log(clcdata.id)
          // item.coordinates[0][0].forEach((item) => {
          //   // console.log(item)
          //   // item[2] = 30
          // })
          // console.log("对", item.coordinates[0][0])

          let coords = item[1];
          let color = [0, 1, 1, 1];
          let style = 4;
          let thickness = 7;
          let brightness = 0.8;
          let flowRate = 0.5;
          let o = new PolylineData(
            index + "p11",
            color,
            coords,
            style,
            thickness,
            brightness,
            flowRate
          );
          o.depthTest = true;
          oo1.push(o);
        });
        __g.polyline.add(oo1, () => {
          // 点击现状数据图层右边的数据展示
        });
      });
    },
    adddddd() {
      this.$nextTick(() => {
        console.log(this.$refs.ech1);
        !this.$refs.ech1 && this.addecharts();
      });
    },
  },
  created() {},
  mounted() {
    this.addecharts();
  },
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
.title_img {
  width: 20%;
  height: 100%;
}
.title_img img {
  width: 35px;
  height: 35px;
  margin-left: 50%;
  margin-top: 10%;
}
.title_con {
  width: 50%;
  height: 100%;
  margin-left: 3%;
  margin-top: 4%;
  font-size: 16px;
}
.igm_top {
  margin-left: 8%;
  display: flex;
  align-items: center;
}
.fading {
  width: 105px;
  font-size: 18px;
  margin-left: 2.5%;
  display: flex;
  align-items: center;
}
.igm_top img {
  width: 30px;
  height: 30px;
}
.main_box {
  display: flex;
  width: 100%;
  height: 10%;
  margin-top: 2%;
}
.cvn {
  width: 15%;
  height: 100%;
  border-bottom: 1px solid white;
}

.cvh {
  width: 45%;
  height: 100%;
  border-bottom: 1px solid white;
}
.cyu {
  width: 100%;
  height: 100%;
}
.cyu img {
  padding-top: 5%;
  width: 25px;
  height: 25px;
}
.cvy {
  font-size: 16px;
  display: flex;
  align-items: center;
  width: 35%;
  height: 10%;
}
.span_right {
  width: 170px;

  /* word-break: break-all; */
  overflow: hidden; //超出的文本隐藏
  text-overflow: ellipsis; //溢出用省略号显示
  white-space: nowrap; //溢出不换行
  min-height: 100%;
  margin-top: 5%;
  margin-left: 3%;
}
.span_cen {
  width: 2%;
  height: 100%;
  display: flex;
  align-items: center;
}
.span_left {
  margin-left: 5%;
  width: 37%;
  height: 100%;

  display: flex;
  align-items: center;
}
.condata_item {
  font-size: 16px;
  width: 100%;
  height: 30px;
  min-height: 9.5%;

  display: flex;
  align-items: center;
}
.box {
  position: relative;
  font-size: 16px;
  width: 100%;
  height: 150px;
}
.condata {
  font-size: 16px;
  width: 100%;
  height: 100%;
  position: absolute;
  right: -4%;
  top: 0%;
  overflow: scroll;
}
/* 滚动条宽度 */
::-webkit-scrollbar {
  width: 1px;
}
/* 滚动条轨道颜色 */
::-webkit-scrollbar-track {
  background-color: transparent;
}
/* 滚动条颜色 */
::-webkit-scrollbar-thumb {
  background-color: transparent;
}
/* 鼠标移动到滚动条上后显示的颜色 */
::-webkit-scrollbar-thumb:hover {
  background-color: transparent;
}
/* 点击时滚动条的颜色 */
::-webkit-scrollbar-thumb:active {
  background-color: transparent;
}

.condata1 {
  font-size: 16px;
  padding-top: 4%;
  margin-top: 1%;
  width: 100%;
  height: 100%;
  /* background: rgba(53, 46, 44, 0.45); */
  filter: blur(2px);
}

.right_item11 {
  width: 20%;
  height: 100%;
  /* padding-top: 20%; */
}
.right_item2 {
  width: 60%;
  height: 100%;
  /* padding-top: 20%; */
  font-size: 14px;
}
.right_item1 img {
  width: 50%;
  margin-top: 24%;
}
.wan {
  width: 47%;
  padding-left: 3%;
}
.spac {
  width: 50%;
  height: 32px;
  font-size: 22px;
  font-family: STHeitiSC-Medium, STHeitiSC;
  font-weight: 500;
  color: #00f5f7;
  line-height: 33px;
}
.left_item2 {
  width: 69%;
}
.right_item1 {
  width: 100%;
  height: 60px;
  background: url("../../../assets/img/3现状数据/icon_面积.svg") no-repeat
    center/cover;
  background-size: 60%;
}
.top_item3 {
  width: 100%;
  height: 60px;
  background: transparent;
  display: flex;
  align-items: center;
}
.item_left {
  width: 50%;
  height: 100%;
}
.con {
  width: 75px;
  height: 75px;
  border-radius: 50%;
}
.item_right {
  width: 50%;
  height: 100%;
}
.fdtz {
  width: 100%;
  height: 100%;
}
.datacase {
  width: 20%;
  height: 100%;
  padding: 10px 10px;
  box-sizing: border-box;
  color: white;
  height: calc(100% - 80px);
  background: rgba(0, 0, 0, 0.24);
  position: absolute;
  border-radius: 0 0 0 0;
  // top: 0;
  right: 0;
}
.clickdata {
  width: 100%;
  height: 100%;
}
.top_item1 {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top_item1_btn {
  margin-top: 1%;
  font-size: 16px;
  // font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #fbf6e6;
  background: #f7b700;
  width: 30%;
  height: 35px;
  line-height: 35px;
  text-align: center;
}
.top_item1_title {
  width: 70%;
  height: 35px;
  font-size: 20px;
  // font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 56px;
  margin-left: 2%;
  margin-top: -7%;
}
.top_item2 {
  display: flex;
  align-items: center;
  background: #007ad9;
  padding-left: 4%;
  width: 80%;
  height: 7%;
  font-size: 20px;
  // font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  // line-height: 20%;
  text-align: center;
}

.title {
  display: flex;

  width: 100%;
  height: 50px;
  background-image: url("../../../assets/img/3现状数据/titbg_text6.svg");
  background-size: 100%;
  background-repeat: no-repeat;
}
.letf_title {
  width: 55%;
  height: 100%;
  font-size: 18px;
  color: white;
  background: rgba(109, 136, 123, 0.1);
  display: flex;
  justify-content: left;
  align-items: center;
  border-top: 1px solid white;
  border-left: 1px solid white;
  border-right: 1px solid white;
}
.title_icon {
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title_icon img {
  width: 30px;
}
.right_title {
  width: 40%;
  height: 100%;
  border-bottom: 1px solid white;
}
#echarts11 {
  width: 100%;
  height: 370px;
  margin: 0 auto;
  // padding: 10px;
}
.top1 {
  height: 40px;
  width: 100px;
  line-height: 40px;
  background: rgba(230, 206, 206, 0.2);
  filter: blur(1px);
  position: absolute;
  top: 2%;
  left: 0;
}
.echwarp {
  width: 350px;
  height: 450px;
  position: relative;
  // background: #0000004d;
  /* position: absolute;
  top: 100px;
  left: 20px; */
  z-index: 100;
  color: white;

  .top {
    display: flex;
    align-items: center;
    width: 100%;
    height: 15%;
    margin-top: 3%;
    background-image: url("../../../assets/img/3现状数据/titbg_text4.svg");
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .echbox {
    width: 100%;
    height: calc(100% - 140px);
    /* position: absolute;
    top: 1.5%;
    left: 0; */
    /* background: rgba(40, 68, 67, 0.3); */
    /* filter: blur(0.5px); */
  }
  .echbox1 {
    /* margin-top: 1.5%; */
    position: absolute;
    width: 100%;
    top: 10%;
    height: calc(100% - 15%);
    /* background: rgba(41, 62, 65, 0.65); */
    // filter: blur(8px);
  }
}
.top_data {
  margin-top: 5%;
  color: red;
}
</style>
