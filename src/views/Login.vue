<template>
  <div class="cover">
    <div class="row">
      <div class="col-12">
        <div class="intro">
          <h1 class="title text-center">Connoisseur</h1>
          <h3 class="text-center m-0">Login</h3>
        </div>
      </div>
    </div>
    <br>
    <br>
    <div class="row">
      <form @click.prevent class="col-lg-6 col-md-12">
        <div class="lable">
          <label for="mail">Email :</label>
        </div>
        <input type="email" v-model="email" placeholder="Enter your email" id="mail">
        <span class=" error-message m-2" v-if="v$.email.$error">
        {{ v$.email.$errors[0].$message }}</span>
        <div class="lable">
          <label for="pass">Password :</label>
        </div>
        <input type="password" v-model="pass" id="pass" placeholder="Enter your password">
        <span class=" error-message m-2" v-if="v$.pass.$error"> {{ v$.pass.$errors[0].$message }}</span>
        <div class="submit gap-5 d-flex mt-4  ">
          <a @click="redirectTo({ val:'signUp'})" class=" mr-5">Create an account</a>
          <input type="submit" @click="login" value="Login"  class="button ml-5 pl-3 pr-3">
        </div>
        
      </form>
      <div class="col-lg-6 ">
        <div class="img lactive">
        </div>
      </div>
      
    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex';
import useValidate from "@vuelidate/core";
import { required,email,minLength } from "@vuelidate/validators";
import axios from 'axios';
export default {
  data() {
    return {
      v$:useValidate(),
      email: "",
      pass: '',
    }
  },
  validations() {
    return {
      email: { required ,email},
      pass: { required,minLength: minLength(8) },
    }
  },
  mounted() {
    
  },
  methods: {
    ...mapActions(['redirectTo']),
      async login() {
      this.v$.$validate();
      if(!this.v$.$error)
      {
        console.log("validate");
        let getuser = await axios.get(`http://localhost:3000/users/?email=${this.email}&pass=${this.pass}`)
        if(getuser.status == 200 && getuser.data.length > 0)
        {
          console.log("login success")
          setTimeout(() => {
            history.back()
          },500);
        }
      }
      else
        console.log(" no validate");
      {}
    }
  },
}
</script>

<style lang="scss">
.lactive{
  width: 100% !important;
  height: 300px;
  background: url(../assets/images/login.jpg) no-repeat;
  border-radius: 5px;
  background-position: center;
  background-size: cover;
  box-shadow:1px 0px 7px #9c5959;
  @media (max-width:991px ) {
    display: none;    
  }
}
a{
  cursor: pointer !important ;
}
</style>