<template>
  <div class="cover">
    <div class="row">
      <div class="col-12">
        <div class="intro">
          <h1 class="title text-center">Connoisseur</h1>
          <h3 class="text-center m-0">Create an account</h3>
        </div>
      </div>
    </div>
    <br>
    <br>
    <div class="row">
      <form @click.prevent class="col-lg-6 col-md-12">
        <div class="lable">
          <label for="Fname"> Name :</label>
        </div>
        <input type="text" v-model="name" placeholder="Enter Your frist name " name="" id="Fname">
        <span class=" error-message m-2" v-if="v$.name.$error"> {{ v$.name.$errors[0].$message }}</span>
        
        <div class="lable">
          <label for="mail">Email :</label>
        </div>
        <input type="email" v-model="email" placeholder="Enter Your email " name="" id="mail">
        <span class=" error-message m-2" v-if="v$.email.$error"> {{ v$.email.$errors[0].$message }}</span>
        <div class="lable">
          <label for="pass">Password :</label>
        </div>
        <input type="password" v-model="pass" placeholder="Enter Your password" name="" id="pass">
        <span class=" error-message m-2" v-if="v$.pass.$error"> {{ v$.pass.$errors[0].$message }}</span>
        <div class="lable">
          <label for="Cpass">Confirm Password : </label>
        </div>
        <input type="password" v-model="cpass" placeholder="Enter Your Re-password" name="" id="Cpass">
        <span class=" error-message m-2" v-if="v$.cpass.$error"> {{ v$.cpass.$errors[0].$message }}</span>
        <div class="submit gap-5 d-flex mt-4">
          <a @click="redirectTo({ val: 'login' });" class=" mr-5">Have an account</a>
          <input type="submit" @click="signup" value="Create your account" class="button pl-3 pr-3">
        </div>

      </form>
      <div class="col-lg-6">
        <div class="img sactive">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import useValidate from "@vuelidate/core";
import { required,email, minLength } from "@vuelidate/validators";
import axios from "axios"
export default {
data() {
    return {
    v$:useValidate(),
    name:"",
    email: "",
    pass: "",
    cpass:"",
    
  }
  },
  validations() {
    return {
      name: { required,minLength: minLength(12) },
      email: { required,email },
      pass: { required ,minLength: minLength(8)},
      cpass: { required,minLength: minLength(8) },
    }
  },
  mounted() {
    let user = localStorage.getItem("user-data");
    if(user)
    {
      // this.redirectTo({ val: 'landing' });
      setTimeout(() => {
        this.redirectTo({ val: 'landing' })
      },1000);
    }
  },
  methods: {
    ...mapActions(['redirectTo',]),
    async signup() {
      this.v$.$validate();
      if(!this.v$.$error) {
        let adduser = await axios.post('http://localhost:3000/users',{
          name: this.name ,
          email: this.email,
          pass: this.pass,
        });
        if(adduser.status =201)
        {
          console.log("user add");
          localStorage.setItem("user-data",JSON.stringify(adduser.data))
          setTimeout(() => {
            history.back()
          },500);
        }
      }
      else
        console.log(" no validate");
    }
  },
}


</script>

<style lang="scss">
.sactive {
  width: 100% !important;
  height: 450px;
  background: url(../assets/images/signup.jpg) no-repeat;
  border-radius: 5px;
  background-position: center;
  background-size: cover;
  box-shadow:1px 0px 7px #9c5959;
  @media (max-width:991px) {
      display: none;
    }
}
.error-message
{
  color: red;
  font-size: .85rem;
  display: inline-block;
}
</style>