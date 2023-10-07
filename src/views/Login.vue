<template>
    <div class="login">
      <el-form class="form" :model="user" :rules="formRules" ref="userForm">
        <h1 class="title">微博客后台管理系统</h1>
        <el-form-item prop="username">
          <el-input
            class="text"
            v-model="user.username"
            prefix-icon="User"
            clearable
            placeholder="用户名"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            class="text"
            v-model="user.password"
            prefix-icon="Lock"
            show-password
            clearable
            placeholder="密码"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            :loading="loading"
            type="primary"
            class="btn"
            size="large"
            @click="loginUser"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
    
  <script setup>
    import { ref , onMounted } from 'vue';
    import { useRouter, useRoute } from 'vue-router'
    const router = useRouter()
    const route = useRoute()
    
    const defaultForm = {
        username: "",
        password: ""
    }
    
    const user = ref(defaultForm) 
    
    const userForm = ref(null)
    
    //分页数据
    const pageParamsForm = {
        username: [
            { required: true, message: "请输入账号", trigger: "blur" },
            { min: 3, max: 12, message: "账号长度在 3 到 12 个字符", trigger: "blur" },
        ],
        password: [
            { required: true, message: "请输入密码", trigger: "blur" },
            { min: 6, max: 18, message: "密码长度在 6 到 18 个字符", trigger: "blur" },
        ],
    }
    const formRules = ref(pageParamsForm) 
  
    const loginUser = () => {
      router.push("/dashboard/article")
    }
  </script>
    
  <style lang="scss" scoped>
    .login {
      transition: transform 1s;
      transform: scale(1);
      width: 100%;
      height:600px;
        margin: 0 auto;
      overflow: hidden;
      background: #2d3a4b;
    .form {
      width: 520px;
      max-width: 100%;
      padding: 0 24px;
      box-sizing: border-box;
      margin: 160px auto 0;
      :deep {
        .el-input__wrapper {
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1) inset;
          background: rgba(0, 0, 0, 0.1);
        }
        .el-input-group--append > .el-input__wrapper {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
        .el-input-group--prepend > .el-input__wrapper {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
      }
      .title {
        color: #fff;
        text-align: center;
        font-size: 24px;
        margin: 0 0 24px;
      }
      .text {
        font-size: 16px;
        :deep(.el-input__inner) {
          color: #fff;
          height: 48px;
          line-height: 48px;
          &::placeholder {
            color: rgba(255, 255, 255, 0.2);
          }
        }
      }
      .btn {
        width: 100%;
      }
      }
    }
  </style>