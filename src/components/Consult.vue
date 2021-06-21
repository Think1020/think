<template>
  <div>
    <div class="box">
      <br />
      <h3>资讯</h3>
      <p>企业内训的最新动态、资源等……</p>
    </div>
    <br />
    <div>
      <el-row>
        <el-col :span="12" :offset="4">
          <div>
            <el-row v-for="(item, index) in infos" :key="index">
              <div style="width: 650px">
                <img
                  :src="item.url"
                  alt=""
                  style="width: 150px; float: left; margin-right: 15px"
                />
                <p>{{ item.msg }}</p>
                <p>{{ item.text }}</p>
                <p>admin 15/10/11</p>
              </div>
            </el-row>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <p>热门资讯</p>
            <br />
            <div v-for="(item, index) in info" :key="index">
              <el-row>
                <img
                  :src="item.url"
                  alt=""
                  style="width: 120px; float: left; margin-right: 15px"
                />
                <p>{{ item.msg }}</p>
                <p>admin 15/10/11</p>
              </el-row>
              <br />
            </div>
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
      infos: [
        { url: require("../assets/info1.jpg"), msg: "广电总局发布TVOS.0华为阿里参与研究", text: "TVS2.0要在TVOS1.0与华为maiaOS及alibabaYunOS融合的基础上，打造的新一代只能电视操作系统，华为主要承担开发工作，内置的电视购物商城由阿里方面负责" },
        { url: require("../assets/info2.jpg"), msg: "苹果四寸收集为何要配置强大的A9处理器？", text: "苹果明年初有可能对外发布一款经过升级的四英寸收集，相当于iPHone 5S，该手机将会配置苹果在2015年旗舰手机中采用的A9处理器，配置性能如此强大的应用处理器？" },
        { url: require("../assets/info2.jpg"), msg: "苹果四寸收集为何要配置强大的A9处理器？", text: "苹果明年初有可能对外发布一款经过升级的四英寸收集，相当于iPHone 5S，该手机将会配置苹果在2015年旗舰手机中采用的A9处理器，配置性能如此强大的应用处理器？" },
        { url: require("../assets/info3.jpg"), msg: "六家互联网公司发声明 抵制流量劫持等违法……", text: "六家互联网公司（今日头条，美团大众点评网、360、腾讯、微博、小米科技）发布联合声明，呼吁有关运营商打击流量劫持，充实互联网公司被流量劫持，可能导致的严重后果" },
        { url: require("../assets/info1.jpg"), msg: "广电总局发布TVOS.0华为阿里参与研究", text: "TVS2.0要在TVOS1.0与华为maiaOS及alibabaYunOS融合的基础上，打造的新一代只能电视操作系统，华为主要承担开发工作，内置的电视购物商城由阿里方面负责" },
        { url: require("../assets/info2.jpg"), msg: "苹果四寸收集为何要配置强大的A9处理器？", text: "苹果明年初有可能对外发布一款经过升级的四英寸收集，相当于iPHone 5S，该手机将会配置苹果在2015年旗舰手机中采用的A9处理器，配置性能如此强大的应用处理器？" },
        { url: require("../assets/info3.jpg"), msg: "六家互联网公司发声明 抵制流量劫持等违法……", text: "六家互联网公司（今日头条，美团大众点评网、360、腾讯、微博、小米科技）发布联合声明，呼吁有关运营商打击流量劫持，充实互联网公司被流量劫持，可能导致的严重后果" },
      ],
      info: [
        { url: require("../assets/info2.jpg"), msg: "苹果四寸收集为何要配置超大的A9处理器？" },
        { url: require("../assets/info1.jpg"), msg: "广电总局发布TVO82.0华为阿里参与研发" },
        { url: require("../assets/info3.jpg"), msg: "六家互联网公司发声明 抵制流量劫持等违法行为" },
        { url: require("../assets/info2.jpg"), msg: "苹果四寸收集为何要配置超大的A9处理器？" },
        { url: require("../assets/info1.jpg"), msg: "广电总局发布TVO82.0华为阿里参与研发" },
        { url: require("../assets/info3.jpg"), msg: "六家互联网公司发声明 抵制流量劫持等违法行为" },
      ]
    }
  }
}
</script>

<style scoped>
.box {
  background: url("../assets/bg.jpg");
  height: 150px;
  color: white;
  padding-left: 17%;
  text-align: left;
}

p {
  font: 12px/1.5 Tahoma, Helvetica, Arial, "宋体", sans-serif;
  text-align: left;
}
</style>
