<template>
  <div class="header_box" > 
    <div class="header_left">
      <div class="title" @click="goHome" >
        Phersion
      </div>
      <div class="query">
 <el-input v-model="input" placeholder="Search"></el-input>
        <div class="line"></div>
        <el-button type="primary" @click="query()">Go</el-button>
      </div>
    </div>
    <div class="header_top">
      <span @click="goMyaccount()">My Account</span>
      <el-divider direction="vertical"></el-divider>
      <span @click="goContactus()">Contact Us</span>

      <el-divider direction="vertical"></el-divider>
      <span @click="goHome()">home</span>
      <el-divider direction="vertical"></el-divider>
      <span @click="Out()">Out</span>
      <el-divider direction="vertical"></el-divider>
      <span>Business/Sponsored</span>
      <div class="sign">
        <div>
          <span @click="goSignin()">Sign In</span>
        </div>
        <div>
          <i class="el-icon-shopping-cart-2"></i>
          <span @click="goCart()">Cart</span>
        </div>
       
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

<style lang='scss'  scoped>
.header_box{
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.header_left{
  width: 30%;
  color: white;
  display: flex;
  align-self: auto;

}
.title{
width: 200px;
text-align: center;
font-size: 30px;
cursor:pointer
}
.el-button--primary{
  background: #f96d06;
  border: none;
}
.header_top {
  width: 50%;
  float: right;
  color: white;
  text-align: center;
  span{
    cursor:pointer
  }
  /* height: 50px; */
}

.sign {
  width: 400px;
  display: flex;
  justify-content: space-around;
  margin: 20px auto;
  font-size: 20px;
}
.line {
  width: 40px;
}

.query{
width: 400px;
display: flex;

}
</style>