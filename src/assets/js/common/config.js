export default {
  /**
   * @description api请求基础路径
   */
  baseUrl: {
    dev:"http://terlivy.imwork.net/dev/",  //开发环境
    beta:"http://106.52.70.75:8081/", //测试环境 http://terlivy.imwork.net/
    pro:"http://terlivy.imwork.net/" ,//正式环境
    url:"http://192.168.3.94/uploadfile" //静态资源
  },
  /**
   * @description api请求key
   */
  appId: "wx91a67706e2a26e51",//wxbb0b5db5a5350bfb---wx91a67706e2a26e51
  appSecret: "dd90ea5aed334214832ed46e18367f1f",
  activityId:2020052323241229, //默认活动为小兔子ID ef41f6ddc6f54faca384fe3909813480
  /**
   * 模块ID
   */
  moduleId: "",
  /**
   * 接口超时时间(秒)
   */
  apiTimeout: 15,
  useEslint:false
};
