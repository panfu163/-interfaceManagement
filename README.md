#  interfaceManagement
基于Vue.js 2.x系列 + Element UI + vuedraggable 的网站UI解决方案。界面管理框架！

## Project setup
## 安装赖
```
npm install
```

### Compiles and hot-reloads for development
### 启动服务
```
npm run serve
```

### Compiles and minifies for production
### 打包发到正式环境
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### 提示warning delete ·· (prettier/prettier) 可执行
```
npm run lint -- --fix

```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 项目主要依赖 vuedraggable  github地址(https://github.com/SortableJS/Vue.Draggable)

### vuedraggable 参数说明
- ghost指的在拖拽体原本位置占坑的那个元素：
- handle -> handle=".handle"正常情况下拖拽元素的整体都是可拖拽的，加了handle之后，只能指定的地方可以拖拽了，其他地方不能进行拖拽：
- tag-> tag="tbody" tag和componentData对于一些特定的原生组合标签，例如ul,li或者table,tr还有tr,td之类的，可以指定一个tag，让draggable替换成指定的标签：
- collapseComponentData-> :component-data="collapseComponentData"  数据component-data配置
#### 例子
- 下面代码中的collapseComponentData就是将原来el-collapse上传递数据的部分抽离出来了，包括事件(on)，属性(prop,attr)的设置。
~~~
<draggable tag="el-collapse" :list="list" :component-data="collapseComponentData" >
    <el-collapse-item v-for="item in list" :key="item.id" :title="item.title" :name="item.id" >
    <div v-for="(lign, idx) in item.text" :key="idx">{{ lign }}</div>
    </el-collapse-item>
</draggable>
<script>
export default {
name: "third-party",
display: "Third party",
order: 10,
components: {
    draggable
},
data() {
    return {
     list: [
        {
         title:"Consistency",
         id: 1,
         text: [
            "常情况下拖拽元素的整体都是可拖拽的，加了handle之后，只能指定的地方可以拖拽了，其他地方不能进行拖拽",
            "原来el-collapse上传递数据的部分抽离出来了，包括事件(on)，属性(prop,attr)的设置。"
         ]
        },
        {
         title: "Feedback",
         id: 2,
         text: [
            "原来el-collapse上传递数据的部分抽离出来了，包括事件(on)，属性(prop,attr)的设置。",
            "常情况下拖拽元素的整体都是可拖拽的，加了handle之后，只能指定的地方可以拖拽了，其他地方不能进行拖拽"
         ]
        }
     ],
     activeNames: [1],
     collapseComponentData: {
        on: {
         change: this.inputChanged
        },
        props: {
         value: this.activeNames
        }
     }
    };
},
methods: {
    inputChanged(val) {
     this.activeNames = val;
    }
}
};
</script>
~~~
- chosenClass: "sortable-chosen",  // 设置被选中的元素的class
- forceFallback: false,  // 忽略HTML5的DnD行为，并强制退出。（h5里有个属性也是拖动，这里是为了去掉H5拖动对这个的影响）
- group和clone group一般的用法是用来区分拖拽组的，group名称相同的拖拽组可以互相拖放：
- fallbackClass: "sortable-fallback",  // 使用forceFallback时克隆的DOM元素的类名。
- fallbackOnBody: false,  // 将克隆的DOM元素添加到文档的主体中。（默认放在被拖动元素的同级）
- group属性还有更详细的配置，例如:group="{name:'abc',pull:'clone',put:false}"。
put参数比较简单，是用来控制别的地方内容是否可以拖拽到自己这边来。如果设置为false，那么就表示别的地方的内容无法拖拽到自己这边来。
pull参数控制的是从当前拽走，放在另外一个地方的行为。默认情况下(设置为true)是你拽到另外一个地方去，当前列表中就会少一个，对方列表多一个。如果设置为'clone',那么当前列表不会减少，同时对方列表多了一个。
当然你甚至可以配置一个:clone='func'，用来控制放入对方列表的内容，我们看一个复杂一点的例子：
- transition-group和animation
  拖拽元素每经过一个内容项，它就会发生动画移动的效果，这个主要是通过animation的设置：
  transition-group只有交换的双方才有动画,交换过程中没有动画，但是只是最后真正交换的时候才有动画，这种需要加个class就好了：
### 函数配置
 setData: 设置值时的回调函数
 onChoose: 选择单元时的回调函数
 onStart: 开始拖动时的回调函数
 onEnd: 拖动结束时的回调函数
 onAdd: 添加单元时的回调函数
 onUpdate: 排序发生变化时的回调函数
 onRemove: 单元被移动到另一个列表时的回调函数
 onFilter: 尝试选择一个被filter过滤的单元的回调函数
 onMove: 移动单元时的回调函数
 onClone: clone时的回调函数
- 以上函数对象的属性：
 to: 移动到的列表的容器
 from：来源列表容器
 item: 被移动的单元
 clone: 副本的单元
 oldIndex：移动前的序号
 newIndex：移动后的序号


