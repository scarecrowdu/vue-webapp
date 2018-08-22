<template>
  <div class="login login-wrap">
    <div class="login-header">
      <img class="logo" src="../../assets/images/ego.png" />
      <p class="intr">easy go shopping</p>
    </div>

    <div class="login-form">
      <div class="input-cell">
        <input class="input" type="text" name="username" v-model="form.username" placeholder="请输入用户名/手机" />
      </div>

      <div class="input-cell">
        <input
         class="input"
         :type="isVisablePwd ? 'text' : 'password'"
         name="password"
         v-model="form.password"
         placeholder="请输入密码" />

        <span @click="toggleEye">
          <icon :class="[isVisablePwd ? 'on-eye' : '', 'icon']" name="yanjing" ></icon>
        </span>
      </div>

      <div class="action-cell">
        <p>新用户注册</p>
        <p>忘记密码</p>
      </div>

      <div class="btn-cell">
        <button class="btn">登录</button>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Login extends Vue {
  private isVisablePwd: boolean = false;

  public data() {
    return {
      form: {
        username: '',
        password: '',
      },
    };
  }

  private toggleEye() {
    this.isVisablePwd = !this.isVisablePwd;
  }
}
</script>


<style lang="scss" scoped>
.login-header {
  text-align: center;

  .logo {
    margin-top: 120px;
    width: 260px;
  }

  .intr {
    font-size: 26px;
    color: #f7624f;
  }
}

.login-form {
  margin: 100px 50px 0 50px;

  .input-cell {
    position: relative;
    padding: 20px 20px;
    border-bottom: 1px solid #e5e5e5;
    font-size: 28px;

    .icon {
      position: absolute;
      top: 30px;
      right: 10px;
      font-size: 40px;
      color: #e5e5e5;
    }

    .on-eye {
      color: #f7624f;
    }
  }

  .action-cell {
    display: flex;
    align-items: center;
    padding: 0 20px;

    p {
      flex: 1;
      line-height: 60px;
      font-size: 26px;
      color: #f7624f;

      &:nth-child(2) {
        text-align: right;
      }
    }
  }

  .btn-cell {
    margin: 0 20px;
    margin-top: 100px;

    .btn {
      width: 100%;
      background: #f7624f;
    }
  }
}
</style>
