<template>
  <div>我的账户</div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log("beforRouteEnter");
    console.log(this); // 结果为undefined，因为在执行beforRouteEnter时候，组件还没有被创建出来；先执行beforRouteEnter，再执行beforeCreate
    if (localStorage.getItem("isLogin")=='true') {
      next();
    } else {
      next(vm => {
        //参数vm就是当前组件的实例。
        vm.$message({
          message: "请登陆",
          type: "warning"
        });
        next("/siginIn");
      });
    }
  }
};
</script>

<style scoped>
</style>