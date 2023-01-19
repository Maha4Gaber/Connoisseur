<template>
  <div class="cover">
    <nav>
      <ul id="nav">
        <li><router-link class="" :to="{ name: 'landing' }">Home</router-link></li>
        <li><router-link class="" :to="{ name: 'about' }">About</router-link></li>
        <li><router-link class="" :to="{ name: 'menu' }">Menu</router-link></li>
        <li><router-link class="" :to="{ name: 'gallery' }">Gallery</router-link></li>
        <li><router-link class="" :to="{ name: 'reviews' }">Reviews</router-link></li>
        <li><router-link class="" :to="{ name: 'contact' }">contact</router-link></li>
        <li>
          <router-link class="" :to="{ name: 'login' }">Login</router-link></li>
        <li>  <router-link class="" :to="{ name: 'signUp' }">SignUp</router-link>
        </li>
      </ul>
    </nav>
      <nav class=" navbar navbar-expand-lg  ">
        <div class="container-fluid">
          <router-link class="nav-link" :to="{ name: 'landing' }">Connoisseur</router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class=""> <i class="fa fa-bars"></i></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'landing' }">Home</router-link>
              </li>
              <li class="nav-item"><router-link class="nav-link" :to="{ name: 'about' }">About</router-link></li>
              <li class="nav-item"><router-link class="nav-link"  :to="{ name: 'menu' }">Menu</router-link></li>
              <li class="nav-item"><router-link class="nav-link"  :to="{ name: 'gallery' }">Gallery</router-link></li>
              <li class="nav-item"><router-link class="nav-link"  :to="{ name: 'reviews' }">Reviews</router-link></li>
              <li class="nav-item"><router-link class="nav-link"  :to="{ name: 'contact' }">contact</router-link></li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'login' }">Login</router-link>
              </li>
              <li class="nav-item"> <router-link class="nav-link" :to="{ name: 'signUp' }">SignUp</router-link>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" >
ul#nav {
  @media (max-width:767px) {
      display: none !important;
    }
  font-family: 'Lobster', cursive;
  width: 1000px;
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
  letter-spacing: 1px;
  display: flex;
  @media (max-width:991px) {
  width: 700px;
  }
  li {
    list-style: none;
    flex: 1;

    a {
      letter-spacing: 2;
      display: block;
      width: 100px;
      height: 150px;
      padding: 65px 0 0 0;
      margin-bottom:  10px;
      color: #9c5959;
      text-decoration: none;
      background: url(../assets/images/label.png) 0 -149px no-repeat;
      -webkit-transition: all .20s ease-out;
      -moz-transition: all .20s ease-out;
      -o-transition: all .20s ease-out;
      -ms-transition: all .20s ease-out;
      transition: all .40s ease-out;
      border-bottom: 0px dotted #9c5959;

      &.router-link-exact-active,
      &:hover {
        background: url(../assets/images/label.png) 0 0 no-repeat;
        color: #eee9d9;
      }

      @media (max-width:991px) {
        width: 90px;
        padding: 65px 0 0 0;
      }
    }
  }
}
.navbar
{
  background-color: #7a4040;
  
  display: none !important;
  @media (max-width:767px) {
      display: flex !important;
    }
  
  span{
  color: antiquewhite !important;
  }
  button{
  border: 1px solid antiquewhite;
  &:focus {
      box-shadow:0 0 0 2px antiquewhite ;
    }
  }
  
  .nav-link
  {
  color: antiquewhite !important;
    padding: 10px;
  border: none;
  border-radius: 5px;
  &:hover
  {
  background-color: rgba(250, 235, 215, 0.397);
  }
  }
}
</style>