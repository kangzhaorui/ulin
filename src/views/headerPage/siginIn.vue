<template>
  <div class="login_main">
    <div class="line"></div>
    <div class="login">
      <div class="el-form">
        <div class="title">
          <h1>系统登录</h1>
        </div>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="username">
            <el-input v-model.number="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-link type="primary">忘记密码</el-link>
            <el-link type="primary">去注册</el-link>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        console.log("value--", value);
        return callback(new Error("用户名不能为空"));
      }
      callback();
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请输入密码"));
      }
      callback();
    };
    return {
      ruleForm: {
        pass: "",
        username: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        username: [{ validator: checkAge, trigger: "blur" }]
      },
      fromPath:''
    };
  },
   beforeRouteEnter(to, from, next) {
    console.log("beforRouteEnter");
    console.log(this); // 结果为undefined，因为在执行beforRouteEnter时候，组件还没有被创建出来；先执行beforRouteEnter，再执行beforeCreate
          next(vm => {
        //参数vm就是当前组件的实例。
        vm._data.fromPath=from.fullPath
        console.log('vm.data',vm);
      });
  console.log('from',from);
  next();
    
  },
  methods: {
    submitForm(formName) {
      console.log("ll", formName);
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message({
            message: "success",
            type: "success"
          });
          localStorage.setItem("isLogin", true);
          this.$router.push({path:this.fromPath})
          

        } else {
          this.$message.error("请登录！");
        }
        console.log("lllloaj", valid);
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
.login_main {
  width: 100%;
  min-height: 80vh;
  background: lightgrey;
}
.login {
  width: 500px;
  height: 600px;
  background: white;
  margin: auto;
  display: flex;
}
.el-form {
  width: 90%;
  align-self: center;
}
.title {
  display: flex;
  align-items: center;
  height: 100px;
  justify-content: center;
}
.line {
  height: 100px;
  width: 100%;
}
</style>