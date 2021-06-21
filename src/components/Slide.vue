<template>
  <div class="block">
    <div class="bg">
      <el-carousel height="400px" :interval="3000">
        <el-carousel-item v-for="item in slides" :key="item">
          <img :src="item.url" :alt="item.id" class="slide" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <h3 style="color: #409eff">
      <i class="el-icon-sort-up"></i>为什么选择瓢城企业培训<i
        class="el-icon-sort-down"
      ></i>
    </h3>
    <p>强大的师资力量，完美的实战型管理课程，让您的企业实现质的飞跃</p>
    <div>
      <el-row>
        <el-col :span="9" :offset="4">
          <img
            src="../assets/tab1-1.png"
            style="width: 70px; height: 70px; float: left"
            alt=""
          />
          <p>课程内容</p>
          <p><del>其他：高校不知名的讲师编写，没有任何实战价值的教材！</del></p>
          <p>我们：知名企业家、管理学大师联合编写的具有实现性教材！</p>
        </el-col>
        <el-col :span="9">
          <img
            src="../assets/tab1-2.png"
            style="width: 70px; height: 70px; float: left"
            alt=""
          />
          <p>师资力量</p>
          <p><del>其它：非欧美正牌毕业的、业界没有知名度的讲师！</del></p>
          <p>我们：美国和佛、耶鲁等世界一流高校、享有声誉的名牌专家！</p>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9" :offset="4">
          <img
            src="../assets/tab1-3.png"
            style="width: 70px; height: 70px; float: left"
            alt=""
          />
          <p>课时安排</p>
          <p><del>其他：无法保证上课效率、没有时间表、任务无法完成！</del></p>
        </el-col>
        <el-col :span="9">
          <img
            src="../assets/tab1-4.png"
            style="width: 70px; height: 70px; float: left"
            alt=""
          />
          <p>服务团队</p>
          <p><del>其它：社会招聘的、服务水平参差不齐的普通员工！</del></p>
        </el-col>
      </el-row>
    </div>
    <div class="box3">
      <el-row>
        <el-col :span="10" :offset="2">
          <br /><br /><br />
          <p>强大的学习体系</p>
          <p>经过管理学大师层层把关，让您的企业突飞猛进</p>
        </el-col>
        <el-col :span="10" :offset="2">
          <br /><br /><br />
          <img
            src="../assets/tab2.png"
            alt=""
            style="width: 100px; height: 120px; float: left"
          />
        </el-col>
      </el-row>
    </div>
    <div>
      <br /><br /><br />
      <el-row>
        <el-col :span="9">
          <img
            src="../assets/tab3.png"
            alt=""
            style="width: 170px; height: 100px; float: right"
          />
        </el-col>
        <el-col :span="12" :offset="0">
          <p>完美的管理方式</p>
          <p>最新的管理培训方案，让您的企业赶超同行</p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slides: [
        { id: 1, url: require("../assets/slide1.png") },
        { id: 2, url: require("../assets/slide2.png") },
        { id: 3, url: require("../assets/slide3.png") },
      ]
    }
  }
}
</script>

<style scoped>
.block {
  padding-bottom: 5%;
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

.aa {
  text-align: left;
}

.box3 {
  background-color: gainsboro;
  height: 200px;
}

p {
  font: 14px/1.5 "Microsoft YaHei", arial, tahoma, \5b8b\4f53, sans-serif;
}
</style>
