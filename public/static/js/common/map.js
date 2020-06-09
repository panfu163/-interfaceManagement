import ABMap from "./BMap.js";

let Map = {};

// 格式化高德定位到的数据
let formatLocationInfo = (info, lng, lat) => {
  let _city = info.addressComponent.city;
  let _district = info.addressComponent.district;
  let _province = info.addressComponent.province;
  let _street = info.addressComponent.street;
  let _streetNumber = info.addressComponent.streetNumber;
  let _township = info.addressComponent.township;
  let _address = _province + _city + _street + _township + _streetNumber;
  let _adcode = info.addressComponent.adcode;
  let _formattedAddress = info.formattedAddress;
  let location = {
    provinceCode: _adcode.substring(0, 2) + "0000",
    cityCode: "", //_adcode.substring(0, 4) + '00'
    cityCodeId: _adcode.substring(0, 4) + "00",
    adcode: _adcode,
    province: _province,
    city: _city,
    district: _district,
    Longitude: lng,
    Latitude: lat,
    address: _address,
    formattedAddress: _formattedAddress
  };
  sessionStorage.setItem("location", JSON.stringify(location));
  return location;
};

//高德德地图获取坐标 donotcache 为true时不适用缓存坐标位置 默认缓存地址
//高德浏览器定位城市
Map.getSessionLocation = (callback, donotcache) => {
  let location = sessionStorage.getItem("location");
  if (location && !donotcache) {
    location = JSON.parse(location);
    callback(location); //返回城市信息
  } else {
    let geolocation = new AMap.Geolocation({
      resizeEnable: true,
      enableHighAccuracy: true, //是否使用高精度定位，默认:true
      timeout: 10000, //超过10秒后停止定位，默认：无穷大
      maximumAge: 0, //定位结果缓存0毫秒，默认：0
      noIpLocate: 0, //是否禁止使用IP定位，默认值为0，可选值0-3
      GeoLocationFirst: true //默认为false，设置为true的时候可以调整PC端为优先使用浏览器定位，失败后使用IP定位
    });

    geolocation.getCurrentPosition(); //浏览器定位
    AMap.event.addListener(geolocation, "complete", data => {
      //返回定位信息
      let Longitude = data.position.getLng();
      let Latitude = data.position.getLat();
      let geocoder = new AMap.Geocoder();
      let lnglatXY = [Longitude, Latitude];
      console.log(lnglatXY);
      geocoder.getAddress(lnglatXY, (status, result) => {
        console.log(status);
        if (status === "complete" && result.info === "OK") {
          callback(formatLocationInfo(result.regeocode, Longitude, Latitude)); //返回城市信息
        }
      });
    });
    //定位失败选择百度定位
    AMap.event.addListener(geolocation, "error", data => {
      //引用百度JS
      ABMap().then(
        BMap => {
          console.log(BMap); //加载成功
          Map.baiduGetLocation(res => {
            callback(res);
          });
        },
        e => {
          console.log("地图加载失败", e);
        }
      );
    });
  }
};

// 调用百度地图获取经纬度
Map.baiduGetLocation = callback => {
  let geolocation = new BMap.Geolocation();
  geolocation.getCurrentPosition(
    function(r) {
      if (this.getStatus() == BMAP_STATUS_SUCCESS) {
        // 将百度经纬度转为高德经纬度
        let gps = [r.point.lng, r.point.lat];
        AMap.convertFrom(gps, "gps", function(status, result) {
          if (result.info === "ok") {
            // 得到高德经纬度
            let lnglats = result.locations;
            // 根据经纬度逆解析为地址信息
            let geocoder = new AMap.Geocoder();
            geocoder.getAddress(lnglats, function(status, result) {
              if (status === "complete" && result.info === "OK") {
                let info = result.regeocodes[0];
                callback(formatLocationInfo(info,lnglats[0].lng,lnglats[0].lat));
              }
            });
          }
        });
      } else {
        // alert('failed' + this.getStatus());
      }
    },
    { enableHighAccuracy: true }
  );
};

//高德规划导航路线
Map.DrivingFunction = (longitude, latitude, shopLongitude, shopLatitude) => {
  var driving = new AMap.Driving({ hideMarkers: true }); //创建驾车路线规划组件
  //console.log(shopLongitude+"==="+shopLatitude+"=="+longitude+"===="+latitude);
  //根据起终点坐标规划驾车路线[116.379028, 39.865042], [116.427281, 39.903719],
  driving.search([longitude, latitude], [shopLongitude, shopLatitude], function(
    status,
    result
  ) {
    driving.searchOnAMAP({
      origin: result.origin,
      destination: result.destination
    });
  });
};

export default Map;
