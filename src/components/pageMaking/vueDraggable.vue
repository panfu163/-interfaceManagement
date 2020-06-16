<!---
 --@author  PanFu
 --@data 2020-06-9:08
 --@description 简单的vuedraggable实例-在pageMaking没有用到,删除无影响
 --@version 1.0
--->
<template>
    <div>
        <div style="width:300px;float:left">
        <draggable class="list-group" :list="list1"
                 :options="{group:{ name:'people', pull:'clone',put:false},sort:false}"
        >
            <div class="list" v-for="(item, index) in list1" :key="index" >
               {{ item.title }}
            </div>
        </draggable>
        </div>
        <div style="width:300px;float:left" >
            <draggable v-model="list" :options="dragOptions" tag="tbody" group="people"   handle=".handle" ghost-class="ghost" >
                <div class="list item" v-for="(item, index) in list" :key="index">
                    <div class="handle">拖转</div>
                    <h3>{{ item.id }}</h3>
                    <p>{{ item.title }}</p>
                </div>
            </draggable>
        </div>
    </div>
</template>

<script>
  import draggable from './js/vuedraggable';
  export default {
    name: "third-party",
    display: "Third party",
    order: 10,
    components: {
      draggable
    },
    computed:{
      dragOptions() {
        return {
          animation:500, // ms, 动画速度运动项目排序时，' 0 ' -没有动画。
          ghostClass:"ghosts",//设置拖动元素的class的占位符的类名
          chosenClass:"active", //设置被选中的元素的class
        };
      },
    },
    data() {
      return {
        list1:[{title:"例表1",id:1},{ title:"例表2", id:2, }],
        list: [{ title:"Consistency", id:1},{title:"Feedback",id:2}],
      };
    },
    methods: {
      clone:function(el){
           console.log(el);//数据全部考过来
          this.list.splice(0,0,el);
           console.log("内容");
        },
    },

  };
</script>
<style lang="scss" scoped>
    .list{
      width:100%;
    }
    .ghost {
        opacity: 0.5;
        background:#4cb4e7;
        margin-top:10px;
        position: relative;
        &:after{
         content:"";
         position: absolute;
         top:0;
         left:0;
         width:100%;
         height:2px;
         background:#ff4d51;
      }
    }
</style>
