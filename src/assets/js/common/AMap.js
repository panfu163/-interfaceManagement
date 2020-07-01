
/***
 *  引用高德地图
 * @param keys
 * @returns {Promise<any>}
 * @constructor
 */

export default function AMap(key) {
  let ak = key ? key : "fb59e2aad4b88e956c43fbef8a23841e";
  return new Promise((resolve, reject) => {
    if (window.AMap) {
      resolve(window.AMap);
    } else {
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src =
          "http://webapi.amap.com/maps?v=1.4.15&callback=initAMap&key=" +ak+"&plugin=AMap.Geolocation,AMap.ToolBar,AMap.Geocoder,AMap.PlaceSearch,AMap.Autocomplete,AMap.Driving";
      script.onerror = reject;
      document.head.appendChild(script);
    }
    window.initAMap = () => {
      resolve(window.AMap);
    };
  });
}
