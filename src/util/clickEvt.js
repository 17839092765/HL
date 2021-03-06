// import store from "../store"
// import connector from "../api/common"
import layers_jjone from "../assets/js/jjone";
// import __g from "../main";
function click_EVT_building(data, datatype) {
  __g.tileLayer.stopHighlightActor();
  var tileLayerId = data.Id;
  // name -> ObjectID
  var actorName = data.ObjectID;
  // requestdata("楼层信息", data.Id)
  __g.tileLayer.highlightActor(tileLayerId, actorName);
  __g.tileLayer.focusActor(tileLayerId, actorName);
}

function click_EVT_jj100(data) {
  var tileLayerId = data.Id;
  // name -> ObjectID
  var actorName = data.ObjectID;
  clear_jj100();
  movelayer([tileLayerId]);
  __g.tileLayer.highlightActor(tileLayerId, actorName);
}

//楼层偏移事件
function movelayer(arr) {
  arr.forEach((item) => {
    var translate = [510459.46875, 2494128.5, 20];
    __g.tileLayer.setLocation(item, translate, function(evt) {});
  });
}
//清除京基100偏移事件
function clear_jj100() {
  layers_jjone.forEach((item, index) => {
    let lastid_ = item.id;
    // __g.tileLayer.setLocation(lastid_, [510399.46875, 2494140.25, 20]);
    __g.tileLayer.setLocation(lastid_, [510393.65625, 2494128.5, 20]);

    // __g.tileLayer.setLocation(lastid_, [510447.46875, 2494084.25, 20]);
  });
}
//京基100请求数据
// async function requestdata(title, data) {
//   // await arr.forEach(async function (data) {
//   var rcdata
//   if (title == "单户信息") {
//     rcdata = await connector.house_jj100_one(data)
//   } else if (title == "楼层信息") {
//     rcdata = await connector.layer_jj100_one(data)
//   }
//   var data_show = {
//     title: title,
//     data: rcdata.data,
//   }
//   store.commit("clickData", data_show)
// }
export { click_EVT_building, click_EVT_jj100, clear_jj100 };
