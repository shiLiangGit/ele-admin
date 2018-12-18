<template>
  <div class="login">
    <h1>{{ msg }}</h1>
    <div class="login-form">
      <el-form :rules="rules" :model="loginForm" status-icon ref="ruleForm">
        <el-form-item  prop="username">
          <el-input v-model="loginForm.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item  prop="password">
          <el-input v-model="loginForm.password" type="password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" medium :disabled="!(loginForm.username && regPassword)" @click="toLogin('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
      <p>温馨提示：</p>
      <p>未登录过的新用户，自动注册</p>
      <p>注册过的用户可凭账号密码登录</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "elm后台管理系统",
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username:[
          { required: true, message: '请输入用户名', trigger: 'change' }
        ],
        password:[
          { required: true, message: '请输入密码', trigger: 'change' },
          { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'change' }
        ]
      }
    };
  },
  computed:{
    regPassword(){
      let len = this.loginForm.password.length;
      return len > 3 && len <= 6 ? true : false;
    }
  },
  methods:{
    toLogin(formName){
       this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push("index");
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login {
  background: #324057;
  position: relative;
  height: 100%;
  h1 {
    margin-top: 30px;
    margin-bottom: 20px;
    text-align: center;
    color: #fff;
  }
  .login-form {
    width: 300px;
    height: 230px;
    padding: 40px 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    border-radius: 10px;
    .el-button {
      width: 100%;
    }
    p {
      text-align: center;
      color: red;
      font-size: 10px;
      margin: 5px 0;
    }
  }
}
</style>
