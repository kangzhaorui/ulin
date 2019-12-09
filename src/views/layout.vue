<template>
  <div class="hello">
    <el-container>
      <el-header>
        <headercom></headercom>
      </el-header>
      <bannercom></bannercom>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <footercom></footercom>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import headercom from "@/components/header.vue";
import footercom from "@/components/footercom.vue";
import bannercom from "@/components/banner.vue";

export default {
  name: "HelloWorld",
  components: {
    headercom,
    footercom,
    bannercom
  }
};
</script>
<style lang='scss' scoped>
.hello {
  width: 90%;
  margin: auto;
}
.el-header {
  background-color: darkblue;

  min-height: 8vh;
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  min-height: 10vh;
  background:  #f2f2f2;
}
.el-main {
  color: #333;
  min-height: 80vh;
  width: 100%;
  padding: 0;
  background: white;
}

</style>
