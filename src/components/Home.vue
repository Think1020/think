<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      router
    >
      <el-menu-item index="/home/slide"
        ><i class="el-icon-house"></i>首页</el-menu-item
      >
      <el-menu-item index="/home/consule"
        ><i class="el-icon-chat-dot-round"></i>资讯</el-menu-item
      >
      <el-menu-item index="/home/case"
        ><i class="el-icon-menu"></i>案例</el-menu-item
      >
      <el-menu-item index="/home/about"
        ><i class="el-icon-s-promotion"></i>关于</el-menu-item
      >
      <el-menu-item index="#"
        ><a
          href="https://element.eleme.cn/#/zh-CN/component/installation"
          target="_blank"
        >
          帮助</a
        ></el-menu-item
      >
      <img src="../assets/logo.png" alt="" style="float: right" />
    </el-menu>
    <div class="line">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './Footer.vue';
export default {
  data () {
    return {
      activeIndex: '/home/slide',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components: {
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
