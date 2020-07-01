
/***
 *  引用百度地图
 * @param keys
 * @returns {Promise<any>}
 * @constructor
 */

export default function BMap(key) {
  let ak = key ? key : "KjRAigHlBYPtPAEeuKFYee5w";
  return new Promise((resolve, reject) => {
    if (window.BMap) {
      resolve(window.BMap);
    } else {
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src =
          "http://api.map.baidu.com/api?v=3.0&callback=initBMap&ak="+ak;
      script.onerror = reject;
      document.head.appendChild(script);
    }
    window.initBMap = () => {
      resolve(window.BMap);
    };
  });
}
