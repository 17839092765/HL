<template>
  <div class="hlsj">
    <!-- <button class="btn" @click="playCameraTour">CameraTour</button> -->
    <div @click="tagshow" class="tagflag">
      {{ flag ? "隐藏标签" : "显示标签" }}
    </div>
    <!-- <div class="pictoLook">
      <div
        :class="
          CameraLookstyle === 1 ? 'isactive CameraLookstyle' : 'CameraLookstyle'
        "
        @click="CameraLook(1)"
      ></div>
      <div
        :class="
          CameraLookstyle === 2 ? 'isactive CameraLookstyle' : 'CameraLookstyle'
        "
        @click="CameraLook(2)"
      ></div>
      <div
        :class="
          CameraLookstyle === 3 ? 'isactive CameraLyy
          ookstyle' : 'CameraLookstyle'
        "
        @click="CameraLook(3)"
      ></div>
      <div
        :class="
          CameraLookstyle === 4 ? 'isactive CameraLookstyle' : 'CameraLookstyle'
        "
        @click="CameraLook(4)"
      ></div>
    </div> -->
  </div>
</template>

<script>
import { showtuceng, hidetuceng } from "../../util/showtuceng";
// import __g from "../../main"
export default {
  data() {
    return {
      CameraLookstyle: 0,
      // path: "http://192.168.5.49:9080/img/biaoji.png",
      path: "127.0.0.1:8080/img/1红岭实景/",
      path1: "E:\\Freedo\\红岭\\HL_4.23\\src\\assets\\img\\1红岭实景\\",
      flag: false,
      tagIds: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    CameraLook(val) {
      if (__g) {
        switch (val) {
          case 1:
            __g.camera.lookAt(
              510264.09375,

              2493521.0,
              650.484497,
              -26.054821,
              -63.835243,
              -30
            );
            this.CameraLookstyle = 1;

            break;
          case 2:
            this.CameraLookstyle = 2;

            __g.camera.lookAt(
              510264.09375,

              2493521.0,
              650.484497,
              -26.054821,
              -63.835243,
              -30
            );
            break;
          case 3:
            this.CameraLookstyle = 3;

            __g.camera.lookAt(
              510264.09375,

              2493521.0,
              650.484497,
              -26.054821,
              -63.835243,
              -30
            );
            break;
          case 4:
            this.CameraLookstyle = 4;

            __g.camera.lookAt(
              510264.09375,

              2493521.0,
              650.484497,
              -26.054821,
              -63.835243,
              -30
            );
            break;

          default:
            break;
        }
      }
    },
    tagshow() {
      this.flag = !this.flag;

      if (this.flag) {
        if (this.tagIds.length == 0) {
          console.log("addtag");
          this.addtag();
        } else {
          __g.tag.show(this.tagIds);
        }
        // this.flag = !this.flag;
      } else {
        // __g.tag.clear();
        __g.tag.hide(this.tagIds);

        // this.addtag();
      }
    },
    addtag() {
      if (__g) {
        // 标签1
        let id1 = "SN-1"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
        let coord1 = [510418, 2494558.75, 56.89111328125]; //坐标值：标签添加的位置
        let imagePath1 = this.path + "建筑.png"; //图片路径，可以是本地路径，也支持网络路径
        let url1 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
        let imageSize1 = [28, 28]; //图片的尺寸
        let text1 = "蔡屋围统筹片区"; //标签显示的文字
        let range1 = [1, 8000.0]; //标签的可见范围
        let showLine1 = false; //标签下方是否显示垂直牵引线
        this.tagIds.push(id1);
        let o1 = new TagData(
          id1,
          coord1,
          imagePath1,
          imageSize1,
          url1,
          text1,
          range1,
          showLine1
        );
        o1.textColor = Color.Black; //设置文字颜色
        o1.textBackgroundColor = Color.White;

        __g.tag.add(o1);

        // 标签2
        let id2 = "SN-2-1"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
        let coord2 = [510303.59375, 2494559.25, 134.9962615966797]; //坐标值：标签添加的位置
        let imagePath2 = this.path + "建筑.png"; //图片路径，可以是本地路径，也支持网络路径
        let url2 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
        let imageSize2 = [28, 28]; //图片的尺寸
        let text2 = "国信证券大厦"; //标签显示的文字
        let range2 = [1, 8000.0]; //标签的可见范围
        let showLine2 = false; //标签下方是否显示垂直牵引线
        this.tagIds.push(id2);

        let o2 = new TagData(
          id2,
          coord2,
          imagePath2,
          imageSize2,
          url2,
          text2,
          range2,
          showLine2
        );
        o2.textColor = Color.Black; //设置文字颜色
        o2.textBackgroundColor = Color.White;

        __g.tag.add(o2);

        // 标签3
        let id3 = "SN-2-2"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
        let coord3 = [510322.03125, 2494524.5, 113.33856964111328]; //坐标值：标签添加的位置
        let imagePath3 = this.path + "建筑.png"; //图片路径，可以是本地路径，也支持网络路径
        let url3 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
        let imageSize3 = [28, 28]; //图片的尺寸
        let text3 = "信托大厦"; //标签显示的文字
        let range3 = [1, 8000.0]; //标签的可见范围
        let showLine3 = false; //标签下方是否显示垂直牵引线
        this.tagIds.push(id3);

        let o3 = new TagData(
          id3,
          coord3,
          imagePath3,
          imageSize3,
          url3,
          text3,
          range3,
          showLine3
        );
        o3.textColor = Color.Black; //设置文字颜色
        o3.textBackgroundColor = Color.White;

        __g.tag.add(o3);

        // 标签4
        let id4 = "SN-3-1"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
        let coord4 = [510457.875, 2494260.25, 409.4613952636719]; //坐标值：标签添加的位置
        let imagePath4 = this.path + "建筑.png"; //图片路径，可以是本地路径，也支持网络路径
        let url4 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
        let imageSize4 = [28, 28]; //图片的尺寸
        let text4 = "京基100"; //标签显示的文字
        let range4 = [1, 8000.0]; //标签的可见范围
        let showLine4 = false; //标签下方是否显示垂直牵引线
        this.tagIds.push(id4);

        let o4 = new TagData(
          id4,
          coord4,
          imagePath4,
          imageSize4,
          url4,
          text4,
          range4,
          showLine4
        );
        o4.textColor = Color.Black; //设置文字颜色
        o4.textBackgroundColor = Color.White;

        __g.tag.add(o4);

        // 标签5
        let id5 = "SN-3-2"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
        let coord5 = [510547, 2494193.75, 126.6146240234375]; //坐标值：标签添加的位置
        let imagePath5 = this.path + "银行.png"; //图片路径，可以是本地路径，也支持网络路径
        let url5 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
        let imageSize5 = [28, 28]; //图片的尺寸
        let text5 = "中国人民银行"; //标签显示的文字
        let range5 = [1, 8000.0]; //标签的可见范围
        let showLine5 = false; //标签下方是否显示垂直牵引线
        this.tagIds.push(id5);

        let o5 = new TagData(
          id5,
          coord5,
          imagePath5,
          imageSize5,
          url5,
          text5,
          range5,
          showLine5
        );
        o5.textColor = Color.Black; //设置文字颜色
        o5.textBackgroundColor = Color.White;

        __g.tag.add(o5);

        // 标签6
        let id6 = "SN-3-3"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
        let coord6 = [510557.71875, 2494146.5, 64.09304809570312]; //坐标值：标签添加的位置
        let imagePath6 = this.path + "银行.png"; //图片路径，可以是本地路径，也支持网络路径
        let url6 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
        let imageSize6 = [28, 28]; //图片的尺寸
        let text6 = "中国人民银行大厦"; //标签显示的文字
        let range6 = [1, 8000.0]; //标签的可见范围
        let showLine6 = false; //标签下方是否显示垂直牵引线
        this.tagIds.push(id6);

        let o6 = new TagData(
          id6,
          coord6,
          imagePath6,
          imageSize6,
          url6,
          text6,
          range6,
          showLine6
        );
        o6.textColor = Color.Black; //设置文字颜色
        o6.textBackgroundColor = Color.White;

        __g.tag.add(o6);

        // 标签7
        let id7 = "SN-3-4"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
        let coord7 = [510468.4375, 2494127.5, 123.60477447509766]; //坐标值：标签添加的位置
        let imagePath7 = this.path + "银行.png"; //图片路径，可以是本地路径，也支持网络路径
        let url7 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
        let imageSize7 = [28, 28]; //图片的尺寸
        let text7 = "农业银行"; //标签显示的文字
        let range7 = [1, 8000.0]; //标签的可见范围
        let showLine7 = false; //标签下方是否显示垂直牵引线
        this.tagIds.push(id7);

        let o7 = new TagData(
          id7,
          coord7,
          imagePath7,
          imageSize7,
          url7,
          text7,
          range7,
          showLine7
        );
        o7.textColor = Color.Black; //设置文字颜色
        o7.textBackgroundColor = Color.White;

        __g.tag.add(o7);

        // 标签8
        let id8 = "SN-4-1"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
        let coord8 = [510822.3125, 2494169.75, 43.70339584350586]; //坐标值：标签添加的位置
        let imagePath8 = this.path + "建筑.png"; //图片路径，可以是本地路径，也支持网络路径
        let url8 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
        let imageSize8 = [28, 28]; //图片的尺寸
        let text8 = "地王大厦"; //标签显示的文字
        let range8 = [1, 8000.0]; //标签的可见范围
        let showLine8 = false; //标签下方是否显示垂直牵引线
        this.tagIds.push(id8);

        let o8 = new TagData(
          id8,
          coord8,
          imagePath8,
          imageSize8,
          url8,
          text8,
          range8,
          showLine8
        );
        o8.textColor = Color.Black; //设置文字颜色
        o8.textBackgroundColor = Color.White;

        __g.tag.add(o8);

        // 标签9
        let id9 = "SN-4-2"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
        let coord9 = [510586.3125, 2493952.5, 163.28671264648438]; //坐标值：标签添加的位置
        let imagePath9 = this.path + "银行.png"; //图片路径，可以是本地路径，也支持网络路径
        let url9 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
        let imageSize9 = [28, 28]; //图片的尺寸
        let text9 = "平安银行大厦"; //标签显示的文字
        let range9 = [1, 8000.0]; //标签的可见范围
        let showLine9 = false; //标签下方是否显示垂直牵引线
        this.tagIds.push(id9);

        let o9 = new TagData(
          id9,
          coord9,
          imagePath9,
          imageSize9,
          url9,
          text9,
          range9,
          showLine9
        );
        o9.textColor = Color.Black; //设置文字颜色
        o9.textBackgroundColor = Color.White;

        __g.tag.add(o9);

        // 标签10
        let id10 = "SN-4-3"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
        let coord10 = [510667.9375, 2493962, 164.11358642578125]; //坐标值：标签添加的位置
        let imagePath10 = this.path + "建筑.png"; //图片路径，可以是本地路径，也支持网络路径
        let url10 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
        let imageSize10 = [28, 28]; //图片的尺寸
        let text10 = "深业中心大厦"; //标签显示的文字
        let range10 = [1, 8000.0]; //标签的可见范围
        let showLine10 = false; //标签下方是否显示垂直牵引线
        this.tagIds.push(id10);

        let o10 = new TagData(
          id10,
          coord10,
          imagePath10,
          imageSize10,
          url10,
          text10,
          range10,
          showLine10
        );
        o10.textColor = Color.Black; //设置文字颜色
        o10.textBackgroundColor = Color.White;

        __g.tag.add(o10);

        // 标签11
        let id11 = "SN-4-4"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
        let coord11 = [510739.90625, 2493979.25, 128.20452880859375]; //坐标值：标签添加的位置
        let imagePath11 = this.path + "建筑.png"; //图片路径，可以是本地路径，也支持网络路径
        let url11 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
        let imageSize11 = [28, 28]; //图片的尺寸
        let text11 = "金山大厦"; //标签显示的文字
        let range11 = [1, 8000.0]; //标签的可见范围
        let showLine11 = false; //标签下方是否显示垂直牵引线
        this.tagIds.push(id11);

        let o11 = new TagData(
          id11,
          coord11,
          imagePath11,
          imageSize11,
          url11,
          text11,
          range11,
          showLine11
        );
        o11.textColor = Color.Black; //设置文字颜色
        o11.textBackgroundColor = Color.White;

        __g.tag.add(o11);

        // 标签12
        let id12 = "SN-4-5"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
        let coord12 = [510801.90625, 2493992, 120.59784698486328]; //坐标值：标签添加的位置
        let imagePath12 = this.path + "建筑.png"; //图片路径，可以是本地路径，也支持网络路径
        let url12 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
        let imageSize12 = [28, 28]; //图片的尺寸
        let text12 = "金丰城大厦"; //标签显示的文字
        let range12 = [1, 8000.0]; //标签的可见范围
        let showLine12 = false; //标签下方是否显示垂直牵引线
        this.tagIds.push(id12);

        let o12 = new TagData(
          id12,
          coord12,
          imagePath12,
          imageSize12,
          url12,
          text12,
          range12,
          showLine12
        );
        o12.textColor = Color.Black; //设置文字颜色
        o12.textBackgroundColor = Color.White;

        __g.tag.add(o12);

        // 标签13
        let id13 = "SN-4-6"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
        let coord13 = [510885.4375, 2494015.5, 157.02870178222656]; //坐标值：标签添加的位置
        let url13 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
        let imageSize13 = [28, 28]; //图片的尺寸
        let text13 = "华润大厦"; //标签显示的文字
        let range13 = [1, 8000.0]; //标签的可见范围
        let showLine13 = false; //标签下方是否显示垂直牵引线
        let imagePath13 = this.path + "建筑.png"; //图片路径，可以是本地路径，也支持网络路径
        this.tagIds.push(id13);

        let o13 = new TagData(
          id13,
          coord13,
          imagePath13,
          imageSize13,
          url13,
          text13,
          range13,
          showLine13
        );
        o13.textColor = Color.Black; //设置文字颜色
        o13.textBackgroundColor = Color.White;

        __g.tag.add(o13);

        // 标签14
        let id14 = "SN-5"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
        let coord14 = [510888.65625, 2493811.25, 53.94995880126953]; //坐标值：标签添加的位置
        let url14 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
        let imageSize14 = [28, 28]; //图片的尺寸
        let text14 = "万象城"; //标签显示的文字
        let range14 = [1, 8000.0]; //标签的可见范围
        let showLine14 = false; //标签下方是否显示垂直牵引线
        let imagePath14 = this.path + "建筑.png"; //图片路径，可以是本地路径，也支持网络路径
        this.tagIds.push(id14);

        let o14 = new TagData(
          id14,
          coord14,
          imagePath14,
          imageSize14,
          url14,
          text14,
          range14,
          showLine14
        );
        o14.textColor = Color.Black; //设置文字颜色
        o14.textBackgroundColor = Color.White;

        __g.tag.add(o14);

        // 标签15
        let id15 = "SN-6"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
        let coord15 = [510836, 2493569, 183.98573303222656]; //坐标值：标签添加的位置
        let url15 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
        let imageSize15 = [28, 28]; //图片的尺寸
        let text15 = "幸福里"; //标签显示的文字
        let range15 = [1, 8000.0]; //标签的可见范围
        let showLine15 = false; //标签下方是否显示垂直牵引线
        let imagePath15 = this.path + "小区.png"; //图片路径，可以是本地路径，也支持网络路径
        this.tagIds.push(id15);

        let o15 = new TagData(
          id15,
          coord15,
          imagePath15,
          imageSize15,
          url15,
          text15,
          range15,
          showLine15
        );
        o15.textColor = Color.Black; //设置文字颜色
        o15.textBackgroundColor = Color.White;

        __g.tag.add(o15);

        // 标签16
        let id16 = "GY-1-1"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
        let coord16 = [510295.46875, 2495475, 135.05897521972656]; //坐标值：标签添加的位置
        let url16 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
        let imageSize16 = [28, 28]; //图片的尺寸
        let text16 = "建设集团大院"; //标签显示的文字
        let range16 = [1, 8000.0]; //标签的可见范围
        let showLine16 = false; //标签下方是否显示垂直牵引线
        let imagePath16 = this.path + "81-办公楼.png"; //图片路径，可以是本地路径，也支持网络路径
        this.tagIds.push(id16);

        let o16 = new TagData(
          id16,
          coord16,
          imagePath16,
          imageSize16,
          url16,
          text16,
          range16,
          showLine16
        );
        o16.textColor = Color.Black; //设置文字颜色
        o16.textBackgroundColor = Color.White;

        __g.tag.add(o16);

        // 标签17

        let id17 = "GY-1-2"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
        let coord17 = [510280.65625, 2495418.75, 53.73830795288086]; //坐标值：标签添加的位置
        let url17 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
        let imageSize17 = [28, 28]; //图片的尺寸
        let text17 = "建设集团办公楼"; //标签显示的文字
        let range17 = [1, 8000.0]; //标签的可见范围
        let showLine17 = false; //标签下方是否显示垂直牵引线
        let imagePath17 = this.path + "81-办公楼.png"; //图片路径，可以是本地路径，也支持网络路径
        this.tagIds.push(id17);

        let o17 = new TagData(
          id17,
          coord17,
          imagePath17,
          imageSize17,
          url17,
          text17,
          range17,
          showLine17
        );
        o17.textColor = Color.Black; //设置文字颜色
        o17.textBackgroundColor = Color.White;

        __g.tag.add(o17);

        // 标签 18
        let id18 = "GY-1-3"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
        let coord18 = [510290.15625, 2495305.25, 125.83789825439453]; //坐标值：标签添加的位置
        let url18 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
        let imageSize18 = [28, 28]; //图片的尺寸
        let text18 = "中深国际大厦"; //标签显示的文字
        let range18 = [1, 8000.0]; //标签的可见范围
        let showLine18 = false; //标签下方是否显示垂直牵引线
        let imagePath18 = this.path + "建筑.png"; //图片路径，可以是本地路径，也支持网络路径
        this.tagIds.push(id18);

        let o18 = new TagData(
          id18,
          coord18,
          imagePath18,
          imageSize18,
          url18,
          text18,
          range18,
          showLine18
        );
        o18.textColor = Color.Black; //设置文字颜色
        o18.textBackgroundColor = Color.White;

        __g.tag.add(o18);

        // 标签 19
        let id19 = "GY-1-4"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
        let coord19 = [510513.84375, 2495560, 140.16650390625]; //坐标值：标签添加的位置
        let url19 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
        let imageSize19 = [28, 28]; //图片的尺寸
        let text19 = "百汇大厦"; //标签显示的文字
        let range19 = [1, 8000.0]; //标签的可见范围
        let showLine19 = false; //标签下方是否显示垂直牵引线
        let imagePath19 = this.path + "建筑.png"; //图片路径，可以是本地路径，也支持网络路径
        this.tagIds.push(id19);

        let o19 = new TagData(
          id19,
          coord19,
          imagePath19,
          imageSize19,
          url19,
          text19,
          range19,
          showLine19
        );
        o19.textColor = Color.Black; //设置文字颜色
        o19.textBackgroundColor = Color.White;

        __g.tag.add(o19);

        // 标签20

        let id20 = "GY-1-5"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
        let coord20 = [510587.1875, 2495570.5, 104.59144592285156]; //坐标值：标签添加的位置
        let url20 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
        let imageSize20 = [28, 28]; //图片的尺寸
        let text20 = "长虹大厦"; //标签显示的文字
        let range20 = [1, 8000.0]; //标签的可见范围
        let showLine20 = false; //标签下方是否显示垂直牵引线
        let imagePath20 = this.path + "建筑.png"; //图片路径，可以是本地路径，也支持网络路径
        this.tagIds.push(id20);

        let o20 = new TagData(
          id20,
          coord20,
          imagePath20,
          imageSize20,
          url20,
          text20,
          range20,
          showLine20
        );
        o20.textColor = Color.Black; //设置文字颜色
        o20.textBackgroundColor = Color.White;

        __g.tag.add(o20);

        // 标签21
        let id21 = "GY-1-6"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
        let coord21 = [510656.71875, 2495587.5, 65.06904602050781]; //坐标值：标签添加的位置
        let url21 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
        let imageSize21 = [28, 28]; //图片的尺寸
        let text21 = "洪涛大厦"; //标签显示的文字
        let range21 = [1, 8000.0]; //标签的可见范围
        let showLine21 = false; //标签下方是否显示垂直牵引线
        let imagePath21 = this.path + "建筑.png"; //图片路径，可以是本地路径，也支持网络路径
        this.tagIds.push(id21);

        let o21 = new TagData(
          id21,
          coord21,
          imagePath21,
          imageSize21,
          url21,
          text21,
          range21,
          showLine21
        );
        o21.textColor = Color.Black; //设置文字颜色
        o21.textBackgroundColor = Color.White;

        __g.tag.add(o21);

        // 标签22
        let id22 = "GY-1-7"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
        let coord22 = [510677.1875, 2495521.75, 128.2279510498047]; //坐标值：标签添加的位置
        let url22 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
        let imageSize22 = [28, 28]; //图片的尺寸
        let text22 = "蔡屋围发展大厦"; //标签显示的文字
        let range22 = [1, 8000.0]; //标签的可见范围
        let showLine22 = false; //标签下方是否显示垂直牵引线
        let imagePath22 = this.path + "建筑.png"; //图片路径，可以是本地路径，也支持网络路径
        this.tagIds.push(id22);

        let o22 = new TagData(
          id22,
          coord22,
          imagePath22,
          imageSize22,
          url22,
          text22,
          range22,
          showLine22
        );
        o22.textColor = Color.Black; //设置文字颜色
        o22.textBackgroundColor = Color.White;

        __g.tag.add(o22);

        // 标签23
        let id23 = "GY-1-8"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
        let coord23 = [510690.375, 2495456, 68.07794952392578]; //坐标值：标签添加的位置
        let url23 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
        let imageSize23 = [28, 28]; //图片的尺寸
        let text23 = "北京大厦"; //标签显示的文字
        let range23 = [1, 8000.0]; //标签的可见范围
        let showLine23 = false; //标签下方是否显示垂直牵引线
        let imagePath23 = this.path + "建筑.png"; //图片路径，可以是本地路径，也支持网络路径
        this.tagIds.push(id23);

        let o23 = new TagData(
          id23,
          coord23,
          imagePath23,
          imageSize23,
          url23,
          text23,
          range23,
          showLine23
        );
        o23.textColor = Color.Black; //设置文字颜色
        o23.textBackgroundColor = Color.White;

        __g.tag.add(o23);

        // 标签24
        let id24 = "GY-1-9"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
        let coord24 = [510696.875, 2495299.5, 66.17851257324219]; //坐标值：标签添加的位置
        let url24 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
        let imageSize24 = [28, 28]; //图片的尺寸
        let text24 = "茂源大厦"; //标签显示的文字
        let range24 = [1, 8000.0]; //标签的可见范围
        let showLine24 = false; //标签下方是否显示垂直牵引线
        let imagePath24 = this.path + "建筑.png"; //图片路径，可以是本地路径，也支持网络路径
        this.tagIds.push(id24);

        let o24 = new TagData(
          id24,
          coord24,
          imagePath24,
          imageSize24,
          url24,
          text24,
          range24,
          showLine24
        );
        o24.textColor = Color.Black; //设置文字颜色
        o24.textBackgroundColor = Color.White;

        __g.tag.add(o24);

        // 标签25
        let id25 = "GY-1-10"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
        let coord25 = [510699.59375, 2495237.5, 152.29283142089844]; //坐标值：标签添加的位置
        let url25 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
        let imageSize25 = [28, 28]; //图片的尺寸
        let text25 = "国速大厦"; //标签显示的文字
        let range25 = [1, 8000.0]; //标签的可见范围
        let showLine25 = false; //标签下方是否显示垂直牵引线
        let imagePath25 = this.path + "建筑.png"; //图片路径，可以是本地路径，也支持网络路径
        this.tagIds.push(id25);

        let o25 = new TagData(
          id25,
          coord25,
          imagePath25,
          imageSize25,
          url25,
          text25,
          range25,
          showLine25
        );
        o25.textColor = Color.Black; //设置文字颜色
        o25.textBackgroundColor = Color.White;

        __g.tag.add(o25);

        // 标签26
        let id26 = "GY-1-11"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
        let coord26 = [510309.625, 2494964, 126.63485717773438]; //坐标值：标签添加的位置
        let url26 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
        let imageSize26 = [28, 28]; //图片的尺寸
        let text26 = "七支队办公楼"; //标签显示的文字
        let range26 = [1, 8000.0]; //标签的可见范围
        let showLine26 = false; //标签下方是否显示垂直牵引线
        let imagePath26 = this.path + "81-办公楼.png"; //图片路径，可以是本地路径，也支持网络路径
        this.tagIds.push(id26);

        let o26 = new TagData(
          id26,
          coord26,
          imagePath26,
          imageSize26,
          url26,
          text26,
          range26,
          showLine26
        );
        o26.textColor = Color.Black; //设置文字颜色
        o26.textBackgroundColor = Color.White;

        __g.tag.add(o26);

        // 标签27
        let id27 = "GY-1-12"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
        let coord27 = [510732.375, 2494954.25, 282.0292053222656]; //坐标值：标签添加的位置
        let url27 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
        let imageSize27 = [28, 28]; //图片的尺寸
        let text27 = "华讯中心"; //标签显示的文字
        let range27 = [1, 8000.0]; //标签的可见范围
        let showLine27 = false; //标签下方是否显示垂直牵引线
        let imagePath27 = this.path + "建筑.png"; //图片路径，可以是本地路径，也支持网络路径
        this.tagIds.push(id27);

        let o27 = new TagData(
          id27,
          coord27,
          imagePath27,
          imageSize27,
          url27,
          text27,
          range27,
          showLine27
        );
        o27.textColor = Color.Black; //设置文字颜色
        o27.textBackgroundColor = Color.White;

        __g.tag.add(o27);
        // 标签28
        let id28 = "GY-1-13"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
        let coord28 = [510313.34375, 2495769.5, 162.67398071289062]; //坐标值：标签添加的位置
        let url28 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
        let imageSize28 = [28, 28]; //图片的尺寸
        let text28 = "中民时代广场"; //标签显示的文字
        let range28 = [1, 8000.0]; //标签的可见范围
        let showLine28 = false; //标签下方是否显示垂直牵引线
        let imagePath28 = this.path + "建筑.png"; //图片路径，可以是本地路径，也支持网络路径
        this.tagIds.push(id28);

        let o28 = new TagData(
          id28,
          coord28,
          imagePath28,
          imageSize28,
          url28,
          text28,
          range28,
          showLine28
        );
        o28.textColor = Color.Black; //设置文字颜色
        o28.textBackgroundColor = Color.White;

        __g.tag.add(o28);
        // 标签29
        let id29 = "GY-1-14"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
        let coord29 = [510562.15625, 2495755.75, 112.8927001953125]; //坐标值：标签添加的位置
        let url29 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
        let imageSize29 = [28, 28]; //图片的尺寸
        let text29 = "万通大厦"; //标签显示的文字
        let range29 = [1, 8000.0]; //标签的可见范围
        let showLine29 = false; //标签下方是否显示垂直牵引线
        let imagePath29 = this.path + "建筑.png"; //图片路径，可以是本地路径，也支持网络路径
        this.tagIds.push(id29);

        let o29 = new TagData(
          id29,
          coord29,
          imagePath29,
          imageSize29,
          url29,
          text29,
          range29,
          showLine29
        );
        o29.textColor = Color.Black; //设置文字颜色
        o29.textBackgroundColor = Color.White;

        __g.tag.add(o29);
        // 标签30
        let id30 = "GY-1-15"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
        let coord30 = [510669.0625, 2495756.5, 241.17686462402344]; //坐标值：标签添加的位置
        let url30 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
        let imageSize30 = [28, 28]; //图片的尺寸
        let text30 = "帝豪金融大厦"; //标签显示的文字
        let range30 = [1, 8000.0]; //标签的可见范围
        let showLine30 = false; //标签下方是否显示垂直牵引线
        let imagePath30 = this.path + "建筑.png"; //图片路径，可以是本地路径，也支持网络路径
        this.tagIds.push(id30);

        let o30 = new TagData(
          id30,
          coord30,
          imagePath30,
          imageSize30,
          url30,
          text30,
          range30,
          showLine30
        );
        o30.textColor = Color.Black; //设置文字颜色
        o30.textBackgroundColor = Color.White;

        __g.tag.add(o30);
        // 标签31
        let id31 = "GY-1-16"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
        let coord31 = [510904.28125, 2495766.25, 110.61300659179688]; //坐标值：标签添加的位置
        let url31 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
        let imageSize31 = [28, 28]; //图片的尺寸
        let text31 = "嘉宝田花园"; //标签显示的文字
        let range31 = [1, 8000.0]; //标签的可见范围
        let showLine31 = false; //标签下方是否显示垂直牵引线
        let imagePath31 = this.path + "小区.png"; //图片路径，可以是本地路径，也支持网络路径
        this.tagIds.push(id31);

        let o31 = new TagData(
          id31,
          coord31,
          imagePath31,
          imageSize31,
          url31,
          text31,
          range31,
          showLine31
        );
        o31.textColor = Color.Black; //设置文字颜色
        o31.textBackgroundColor = Color.White;

        __g.tag.add(o31);
        // 标签32
        let id32 = "GY-1-17"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
        let coord32 = [510445.90625, 2496250.5, 56.04585647583008]; //坐标值：标签添加的位置
        let url32 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
        let imageSize32 = [28, 28]; //图片的尺寸
        let text32 = "艺茂中心"; //标签显示的文字
        let range32 = [1, 8000.0]; //标签的可见范围
        let showLine32 = false; //标签下方是否显示垂直牵引线
        let imagePath32 = this.path + "建筑.png"; //图片路径，可以是本地路径，也支持网络路径
        this.tagIds.push(id32);

        let o32 = new TagData(
          id32,
          coord32,
          imagePath32,
          imageSize32,
          url32,
          text32,
          range32,
          showLine32
        );
        o32.textColor = Color.Black; //设置文字颜色
        o32.textBackgroundColor = Color.White;

        __g.tag.add(o32);
        // 标签33
        let id33 = "GY-1-18"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
        let coord33 = [510783.09375, 2496340.25, 111.85453033447266]; //坐标值：标签添加的位置
        let url33 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
        let imageSize33 = [28, 28]; //图片的尺寸
        let text33 = "深业物流大厦"; //标签显示的文字
        let range33 = [1, 8000.0]; //标签的可见范围
        let showLine33 = false; //标签下方是否显示垂直牵引线
        let imagePath33 = this.path + "建筑.png"; //图片路径，可以是本地路径，也支持网络路径
        this.tagIds.push(id33);

        let o33 = new TagData(
          id33,
          coord33,
          imagePath33,
          imageSize33,
          url33,
          text33,
          range33,
          showLine33
        );
        o33.textColor = Color.Black; //设置文字颜色
        o33.textBackgroundColor = Color.White;

        __g.tag.add(o33);
        // 标签34
        let id34 = "GY-1-19"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
        let coord34 = [510799.90625, 2496552, 347.0163879394531]; //坐标值：标签添加的位置
        let url34 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
        let imageSize34 = [28, 28]; //图片的尺寸
        let text34 = "宝能第一空间"; //标签显示的文字
        let range34 = [1, 8000.0]; //标签的可见范围
        let showLine34 = false; //标签下方是否显示垂直牵引线
        let imagePath34 = this.path + "建筑.png"; //图片路径，可以是本地路径，也支持网络路径
        this.tagIds.push(id34);

        let o34 = new TagData(
          id34,
          coord34,
          imagePath34,
          imageSize34,
          url34,
          text34,
          range34,
          showLine34
        );
        o34.textColor = Color.Black; //设置文字颜色
        o34.textBackgroundColor = Color.White;

        __g.tag.add(o34);
        // 标签35
        let id35 = "GY-1-20"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
        let coord35 = [510379.4375, 2493830.75, 121.43464660644531]; //坐标值：标签添加的位置
        let url35 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
        let imageSize35 = [28, 28]; //图片的尺寸
        let text35 = "金融中心大厦"; //标签显示的文字
        let range35 = [1, 8000.0]; //标签的可见范围
        let showLine35 = false; //标签下方是否显示垂直牵引线
        let imagePath35 = this.path + "建筑.png"; //图片路径，可以是本地路径，也支持网络路径
        this.tagIds.push(id35);

        let o35 = new TagData(
          id35,
          coord35,
          imagePath35,
          imageSize35,
          url35,
          text35,
          range35,
          showLine35
        );
        o35.textColor = Color.Black; //设置文字颜色
        o35.textBackgroundColor = Color.White;

        __g.tag.add(o35);
        // 标签36
        let id36 = "GY-1-21"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
        let coord36 = [510908.03125, 2493577.25, 204.24159240722656]; //坐标值：标签添加的位置
        let url36 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
        let imageSize36 = [28, 28]; //图片的尺寸
        let text36 = "深圳君悦酒店"; //标签显示的文字
        let range36 = [1, 8000.0]; //标签的可见范围
        let showLine36 = false; //标签下方是否显示垂直牵引线
        let imagePath36 = this.path + "酒店.png"; //图片路径，可以是本地路径，也支持网络路径
        this.tagIds.push(id36);

        let o36 = new TagData(
          id36,
          coord36,
          imagePath36,
          imageSize36,
          url36,
          text36,
          range36,
          showLine36
        );
        o36.textColor = Color.Black; //设置文字颜色
        o36.textBackgroundColor = Color.White;

        __g.tag.add(o36);
        // 标签37
        let id37 = "GY-1-22"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
        let coord37 = [510530.0625, 2493822.75, 132.2466583251953]; //坐标值：标签添加的位置
        let url37 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
        let imageSize37 = [28, 28]; //图片的尺寸
        let text37 = "蔡屋围丽晶大厦"; //标签显示的文字
        let range37 = [1, 8000.0]; //标签的可见范围
        let showLine37 = false; //标签下方是否显示垂直牵引线
        let imagePath37 = this.path + "建筑.png"; //图片路径，可以是本地路径，也支持网络路径
        this.tagIds.push(id37);

        let o37 = new TagData(
          id37,
          coord37,
          imagePath37,
          imageSize37,
          url37,
          text37,
          range37,
          showLine37
        );
        o37.textColor = Color.Black; //设置文字颜色
        o37.textBackgroundColor = Color.White;

        __g.tag.add(o37);
        // 标签38
        let id38 = "GY-1-23"; //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
        let coord38 = [511010.84375, 2494045.75, 85.46062469482422]; //坐标值：标签添加的位置
        let url38 = ""; //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
        let imageSize38 = [28, 28]; //图片的尺寸
        let text38 = "湖北宝丰大厦"; //标签显示的文字
        let range38 = [1, 8000.0]; //标签的可见范围
        let showLine38 = false; //标签下方是否显示垂直牵引线
        let imagePath38 = this.path + "建筑.png"; //图片路径，可以是本地路径，也支持网络路径
        this.tagIds.push(id38);

        let o38 = new TagData(
          id38,
          coord38,
          imagePath38,
          imageSize38,
          url38,
          text38,
          range38,
          showLine38
        );
        o38.textColor = Color.Black; //设置文字颜色
        o38.textBackgroundColor = Color.White;

        __g.tag.add(o38);
      }
    },
    polyline_del() {
      __g.polyline.delete("p773");
    },
    polyline_add() {
      if (__g) {
        // __g.camera.lookAt(
        //   508666.0625,
        //   2494739.25,
        //   1101.650635,
        //   -20.728325,
        //   -4.184755,
        //   -30
        // );
        __g.camera.lookAt(
          509785.65625,
          2493510.25,
          1005.481873,
          0,
          -37.999916,
          -40.999987
        );
      }

      let coords = [
        [510248.03125, 2492991.25, 0.1599999964237213],
        [510167.46875, 2497010.75, 17.596874237060547],
        [511253.15625, 2497696.5, 23.846248626708984],
        [512043.5, 2497744, 18.733436584472656],
        [512209.15625, 2497434.75, 19.673749923706055],

        [512191.0625, 2497015, 12.841562271118164],
        [512249.65625, 2496277.75, 18.799686431884766],
        [512475.1875, 2495711.25, 14.379374504089355],
        [512417.03125, 2495655.25, 13.286250114440918],
        [511548.78125, 2495632.5, 11.49062442779541],
        [511469.4375, 2495463.5, 8],
        [511370.5, 2495381.75, 6.318437576293945],
        [511335.5, 2495041, 5.556250095367432],
        [511390.46875, 2494542.5, 4.460312366485596],
        [511548.03125, 2493368, 4.378749847412109],
        [510970.09375, 2493248, 3.76031231880188],
        [510897.15625, 2493272, 3.6418750286102295],
        [510763.03125, 2493130.25, 3.692812442779541],
        [510574.71875, 2493035.5, 0.1603125035762787],
        [510247.09375, 2492969.5, 0.1599999964237213],
      ]; //光流的polyline的坐标数组
      coords.forEach((item) => {
        item[2] = item[2] + 10;
      });
      //   let duration = 3; //光流粒子的生命周期
      //   let thickness = 0.4; //光流线的宽度
      //   let interval = 0.5; //光流粒子发射间隔
      //   let velocity = 10; //光流粒子的速度
      //   let color = [1, 1, 0, 0.5]; //光流的颜色
      //   o1 = new BeamData(
      //     "p773",
      //     duration,
      //     thickness,
      //     interval,
      //     velocity,
      //     color,
      //     coords
      //   );
      // }

      // __g.beam.add(o1);

      //  let coords = item.coordinates[0][0]
      let color = [1, 1, 1, 1];
      let style = 4;
      let thickness = 10;
      let brightness = 0.8;
      let flowRate = 0.5;
      let o1 = new PolylineData(
        "p773",
        color,
        coords,
        style,
        thickness,
        brightness,
        flowRate
      );
      o1.depthTest = true;
      if (__g) {
        __g.polyline.add(o1);
      }
    },
    addCameraTour() {
      console.log(111);
      let frames = [];
      frames.push(
        new CameraTourKeyFrame(
          0,
          2.0,
          [509845.78125, 2494115.5, 572.988708],
          [-32.791355, -5.582986, 0]
        )
      );
      frames.push(
        new CameraTourKeyFrame(
          4.0,
          [510170.28125, 2492695.5, 371.758575],
          [-18.926664, -71.260094, 0]
        )
      );
      let o = new CameraTourData("1", "test", 20, frames);
      __g.cameraTour.add(o);
    },
    playCameraTour() {
      __g.cameraTour.play("1", () => {
        console.log(2222);
      });
    },
  },
  created() {
    if (__g) {
      // __g.infoTree.show("A3CC59C2442B8110161A4A913FCDE533")
    }
  },
  mounted() {
    setTimeout(() => {
      showtuceng(this.$treedata.hlsjdata);
      this.polyline_add();
    }, 200);
    // this.addtag();
    // this.addCameraTour();
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {
    __g.infoTree.hide("A3CC59C2442B8110161A4A913FCDE533");

    hidetuceng(this.$treedata.hlsjdata);
    this.polyline_del();
    __g.cameraTour.delete("1");
    __g.tag.clear();
  },
  destroyed() {},
  activated() {},
  components: {},
};
</script>

<style lang="scss" scoped>
.pictoLook {
  width: 200px;
  height: 70%;
  /* background: #000; */
  position: absolute;
  top: 150px;
  left: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  > div {
    width: 90%;
    height: 19%;
    border: 3px solid rgb(69, 255, 178);
    box-sizing: border-box;
  }
  .isactive {
    border: 5px solid rgb(255, 255, 255) !important;
    transform: scale(1.2);
  }
  > div:hover {
    transform: scale(1.2);
    transition: all 0.2s;
  }

  > div:nth-of-type(1) {
    background: url("../../assets/img/1红岭实景/06168135-f86a-4cca-a981-99da8a29e695.jpg")
      no-repeat center/cover;
  }
  > div:nth-of-type(2) {
    background: url("../../assets/img/1红岭实景/3b55c90a-b719-4b3b-a537-3881513aecfd.jpg")
      no-repeat center/cover;
  }
  > div:nth-of-type(3) {
    background: url("../../assets/img/1红岭实景/76262c68-19fd-4821-a1cd-6f983fcf94ae.png")
      no-repeat center/cover;
  }
  > div:nth-of-type(4) {
    background: url("../../assets/img/1红岭实景/b8bbfda5-bde2-42c9-8c87-a61fa1bbabf2.jpg")
      no-repeat center/cover;
  }
}
.btn {
  position: relative;
  z-index: 10;
  cursor: pointer;
}
.tagflag {
  z-index: 100;
  width: 130px;
  height: 40px;
  cursor: pointer;
  background: rgba(18, 150, 219, 0.6);
  position: absolute;
  text-align: center;
  line-height: 40px;
  color: rgba(255, 255, 255, 0.6);
  top: 100px;
  left: 20px;
  font-weight: 600;

  > li {
    color: rgba(255, 255, 255, 1);
    background: rgba(18, 150, 219, 1);

    &.router-link-active {
      color: #fee36d;
      font-weight: 700;
    }
  }
}
</style>
