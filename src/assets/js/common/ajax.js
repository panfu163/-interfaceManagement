import instance from './instance';
/*
 * ajax方法实现请求后台数据
 * @param  {Array}  path      链接地址
 * @param  {String} params    参数
 * @param  {String} success   成功
 * @param  {String} fail      失败
 * @return {Array}            请求数据结果
 */
export default function(path, params, success, fail){
   instance.post(path,params).then((response)=>{
        console.log(response);
      if(response.status===200){ //只做成功处理--失败的请查看instance.js
         let data=response.data;
         if(data.Status===0){
            if(data.Status===0){
               if(typeof success === "function"){
                  return success(data);
               }
            }else if(data.code==="100"){
               console.log("登录失效");
            }else {
               console.log("或取数据失败");
            }
         }else{
            if(typeof fail === "function"){
               return fail(data);
            }
         }
      }
   }).catch((err) => { //使用catch方法和then的第二个参数的效果一样，但是它还有你另外一个作用,那就是在then的第一个resolve回调函数中代码出错，不用卡死js的执行，而是会进入到catch中，捕获err原因。
      console.log('err', err);
   });
};

