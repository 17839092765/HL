<template>
  <div>
    <div id="player"></div>
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { addhighlight } from "./util/children/addhighlight";
import { click_EVT_building, click_EVT_jj100 } from "./util/clickEvt";
import connector from "./api/common";
export default {
  data() {
    return {
      api: null,
      player: null,
    };
  },
  computed: {
    ...mapState({
      allpolygon: (state) => state.allpolygon,
      clickData: (state) => state.clickData,
      hightbuilding: (state) => state.hightbuilding,
    }),
  },
  watch: {},
  methods: {
    //监听三维交互的返回事件
    onLoad() {
      // onResize();
      this.init(true, true);
    },
    onResize() {
      let player = document.getElementById("player");
      player.style.height = window.innerHeight + "px";
      player.style.width = window.innerWidth + "px";
    },
    onEvent(data) {
      // console.log(e);
      let that = this;
      console.log(data);
      if (data && data.Id && data.Type == "Polygon") {
        __g.polygon.get(data.Id, (res) => {
          console.log(res);
        });
        addhighlight(this.allpolygon, data);
        __g.camera.lookAt(
          data.MouseClickPoint[0],
          data.MouseClickPoint[1] - 300,
          2000,
          -33.209282,
          -90,
          -90,
          () => {
            // this.isshowBack = false
          }
        );
        // __g.polygon.get(data.Id, (res) => {
        //   console.log(res);
        // })
        var layername = data.Id.slice(0, 6);
        if (layername == "xzqsxx") {
          let data_ = data.Id.slice(6);
          that.requestdata("用地权属信息", data_);
        } else if (layername == "tdlyxz") {
          var data_name = data.Id.slice(6);
          var index = data_name.indexOf("-");
          //用地编号请求用地性质
          let data_tdly = data_name.slice(0, index);
          //id请求数据参数
          let data_tdly_id = data_name.slice(index + 1);
          var index_add = data_tdly.indexOf("+");
          var data_one, data_two;
          if (index_add != -1) {
            data_one = data_tdly.slice(0, index_add);
            data_two = data_tdly.slice(index_add + 1);
            var data = {
              id: data_tdly_id,
              natureid: [data_one, data_two],
            };
            that.requestdata("用地现状信息", data);

            // that.requestdata('用地现状信息', data_two)
          } else {
            var data = {
              id: data_tdly_id,
              natureid: [data_tdly],
            };
            that.requestdata("用地现状信息", data);
          }
        } else if (layername == "fdtzft" || layername == "fdtzlh") {
          let index_fdtz = data.Id.indexOf("-");
          let data_fztz = data.Id.slice(index_fdtz + 1);
          that.requestdata("法定图则信息", data_fztz);
        } else if (layername == "fdtzxx") {
          let index_fdtz = data.Id.indexOf("-");
          let data_fztz = data.Id.slice(index_fdtz + 1);
          that.requestdata("法定图则信息", data_fztz);
        } else if (layername == "cityxx") {
          console.log(data);
          let index_1 = data.Id.indexOf("-");
          let data_1 = data.Id.slice(index_1 + 1);
          that.requestdata("城市更新项目", data_1);
        }
      } else if (data && data.Id && data.Type == "TileLayer") {
        //瓦片图层
        if (data.Type == "TileLayer") {
          // name -> ObjectID
          if (data.ObjectID) {
            var name_jjone = data.ObjectID.slice(0, 5);
            console.log(name_jjone);
            if (name_jjone == "JJ100") {
              __g.tileLayer.stopHighlightActor();

              //京基100楼层信息
              that.requestdata("楼层信息", data.Id);
              click_EVT_jj100(data, data.Type, this.lastID);
            } else if (data.ObjectID.slice(0, 6) == "440303") {
              // 点击已高亮图层取消高亮和属性框 , id都一样，ObjectID不一样，根据ObjectID判断
              if (
                data.ObjectID &&
                this.hightbuilding &&
                data.ObjectID == this.hightbuilding.ObjectID
              ) {
                console.log(data.Id == this.hightbuilding.Id);
                __g.tileLayer.stopHighlightActor();
                //  __g.infoTree.hide(['BF15EEEC49051728DF0DD585E91B4C0E']);
                var obj = {};
                that.$store.commit("hightbuilding", obj);
                return;
              }
              click_EVT_building(data, data.Type, this.lastID);
              //招商楼宇信息

              this.requestdata("建筑信息", data.ObjectID.slice(0, 19));

              that.$store.commit("hightbuilding", data);
              // __g.tileLayer.highlightActors("BF15EEEC49051728DF0DD585E91B4C0E")
            }
          }
        }
      } else if (data && data.Id && data.Type == "tag") {
        console.log("tag");
        if (data.Id === "tagxinying") {
          this.$store.commit("cygnblock", "tagxinying");
        } else if (data.Id === "tagguoji") {
          this.$store.commit("cygnblock", "tagguoji");
        } else if (data.Id === "tagxiandai") {
          this.$store.commit("cygnblock", "tagxiandai");
        }
      }
    },
    onReady() {
      //此时可以调用接口了
      __g.camera.set(
        509785.625,
        2493510.25,
        1005.481873,
        -36.999996,
        -39.999985,
        2
      );
    },
    log() {},
    initWebSocket() {
      //初始化weosocket
      const wsuri = "127.0.0.1:4322";
      this.websock = new AirCityAPI(wsuri, this.onReady, this.log);
      this.websock.setEventCallback(this.onEvent);
    },
    getMatchServerConfig(host, fn, callbackIndex) {
      if ("WebSocket" in window) {
        var url = `ws://${host}`;
        let __fn = fn;

        var ws = new WebSocket(url);
        ws.onopen = function() {
          this.send(
            JSON.stringify({
              command: 6,
              callbackIndex: callbackIndex,
            })
          );
        };
        ws.onmessage = function(event) {
          var o = JSON.parse(event.data);
          __fn(o);
        };
        ws.onclose = function() {};
        ws.onerror = function(event) {};
      } else {
        this.log("Not Support WebSocket!");
      }
    },
    initInterface(withPlayer, withApi) {
      //AirCityPlayer
      if (withPlayer) {
        let options = {
          domId: "player",
          token: HostConfig.Token,
          showMarker: true,
          showStartupInfo: true,
        };
        let aircityPlayer = new AirCityPlayer(
          HostConfig.instanceId || HostConfig.AirCityPlayer,
          options
        );

        // let p_bitrate = getQueryVariable("bitrate"); //2021.04.16 Add 从参数中解析码率
        // p_bitrate && aircityPlayer.setBitrate(p_bitrate);
      }

      //AirCityAPI
      if (withApi) {
        let _this = this;
        let aircityApi = new AirCityAPI(
          HostConfig.instanceId || HostConfig.AirCityAPI,
          {
            onReady: () => {
              //此时可以调用接口了
              __g.camera.get((r) => {
                this.log(
                  `Camera: ${r.x}, ${r.y}, ${r.z}, ${r.pitch}, ${r.yaw}`
                );
              });
              this.onReady();
            },
            onEvent: (e) => {
              this.onEvent(e);
            },
            onLog: this.log,
            useColorLog: true, //仅用于SDK测试页面，二次开发请设置为false
          }
        );
      }
    },
    init(withPlayer, withInterface) {
      let _this = this;
      _this.getMatchServerConfig(HostConfig.MatchServer, function(o) {
        console.log(o);
        if (o.result == 0) {
          HostConfig.instanceId = o.instanceId;
          _this.initInterface(withPlayer, withInterface);
        } else {
          // alert('云渲染资源已满，请稍候再试')
          _this.initInterface(withPlayer, withInterface);
        }
      });
    },

    //根据要素id请求数据
    async requestdata(title, data) {
      let that = this;
      let bool = true;
      var arrdata = [];
      // await arr.forEach(async function (data) {
      var rcdata;
      if (title == "法定图则信息") {
        rcdata = await connector.layer_statutory_plan(data);
      } else if (title == "用地现状信息") {
        rcdata = await connector.layer_prop(data);
      } else if (title == "用地权属信息") {
        rcdata = await connector.lawlayer(data);
      } else if (title == "城市更新项目") {
        rcdata = await connector.layer_updatacity(data);
      } else if (title == "楼层信息") {
        rcdata = await connector.layer_jj100_one(data);
      } else if (title == "建筑信息") {
        rcdata = await connector.layer_building(data);
      }

      // arrdata.push(rcdata)
      // });
      that.data_show = {
        title: title,
        data: rcdata.data,
      };
      that.$store.commit("clickData", this.data_show);
    },
  },

  created() {
    // this.initWebSocket();
  },
  mounted() {
    var os = (function() {
      var ua = navigator.userAgent,
        isWindowsPhone = /(?:Windows Phone)/.test(ua),
        isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
        isAndroid = /(?:Android)/.test(ua),
        isFireFox = /(?:Firefox)/.test(ua),
        isChrome = /(?:Chrome|CriOS)/.test(ua),
        isTablet =
          /(?:iPad|PlayBook)/.test(ua) ||
          (isAndroid && !/(?:Mobile)/.test(ua)) ||
          (isFireFox && /(?:Tablet)/.test(ua)),
        isPhone = /(?:iPhone)/.test(ua) && !isTablet,
        isPc = !isPhone && !isAndroid && !isSymbian;
      return {
        isTablet: isTablet,
        isPhone: isPhone,
        isAndroid: isAndroid,
        isPc: isPc,
      };
    })();

    if (os.isAndroid || os.isPhone) {
      //  alert("手机" );1
    } else if (os.isTablet) {
      // alert("平板" );1
      let pla = document.getElementById("player");
      // pla.style.height="99% !important"
    } else if (os.isPc) {
      // alert("电脑" );1
    }
    // window.addEventListener("load", this.onLoad, true);
    // window.addEventListener("resize", this.onResize, true);
    // this.api = new AirCityAPI(instanceId, function () {
    //   this.api.misc.setMainUIVisibility(true);
    // }.bind(this));
    // let instanceId = "3232270593-8889-8081-4323"
    // this.player = new AirCityPlayer(instanceId, "player")
    window.addEventListener("load", this.onLoad, true);
    window.addEventListener("resize", this.onResize, true);
    window.addEventListener("beforeunload", () => {
      if (window.__g) {
        //  __g.reset();
      }
    });
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {
    // this.api.destroy();
    // this.player.destroy();
  },
  activated() {},
  components: {},
};
</script>

<style lang="scss" scoped>
#player {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
}
.aaa {
  background: rgb(255, 149, 0);
  background: rgb(126, 48, 48);
}
</style>
