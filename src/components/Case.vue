<template>
  <div>
    <div class="box">
      <br />
      <h3>案例</h3>
      <h5>和各大明星企业有着紧密合作</h5>
    </div>
    <br /><br />
    <div>
      <el-row>
        <el-col :span="3" :offset="6">
          <div>
            <img :src="url1" alt="" style="width: 100px" />
            <p>{{ msg1 }}</p>
            <p>{{ msg }}</p>
          </div>
        </el-col>
        <el-col :span="3">
          <div>
            <img :src="url2" alt="" style="width: 100px" />
            <p>{{ msg2 }}</p>
            <p>{{ msg }}</p>
          </div>
        </el-col>
        <el-col :span="3">
          <div>
            <img :src="url3" alt="" style="width: 100px" />
            <p>{{ msg3 }}</p>
            <p>{{ msg }}</p>
          </div>
        </el-col>
        <el-col :span="3">
          <div>
            <img :src="url4" alt="" style="width: 100px" />
            <p>{{ msg4 }}</p>
            <p>{{ msg }}</p>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3" :offset="6">
          <div>
            <img :src="url3" alt="" style="width: 100px" />
            <p>{{ msg3 }}</p>
            <p>{{ msg }}</p>
          </div>
        </el-col>
        <el-col :span="3">
          <div>
            <img :src="url4" alt="" style="width: 100px" />
            <p>{{ msg4 }}</p>
            <p>{{ msg }}</p>
          </div>
        </el-col>
        <el-col :span="3">
          <div>
            <img :src="url2" alt="" style="width: 100px" />
            <p>{{ msg2 }}</p>
            <p>{{ msg }}</p>
          </div>
        </el-col>
        <el-col :span="3">
          <div>
            <img :src="url1" alt="" style="width: 100px" />
            <p>{{ msg1 }}</p>
            <p>{{ msg }}</p>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3" :offset="6">
          <div>
            <img :src="url4" alt="" style="width: 100px" />
            <p>{{ msg4 }}</p>
            <p>{{ msg }}</p>
          </div>
        </el-col>
        <el-col :span="3">
          <div>
            <img :src="url3" alt="" style="width: 100px" />
            <p>{{ msg3 }}</p>
            <p>{{ msg }}</p>
          </div>
        </el-col>
        <el-col :span="3">
          <div>
            <img :src="url4" alt="" style="width: 100px" />
            <p>{{ msg4 }}</p>
            <p>{{ msg }}</p>
          </div>
        </el-col>
        <el-col :span="3">
          <div>
            <img :src="url2" alt="" style="width: 100px" />
            <p>{{ msg2 }}</p>
            <p>{{ msg }}</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url1: require("../assets/case1.jpg"),
      url2: require("../assets/case2.jpg"),
      url3: require("../assets/case3.jpg"),
      url4: require("../assets/case4.jpg"),
      msg: "参与了本机构的总裁管理培训课程，学院反馈意见良好",
      msg1: "中国移动通信",
      msg2: "中国石化",
      msg3: "中国联通",
      msg4: "中国电信",
    }
  }
}
</script>

<style scoped>
.box {
  background: url("../assets/bg.jpg");
  height: 150px;
  color: white;
  padding-left: 25%;
  text-align: left;
}

p {
  font: 12px/1.5 Tahoma, Helvetica, Arial, "宋体", sans-serif;
  text-align: center;
}
</style>
