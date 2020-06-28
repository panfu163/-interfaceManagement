<!---
 --@author  PanFu
 --@data 2020-06-9:08
 --@description 页面管理
 --@version 1.0
--->
<template>
    <div class="pageMaking">
        <div class="pageMaking-container">

            <div class="pageMaking-header">
               <div class="pageMaking-header-min">清空</div>
            </div>

            <div class="pageMaking-left">
                <div class="aside">
                    <h5>布局字段</h5>
                    <draggable :list="layout"  tag="ul"
                               :options="{group:{ name:'people', pull:'clone',put:false},sort:false,ghostClass: 'ghosts'}"
                               :clone="clone"
                               @end="handleMoveEnd"
                               @start="handleMoveStart"
                               :move="handleMove"
                    >
                        <li class="list" v-for="(item, index) in layout" :key="index" >
                            <i class="el-icon-s-grid"></i>{{ item.name }}
                        </li>
                    </draggable>
                </div>

                <div class="aside">
                    <h5>基础字段</h5>
                    <draggable :list="basics"  tag="ul"
                               :options="{group:{ name:'people', pull:'clone',put:false},sort:false}"
                               :clone="clone"
                               @end="handleMoveEnd"
                               @start="handleMoveStart"
                               :move="handleMove"
                    >
                        <li class="list" v-for="(item, index) in basics" :key="index" >
                            <i class="el-icon-s-grid"></i>{{ item }}
                        </li>
                    </draggable>
                </div>

                <div class="aside">
                    <h5>高级字段</h5>
                    <draggable :list="senior"  tag="ul"
                               :options="{group:{ name:'people', pull:'clone',put:false},sort:false}"
                               :clone="clone"
                               @end="handleMoveEnd"
                               @start="handleMoveStart"
                               :move="handleMove"
                    >
                        <li class="list" v-for="(item, index) in senior" :key="index" >
                            <i class="el-icon-s-grid"></i>{{ item }}
                        </li>
                    </draggable>
                </div>

            </div>
            <div class="pageMaking-min">

                   <div class="pageMaking-list" :class="{noData:list.length==0}">
                    <draggable v-model="list"
                               :options="{ chosenClass:'active',scroll:true}"
                               group="people"
                               handle=".handle"
                               ghost-class="ghost"
                               @end="onEnd"
                               @add="onAdd"
                               :move="move"
                    >
                        <div  class="pageMaking-view"
                              v-for="(item, index) in list"
                              :key="index"
                              :class="{on:isView==index}"
                              @mousedown="onMousedown(index)"
                        >
                            <!---这里定义好的模板 把ID对应显示-->
                            <h3>{{ item.id }}</h3>
                            <p>{{ item.title }}</p>
                            <!---NED 这里定义好的模板-->

                            <div class="handle" v-if="isView==index">+</div>
                            <template v-if="isView==index">
                                <div class="view-action">
                                    <i class="el-icon-copy-document" @click="copy($event,index)"></i>
                                    <i class="el-icon-delete" @click="del($event,index)"></i>
                                </div>
                            </template>
                        </div>
                    </draggable>

                   <draggable class="pageMaking-grid active">
                       <div class="handle">+</div>
                       <draggable class="grid" group="people" :options="{group:{ name:'people', pull:'clone',put:false},sort:false}">1</draggable>
                       <draggable class="grid" group="people" :options="{group:{ name:'people', pull:'clone',put:false},sort:false}">2</draggable>
                       <div class="view-action">
                           <i class="el-icon-copy-document" @click="copy($event,index)"></i>
                           <i class="el-icon-delete" @click="del($event,index)"></i>
                       </div>
                   </draggable>

                   </div>
            </div>

            <div class="pageMaking-right">
                <header class="pageMaking-right-header">
                    <div class="config-tab"
                         :class="{active:index==isAttribute}"
                         @click="attributeClick(index)"
                         v-for="(itme,index) in attribute"
                         :key="index">{{itme}}</div>
                </header>
                <template v-if="isAttribute==0">
                    <div class="pageMaking-box">
                        <h5>字段标识</h5>
                        <input type="text" placeholder="" class="input">
                        <h5>标题</h5>
                        <input type="text"  placeholder="" class="input">
                        <h5>宽度</h5>
                        <input type="text"  placeholder="100%" class="input">
                        <h5>操作属性</h5>
                        <input type="text"  placeholder="" class="input">
                    </div>
                </template>
                <template v-else>
                    <div class="pageMaking-box">
                <h5>标签对齐方式</h5>
                <div class="radio-group">
                    <div class="radio">左对齐</div>
                    <div  class="radio active">右对齐</div>
                    <div  class="radio">顶部对齐</div>
                </div>
                <h5>组件尺寸</h5>
                <div class="radio-group">
                    <div class="radio">medium</div>
                    <div  class="radio active">small</div>
                    <div  class="radio">mini</div>
                </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
  import draggable from './js/vuedraggable';
  export default {
    name:"pageMaking",
    components: {
      draggable
    },
    props: {
          layoutFields: { //册格布局
            type: Array,
            default: () => ['grid']
          }
      },
    computed:{
    },
    data() {
      return {
        attribute:["字段属性","表单属性"],
        isAttribute:0,
        isView:0,
        layout:[{name:"布局1:1",id:1}],
        basics:["单行文本","多行文本","计数器","单选框组","多选框组","时间选择","日期选择","文字"],
        senior:["自定义区域","自定义组件","文件","图片","编辑器","级联选择器","子表单"],
        list1:[{title:"例表1",id:1},{ title:"例表2", id:2, }],
        list: [],
      };
    },
    methods: {
      handleMoveEnd (evt) {
      },
      handleMoveStart ({oldIndex}) {
        console.log('start',oldIndex,this.basicComponents);
      },
      handleMove () {
        return true;
      },
      //回调数据选择对应的模板
      clone:function(el){
         console.log(el);//数据全部考过来
        },
      //添加数据完成
      onAdd(e){
        console.log(e.bubbles+"=="+e.cancelable+"=="+ e.defaultPrevented+"==="+e.composed+"=="+e.returnValue+"==="+e.cancelBubble+"===="+e.oldIndex+"==="+e.oldDraggableIndex+"=="+e.newIndex+"=="+ e.newDraggableIndex)
        this.list.splice(0,0,{name:"布局1:1",id:1}); //取ID来对应模板
        this.isView=e.newIndex;
      },
      //删除内容
      del(e,index){
        this.isView=index-1<=0?0:index-1;
        console.log(this.isView+"这是选中---");
        this.list.splice(index,1);
      },
      //复制内容
      copy(e,index){
        this.isView=index+1;
        console.log(this.isView+"这是选中===");
        let  array = this.list;
        //拼接函数(索引位置, 要删除元素的数量, 元素)
        array.splice(index,0,this.list[index]);
      },
      //鼠标按下
      onMousedown(index){
        this.isView=index;
      },
      //start ,end ,add,update, sort, remove 得到的都差不多
      onEnd(evt){
        console.log(evt);
        this.isView=evt.newIndex;
      },
      move: function (evt,originalEvent) {
        //  console.log(evt)
        // console.log(originalEvent); //鼠标位置
      },
      //选择组件类型
      attributeClick(index){
        this.isAttribute=index;
      },
    },

  };
</script>
<style lang="scss" scoped>
    @import "css/pageMaking";
</style>
