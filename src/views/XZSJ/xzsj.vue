<template>
  <div class="xzsj">
    <!-- <FDTZ />
    <XZQS /> -->
    <div class="link">
      <div class="threelink1">
        <router-link to="/Home/XZSJ/fdtz" tag="li">
          <span>法定图则</span>
        </router-link>
      </div>
      <div class="threelink2">
        <router-link to="/Home/XZSJ/xzqs" tag="li">
          <span>现状权属</span>
        </router-link>
      </div>
      <div class="threelink3">
        <router-link to="/Home/XZSJ/tdly" tag="li">
          <span>土地利用</span>
        </router-link>
      </div>
      <div class="threelink4">
        <router-link to="/Home/XZSJ/csgx" tag="li">
          <span>城市更新单元</span>
        </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import { showtuceng, hidetuceng } from "../../util/showtuceng";
import { showVectorlayers, hideVectorlayers } from "../../util/showtuze";
// import __g from "../../main"
import store from "../../store";
export default {
  data() {
    return {
      onclickdata: 0,
    };
  },
  computed: {},
  watch: {
    $route: {
      handler(to, from) {
        // 删除点击出来的段变形
        __g.polyline.clear();
        store.commit("dataCaseisShow", false);
        store.commit("clickData", {});
        __g.camera.lookAt(
          510493.21875,
          2495511.25,
          4919.446289,
          0,
          -90.503029,
          -90.661896
        );
        if (to && to.path === "/Home/XZSJ/fdtz") {
          hideVectorlayers();
          showVectorlayers("法定图则");
        } else if (to && to.path === "/Home/XZSJ/xzqs") {
          hideVectorlayers();
          showVectorlayers("现状权属");
        } else if (to && to.path === "/Home/XZSJ/tdly") {
          hideVectorlayers();
          showVectorlayers("土地利用现状");
        } else if (to && to.path === "/Home/XZSJ/csgx") {
          hideVectorlayers();
          showVectorlayers("城市更新单元");
        }
      },
    },
  },
  methods: {},
  created() {},
  mounted() {
    this.$store.commit("clickData", {});

    let link = document.getElementsByClassName("link")[0];
    console.log(link);
    link.style.width = "600px";
    this.$treedata && showtuceng(this.$treedata.xzsjdata);
    showVectorlayers("法定图则");
    __g.camera.lookAt(
      510493.21875,
      2495511.25,
      4919.446289,
      0,
      -90.503029,
      -90.661896
    );
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {
    hidetuceng(this.$treedata.xzsjdata);
    hideVectorlayers();
    __g.polyline.clear();
    this.$store.commit("clickData", {});
  },
  destroyed() {},
  activated() {},
  components: {},
};
</script>

<style lang="scss" scoped>
.xzsj {
  .link {
    position: absolute;
    overflow: hidden;
    width: 0px;
    height: 40px;
    transition: all 1s;
    top: 80px;
    left: 0px;
    right: 0;
    /* bottom: 0; */
    margin: auto;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 5px 5px 5px 5px;
    font-size: 18px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    > div {
      width: 160px;
      overflow: hidden;
      /* background: rgba(0, 0, 0, 0.274) !important; */
      > li {
        width: 100%;
        height: 100% !important;
        border-radius: 5px;
        line-height: 40px !important;
        text-align: center;
        width: 100% !important;
        height: 50px;
        line-height: 50px;
        list-style: none;
        color: #fff;
        cursor: pointer;
        &.router-link-active {
          height: 50px;
          line-height: 50px;
          color: #fee36d;
          font-weight: 700;
          background: rgba(0, 0, 0, 0.411);
        }
      }
    }
  }
}
/* .threelink1 {
  position: absolute;
  width: 120px;
  height: 40px;
  top: 90px;
  left: -180px;
  right: 0;
  margin: auto;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 5px 5px 5px 5px;
  font-size: 18px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  > li {
    height: 50px;
    line-height: 50px;
    position: relative;
    color: #ffffff;
    list-style: none;
    cursor: pointer;

    &.router-link-active {
      color: #fee36d;
      font-weight: 700;
    }
    // &.router-link-active::after {
    //   content: "";
    //   position: absolute;
    //   bottom: 5px;
    //   left: 0;
    //   right: 0;
    //   margin: auto;
    //   width: 100%;
    //   height: 2px;
    //   background: #fee36d;
    // }
  }
}
.threelink2 {
  position: absolute;
  width: 120px;
  height: 40px;
  top: 90px;
  left: 80px;
  right: 0;
  margin: auto;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 5px 5px 5px 5px;
  font-size: 18px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  > li {
    height: 50px;
    line-height: 50px;
    position: relative;
    color: #ffffff;
    list-style: none;
    cursor: pointer;

    &.router-link-active {
      color: #fee36d;
      font-weight: 700;
    }
    // &.router-link-active::after {
    //   content: "";
    //   position: absolute;
    //   bottom: 0px;
    //   left: 0;
    //   right: 0;
    //   margin: auto;
    //   width: 100%;
    //   height: 2px;
    //   background: #fee36d;
    // }
  }
}
.threelink3 {
  position: absolute;
  width: 120px;
  height: 40px;
  top: 90px;
  left: 340px;
  right: 0;
  margin: auto;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 5px 5px 5px 5px;
  font-size: 18px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  > li {
    height: 50px;
    line-height: 50px;
    position: relative;
    color: #ffffff;
    list-style: none;
    cursor: pointer;

    &.router-link-active {
      color: #fee36d;
      font-weight: 700;
    }
    // &.router-link-active::after {
    //   content: "";
    //   position: absolute;
    //   bottom: 0px;
    //   left: 0;
    //   right: 0;
    //   margin: auto;
    //   width: 100%;
    //   height: 2px;
    //   background: #fee36d;
    // }
  }
}
.threelink4 {
  position: absolute;
  width: 120px;
  height: 40px;
  top: 90px;
  left: 600px;
  right: 0;
  margin: auto;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 5px 5px 5px 5px;
  font-size: 18px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  > li {
    height: 50px;
    line-height: 50px;
    position: relative;
    color: #ffffff;
    list-style: none;
    cursor: pointer;

    &.router-link-active {
      color: #fee36d;
      font-weight: 700;
    }
    // &.router-link-active::after {
    //   content: "";
    //   position: absolute;
    //   bottom: 0px;
    //   left: 0;
    //   right: 0;
    //   margin: auto;
    //   width: 100%;
    //   height: 2px;
    //   background: #fee36d;
    // }
  } */
/* } */
</style>
