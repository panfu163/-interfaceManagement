import axios from "axios";
let Ajax = {};

/*
 * ajax方法实现请求后台数据
 * @param  {Array}  path      链接地址
 * @param  {String} params    参数
 * @param  {String} success   成功
 * @param  {String} fail      失败
 * @return {Array}            请求数据结果
 */
Ajax.ajax = (path, params, success, fail, method) => {
  axios({
    method: method ? method : "post", // `method` 是创建请求时使用的方法 默认是post
    url: path, //  `url` 是用于请求的服务器 URL /user
    data: params ? params : null,
    timeout: 1000, // `timeout` 指定请求超时的毫秒数(0 表示无超时时间) 如果请求话费了超过 `timeout` 的时间，请求将被中断
    withCredentials: false //`withCredentials` 表示跨域请求时是否需要使用凭证
  })
    .then(res => {
      if (res.status === 200) {
        //接口正常
        if (success) {
          success(res.data);
        }
      }
    })
    .catch(error => {
      if (fail) {
        fail(error.data);
      }
    });
};

/*
 * ajax方法实现跨域请求后台数据
 * @param  {Array}  path      链接地址
 * @param  {String} params    参数
 * @param  {String} success   成功
 * @param  {String} fail      失败
 * @return {Array}            请求数据结果
 */
Ajax.jsonp = (path, params, success, fail, method) => {
  axios({
    method: method ? method : "post", // `method` 是创建请求时使用的方法 默认是post
    url: path, //  `url` 是用于请求的服务器 URL /user
    data: params ? params : null,
    timeout: 1000, // `timeout` 指定请求超时的毫秒数(0 表示无超时时间) 如果请求话费了超过 `timeout` 的时间，请求将被中断
    withCredentials: true, //`withCredentials` 表示跨域请求时是否需要使用凭证
    headers: {
      // 跨域请求 这个配置不能少
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      Accept: "application/json"
    }
  })
    .then(res => {
      if (res.status === 200) {
        //接口正常
        if (success) {
          success(res.data);
        }
      }
    })
    .catch(error => {
      if (fail) {
        fail(error.data);
      }
    });
};

export default Ajax;
