/*
*主题处理方案
*/
export default{
	 theme:["red","blue","yellow","green"] ,//主题--这里需要和theme-blue样式文件相对应
	 getTheme(theme){
	    let  themes= theme ? theme : "";
			localStorage.setItem("themes",themes);
		   location.reload();
		  //刷新一下页面
		  return themes;
	 },
	 //获取季节-根据季节变化主题
	 seasonBg(){
	     var d = new Date(),
	         m = d.getMonth() + 1;
		 let r;
	     switch(true){
	         case m >= 3 && m < 6:
			 console.log('春');
			 r="green";
			 break;
			 case m >= 6 && m < 9:
			 console.log('夏');
			  r="red";
			 break;
			 case m >= 9 && m < 12:
	           console.log('秋');
			  r="yellow"	;
	         break;
	         default:
	          console.log('冬');
			  r="blue";
	         break;
	     }
		 localStorage.setItem("seasonBgThemes",r);
		 return r;
	 },
	//主题图片地址
	themeUrl(){
		let isThemes=localStorage.getItem("themes")?localStorage.getItem("themes"):"red";
		return "../../css/themes/"+isThemes+"/img/";
	}
};
