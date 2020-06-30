<!---
 --@author  PanFu
 --@data 2020-06-9:08
 --@description 页面管理-简单的静态实例可以删了
 -- 1.拖转-添加-修改-拖转
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
                <draggable v-model="list"
                           class="pageMaking-list"
                           :class="{noData:list.length==0}"
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
                          @click.native="onMousedown(index)"
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
    $red:#ff4d51;
    $blue:#409eff;
    .pageMaking{
        width:100%;
        height:auto;
        margin:0 auto;
        padding:0;
        position: relative;
        box-sizing: border-box;
        overflow:hidden;
        .pageMaking-header{
            height:40px;
            box-shadow: 0 2px 10px #eee;
            padding: 0 10px;
            position: relative;
            background:#fff;
            position: absolute;
            top:0;
            left:0;
            width:100%;
            z-index:10;
            .pageMaking-header-min{
                width:calc(100% - 560px);
                margin:0 auto;
                height:40px;
                line-height:40px;
                padding:0 20px;
                text-align:right;
            }
        }
        .pageMaking-container{
            width:100%;
            box-sizing: border-box;
            height: calc(100% - 40px);
            position: relative;
            display:flex;
            background:#fafafa;
            border: 1px solid #e0e0e0;
            .pageMaking-left{
                width: 250px;
                height: auto;
                background:#fff;
                position: relative;
                z-index:11;
                .aside{
                    overflow: auto;
                    h5{
                        font-size:14px;
                        font-weight:700;
                        padding:10px;
                    }
                    ul{
                        position: relative;
                        overflow: hidden;
                        padding: 0 10px 10px;
                        margin: 0;
                        display: flex;
                        justify-content: left;
                        justify-items: start;
                        flex-wrap: wrap;
                        list-style: none;
                        li{
                            font-size: 12px;
                            display: block;
                            width:38%;
                            line-height: 26px;
                            position: relative;
                            float: left;
                            left: 0;
                            list-style: none;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            margin: 1%;
                            color: #333;
                            background: #f4f6fc;
                            padding:0 10px;
                            border: 1px solid #f4f6fc;
                            &:hover{
                                cursor: unset;
                                border: 1px dashed $blue;
                            }
                            i{
                                padding-right:10px;
                            }
                        }
                    }
                }
            }
            .pageMaking-min{
                width:calc(100% - 500px);
                border-left: 1px solid #e0e0e0;
                border-right: 1px solid #e0e0e0;
                position: relative;
                max-height:800px;
                overflow: auto;
                .pageMaking-list{
                    width:750px;
                    background: #fff;
                    border: 1px dashed #999;
                    min-height: 600px;
                    margin:50px auto;
                    position:relative;
                    .pageMaking-view{
                        padding-bottom: 18px;
                        position: relative;
                        border: 1px dashed hsla(0,0%,66.7%,.7);
                        background-color: rgba(236,245,255,.3);
                        margin: 2px;
                        position: relative;
                        &.active{
                            outline: 2px solid $blue;
                            border:1px solid $blue;
                        }
                        &.on{
                            outline: 2px solid $blue;
                            border:1px solid $blue;
                        }
                        &.ghost{
                            opacity: 0.5;
                            margin-top:10px;
                            position: relative;
                            &:after{
                                content:"";
                                position: absolute;
                                top:-10px;
                                left:0;
                                width:100%;
                                height:3px;
                                background:#ff4d51;
                            }
                        }
                        .view-drag{
                            position: absolute;
                            left: -2px;
                            top: -2px;
                            bottom: -18px;
                            height: 28px;
                            line-height: 28px;
                            background: $blue;
                            z-index: 9;
                            i{
                                font-size: 18px;
                                color: #fff;
                                margin: 0 5px;
                                cursor:move;
                            }
                        }
                        .view-action{
                            position: absolute;
                            right: 0;
                            bottom: 0;
                            height: 28px;
                            line-height: 28px;
                            background:$blue;
                            z-index: 9;
                            i{
                                font-size: 14px;
                                color: #fff;
                                margin: 0 5px;
                                cursor: pointer;
                            }
                        }
                    }
                    &>li{
                        height:3px;
                        overflow:hidden;
                        list-style:none;
                        &.ghost{
                            opacity: 0.5;
                            background:$red;
                            margin-top:5px;
                            position: relative;
                            &:after{
                                content:"";
                                position: absolute;
                                top:-10px;
                                left:0;
                                width:100%;
                                height:3px;
                                background:#ff4d51;
                            }
                        }
                    }
                    &.noData{
                        position:relative;
                        &:after{
                            content:"从左侧拖拽来添加字段";
                            position: absolute;
                            text-align: center;
                            width: 300px;
                            height:200px;
                            font-size: 20px;
                            top:50%;
                            left: 50%;
                            transform:translate(-50%,-50%);
                            color: #ccc;
                        }
                    }
                }
            }
            .pageMaking-right{
                width: 250px;
                height:100%;
                background:#fff;
                position: relative;
                z-index:11;
                .pageMaking-right-header{
                    width:100%;
                    box-sizing: border-box;
                    display:flex;
                    background:#fff;
                    border-bottom:1px solid #e0e0e0;
                    border-right:1px solid #e0e0e0;
                    position: absolute;
                    top:0;
                    left:0;
                    z-index:10;
                    border-left:1px solid #e0e0e0;
                    .config-tab{
                        height: 40px;
                        line-height: 40px;
                        display: inline-block;
                        width:100%;
                        text-align: center;
                        font-size: 14px;
                        font-weight: 500;
                        position: relative;
                        cursor: pointer;
                        &.active{
                            border-bottom:2px solid $red;
                        }
                    }
                }
                .pageMaking-box{
                    width:100%;
                    padding:40px 10px 20px;
                    box-sizing: border-box;
                    max-height:800px;
                    overflow: auto;
                    h5{
                        font-size:14px;
                        font-weight:700;
                        padding:20px 0;
                    }
                    .input{
                        width:100%;
                        height:30px;
                        line-height:30px;
                        box-sizing: border-box;
                        padding:0 10px;
                        border:1px solid #e0e0e0;
                        border-radius:5px;
                    }
                    .radio-group{
                        width:90%;
                        display: flex;
                        margin:0 20px;
                        box-sizing: border-box;
                        border-bottom:1px solid #e0e0e0;
                        padding:0 0 20px;
                        .radio{
                            text-align: center;
                            flex:1;
                            border:1px solid #eee;
                            padding:5px 0;
                            overflow:hidden;
                            font-size:12px;
                            cursor:pointer;
                            &.active{
                                background: $red;
                                color:#fff;
                                border:1px solid $red;
                            }
                        }
                    }
                }
            }
        }
        .handle{
            outline: 2px solid $blue;
            border:1px solid $blue;
            position: absolute;
            width:20px;
            height:20px;
            line-height:20px;
            text-align:center;
            top:0;
            left:0;
            z-index:1;
            background:$blue;
            color:#fff;
            cursor:move;
        }
    }
</style>
