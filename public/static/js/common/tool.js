import Ajax from "./ajax.js";
import md5 from "blueimp-md5";
let Tool = {};

/*
 * distinct 数组对像去重的方法
 * @param  {Arr}  Arr      数组
 * @return {result}  Arr      请求数据结果 数组
 */
Tool.distinct = arr => {
  let result = [];
  let objs = {};
  for (let i = 0; i < arr.length; i++) {
    if (!objs[arr[i].id]) {
      result.push(arr[i]);
      objs[arr[i].id] = true;
    }
  }
  return result;
};

//微信签名设置
Tool.weiXin = () => {
  let url = encodeURIComponent(window.location.href);
  Ajax.ajax(
    "/integration/app/public/sign",
    { url: url, appId: "wx821f43725ab728ca" },
    res => {
      let _param = {
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: res.data.appId,
        timestamp: res.data.timestamp,
        nonceStr: res.data.noncestr,
        signature: res.data.signature,
        jsApiList: [
          "chooseImage",
          "translateVoice",
          "uploadImage",
          "downloadImage",
          "previewImage",
          "openLocation",
          "getLocation",
          "scanQRCode",
          "checkJsApi",
          "onMenuShareTimeline",
          "onMenuShareAppMessage",
          "onMenuShareQQ",
          "onMenuShareWeibo",
          "onMenuShareQZone"
        ]
      };
      //alert(JSON.stringify(_param))
      wx.config(_param);
      wx.error(function(res) {
        //   alert("出错了：" + res.errMsg);//这个地方的好处就是wx.config配置错误，会弹出窗口哪里错误，然后根据微信文档查询即可。
      });
    },
    e => {
      console.log(e);
    }
  );
};

// Sinng计算
Tool.sinngTxt = (parms, needToken = true) => {
  // console.log('sign计算参数：' + JSON.stringify(parms))
  if (parms) {
    let arr = [];
    for (let key in parms) {
      if (parms[key] === undefined) continue;
      arr.push(key);
    }
    arr.sort();
    let str = "";
    for (let i in arr) {
      if (parms[arr[i]] != null) {
        if (typeof parms[arr[i]] === "object") {
          let r = JSON.stringify(parms[arr[i]])
            .split("")
            .sort()
            .join("");
          str += arr[i] + "=" + r + "&";
        } else {
          str += arr[i] + "=" + parms[arr[i]] + "&";
        }
      } else {
        str += arr[i] + "=&";
      }
    }
    str =
      str.substr(0, str.length - 1) +
      "&key=" +
      "dd90ea5aed334214832ed46e18367f1f"; // + '&token='
    if (needToken) str += "&token=" + util.getAccessToken();
    console.log("待签名数据：" + str);
    // console.log('待签名数据：' + encodeURIComponent(str))
    let resultMd5 = md5(str);
    console.log("签名后：" + resultMd5);
    return resultMd5;
  } else {
    return "";
  }
};

//js 把对象按照属性名的字母顺序进行排列
Tool.objKeySort = obj => {
  var newkey = Object.keys(obj).sort();
  //先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
  var newObj = {}; //创建一个新的对象，用于存放排好序的键值对
  for (var i = 0; i < newkey.length; i++) {
    //遍历newkey数组
    newObj[newkey[i]] = obj[newkey[i]]; //向新创建的对象中按照排好的顺序依次增加键值对
  }
  return newObj; //返回排好序的新对象
};

//按名称排序,由“参数”+“值”合并为字符串
Tool.objKeyValue = objs => {
  var str = ""; //定义一个空字符用来接收对象里的key或者value
  for (var item in objs) {
    //遍历item变量里的对象的属性和元素，
    str += item + "&"; //将obj对象的属性遍历出来，并且追加到str字符中。
    str += objs[item] + "&"; //将obj对象的值遍历出来，并且追加到str字符中。
  }
  //第一种方法、将字符串中最后一个元素","逗号去掉，
  str = str.substring(0, str.lastIndexOf("&"));
  //第二种方法、将字符串中最后一个元素","逗号去掉，
  //str = (str.substring(str.length - 1) == ',') ? str.substring(0, str.length - 1) : str;
  //第三种方法、将字符串中最后一个元素","逗号去掉，
  //var str=str.substring(0,str.length-1);//3、将字符串中最后一个元素","逗号去掉，
  //第四种方法、将字符串中最后一个元素","逗号去掉，
  // var reg=/,$/gi;
  // str=str.replace(reg,"");
  //console.log(str)
  console.log(str);
  return str;
};
export default Tool;
