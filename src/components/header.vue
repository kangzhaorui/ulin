<template>
  <div>
    <div></div>
    <div class="header_top">
      <span @click="goMyaccount()">My Account</span>
      <el-divider direction="vertical"></el-divider>
      <span @click="goContactus()">Contact Us</span>
      <el-divider direction="vertical"></el-divider>
      <span @click="goSignin()">Sign In</span>
      <el-divider direction="vertical"></el-divider>
      <i class="el-icon-shopping-cart-2"></i>
      <span @click="goCart()">Cart</span>
      <el-divider direction="vertical"></el-divider>
      <span @click="goHome()">home</span>
      <el-divider direction="vertical"></el-divider>
      <span @click="Out()">Out</span>
      <el-divider direction="vertical"></el-divider>
      <span>招商广告</span>
      <div class="query">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <div class="line"></div>
        <el-button type="primary" @click="query()">查询</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
  },
  methods: {
    query() {
      console.log("submit!");
    },
    goMyaccount() {
      this.$router.push({ path: "/myAccount" });
    },
    goContactus() {
      this.$router.push({ path: "/contactUs" });
    },
    goSignin() {
      this.$router.push({ path: "/siginIn" });
    },
    goCart() {
      this.$router.push({ path: "/cart" });
    },
    goHome() {
      this.$router.push({ path: "/home" });
    },
    Out() {
      localStorage.setItem("isLogin", false);
    }
  }
};
</script>

<style scoped>
.header_top {
  width: 50%;
  float: right;
  /* height: 50px; */
}

.query {
  width: 400px;
  display: flex;
  justify-content: space-around;
  margin: 20px auto;
}
.line {
  width: 40px;
}
</style>