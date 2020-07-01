<template>
  <div class="product">
    <div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="1.编辑基本信息" name="first">
          <el-row>
            <el-col :span="24">
              <div class="grid-title">
                基础信息
                <el-button class="primary" type="primary">查询商品</el-button>
              </div>
            </el-col>
          </el-row>
          <div class="content-box">
            <el-row>
              <el-col :span="12">
                <div class="info">
                  <span>商品名称:</span>小红书2109版中国邮电大学出版
                </div>
                <div class="info"><span>库存数量:</span>900</div>
                <div class="info"><span>仓库名称:</span>电商仓库</div>
                <div class="info"><span>仓库管理:</span>张三 18285533808</div>
                <div class="info"><span>商品编码:</span>DSCK89083</div>
                <div class="info"><span>库存状态:</span>货源充足</div>
              </el-col>
              <el-col :span="12">
                <el-carousel trigger="click" height="150px">
                  <el-carousel-item v-for="item in 4" :key="item">
                    <h3 class="small">{{ item }}</h3>
                  </el-carousel-item>
                </el-carousel>
                <el-row class="el-row-medium">
                  <el-button size="medium" round>焦点图1</el-button>
                  <el-button size="medium" round>焦点图2</el-button>
                  <el-button size="medium" round>焦点图3</el-button>
                  <el-button size="medium" round>焦点图4</el-button>
                </el-row>
              </el-col>
            </el-row>
          </div>
          <div class="grid-title">价格库存</div>
          <div class="content-box">
            <el-form ref="form" :inline="true" :model="form" label-width="80px">
              <el-form-item label="价格">
                <el-input v-model="form.name"></el-input>
                如有颜色、尺码等多种规格，请添加商品规格
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
        <el-tab-pane label="2.编辑商品详情" name="second">
          <quill-editor ref="myTextEditor" v-model="content" :options="editorOption" @change="onEditorChange" style="height:400px; margin-bottom:30px;"></quill-editor>
          <el-button style="margin:20px" type="primary" @click="submit">提交</el-button>
          <el-upload
                  class="avatar-uploader"
                  action="serverUrl"
                  :on-success="uploadSuccess"
                  :on-error="uploadError"
                  :before-upload="beforeUpload" multiple>
          </el-upload>
          <div  v-html="content"></div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.product {
  padding: 10px;
  background: #fff;
  box-sizing: border-box;
  .grid-title {
    width: 100%;
    background: #ecf5ff;
    padding: 0 20px;
    box-sizing: border-box;
    vertical-align: middle;
    position: relative;
    height: 50px;
    line-height: 50px;
    .primary {
      position: absolute;
      top: 0px;
      right: 20px;
      display: block;
      margin-top: 10px;
    }
  }
  .content-box {
    padding: 20px;
    .info {
      margin-bottom: 10px;
      span {
        padding-right: 10px;
        font-weight: 700;
      }
    }
    .el-row-medium {
      padding: 20px 20px 0;
      text-align: center;
    }
    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 150px;
      margin: 0;
    }
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }
    .el-carousel__item:nth-child(2n + 1) {
      background-color: #d3dce6;
    }
  }
}
</style>
<script>
import {quillEditor} from 'vue-quill-editor';
export default {
  data() {
    // 工具栏配置
    const toolbarOptions = [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],

      [{'header': 1}, {'header': 2}],               // custom button values
      [{'list': 'ordered'}, {'list': 'bullet'}],
      [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
      [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
      [{'direction': 'rtl'}],                         // text direction

      [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
      [{'header': [1, 2, 3, 4, 5, 6, false]}],

      [{'color': []}, {'background': []}],          // dropdown with defaults from theme
      [{'font': []}],
      [{'align': []}],
      ['link', 'image', 'video'],
      ['clean']                                         // remove formatting button
    ]
    return {
      content: "",
      activeName: "first",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      serverUrl:"",//上传的服务器地址
      editorOption: {
        placeholder: '编辑文章内容',
        modules: {
          toolbar: {
            container: toolbarOptions,  // 工具栏
            handlers: {
              'image': function (value) {
                if (value) {
                    //alert('自定义图片');
                  document.querySelector('.avatar-uploader input').click();
                } else {
                  this.quill.format('image',false);
                }
              }
            }
          }
        }
      },
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    onEditorChange({ editor, html, text }) {
      this.content = html;
    },
    submit () {
      console.log("--------------")
      console.log(this.content);
    },
    beforeUpload() {
      // 显示loading动画
      this.quillUpdateImg = true;
    },
    uploadSuccess(res,file) {
      console.log(file)
      // 获取富文本组件实例
      let quill = this.$refs.myQuillEditor.quill;
      console.log(quill)
      // 如果上传成功
      if (res.state === 'SUCCESS' && res.url !== null) {
        // 获取光标所在位置
        let length = quill.getSelection().index;
        // 插入图片  res.info为服务器返回的图片地址
        quill.insertEmbed(length, 'image', res.url)
        // 调整光标到最后
        quill.setSelection(length + 1);
      } else {
        this.$message.error('图片插入失败');
      }
      // loading动画消失
      this.quillUpdateImg = false;
    },
    uploadError() {
      // loading动画消失
      this.quillUpdateImg = false;
      this.$message.error('图片插入失败');
    }
  },
  mounted() {
    //this.Jsonp(); //测试跨域
  },
  computed: {
  },
  components: {
    quillEditor
  }
};
</script>
