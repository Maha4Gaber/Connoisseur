<template>
  <div class="container">
    <div class="cover">
      <div class="row">
        <div class="col-lg-9 col-md-9 col-sm-12">
          <div class="intro">
            <h1 class="title">Connoisseur</h1>
            <h3 class="tagline"> Free Website Template By: <a href="#">PriteshGupta.com</a>
            </h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-12">
          <div class="reservation">
            <div class="reserv_title">Call Us:</div>
            <hr class="hrsolid" style="margin-bottom:8px">
            <div class="phone">+012 345 6789</div>
            <hr class="hrdashed">
            <div class="email">
              <router-link :to="{name:'contact'}" class="button">Or Email Us</router-link>
            </div>
          </div>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="slider">
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="../assets/images/home/3.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="../assets/images/home/2.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="../assets/images/home/1.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="../assets/images/home/4.jpg" class="d-block w-100" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
              data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <br>
      <div class="border"></div>
      <br>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="home-widget">
            <h3>Lorem Ipsum</h3>
            <img src="../assets/images/home/3.jpg" alt="">
            <p>Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas
            semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper
            pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae.</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="home-widget">
            <h3>Lorem Ipsum</h3>
            <img src="../assets/images/home/3.jpg" alt="">
            <p>Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
              egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien
              ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae.</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="home-widget">
            <h3>Lorem Ipsum</h3>
            <img src="../assets/images/home/3.jpg" alt="">
            <p>Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
              egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien
              ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae.</p>
          </div>
        </div>
      </div>
      <br>
      <div class="border2"></div>
      <br>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="plan">
            <h3>Breakfast <span>%99</span></h3>
            <a href="#" class="button">Order Now</a>
            <ul>
              <li><strong>LOREM IPSUM</strong> Dolor Sit Amet</li>
              <li><strong>LOREM IPSUM</strong> Dolor Sit Amet</li>
              <li><strong>LOREM IPSUM</strong> Dolor Sit Amet</li>
              <li><strong>LOREM IPSUM</strong> Dolor Sit Amet</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="plan">
            <h3>Lunch <span>%99</span></h3>
            <a href="#" class="button">Order Now</a>
            <ul>
              <li><strong>LOREM IPSUM</strong> Dolor Sit Amet</li>
              <li><strong>LOREM IPSUM</strong> Dolor Sit Amet</li>
              <li><strong>LOREM IPSUM</strong> Dolor Sit Amet</li>
              <li><strong>LOREM IPSUM</strong> Dolor Sit Amet</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="plan">
            <h3>Dinner <span>%99</span></h3>
            <a href="#" class="button">Order Now</a>
            <ul>
              <li><strong>LOREM IPSUM</strong> Dolor Sit Amet</li>
              <li><strong>LOREM IPSUM</strong> Dolor Sit Amet</li>
              <li><strong>LOREM IPSUM</strong> Dolor Sit Amet</li>
              <li><strong>LOREM IPSUM</strong> Dolor Sit Amet</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
<Footer></Footer>

</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  name: "landing",
  components:{Footer}
  
}
</script>


<style lang="scss">
#container {
  background: url(../assets/images/bg.png) center top repeat-x;
  /* margin-left: auto;
    margin-right: auto; */
}

.right {
  float: right;
  margin-left: 10px;
}

.left {
  float: left;
  margin-right: 10px;
}

.clear {
  clear: both;
}

.intro {
  .title {
    font-family: 'Lobster', cursive;
    font-size: 80px;
    
    transition: all .20s ease-out;
    @media (max-width:767px) {
      font-size: 70px;      
      // margin-bottom: 20px;
    }
    &:hover {
      text-shadow:
        0 1px 0 #ccc,
        0 2px 0 #c9c9c9,
        0 3px 0 #bbb,
        0 4px 0 #b9b9b9,
        0 5px 0 #aaa,
        0 6px 1px rgba(156, 89, 89, .1),
        0 0 5px rgba(156, 89, 89, .1),
        0 1px 3px rgba(156, 89, 89, .3),
        0 3px 5px rgba(156, 89, 89, .2),
        0 5px 10px rgba(156, 89, 89, .25),
        0 10px 10px rgba(156, 89, 89, .2),
        0 20px 20px rgba(156, 89, 89, .15);
    }
  }

  .tagline {
    font-family: 'Lobster', cursive;
    font-size: 27px;
    @media (max-width:767px) {
        font-size: 22px;
        margin-bottom: 40px;
      }
  }

}

.reservation {
  color: #9c5959;
  font-family: 'Lobster', cursive;
  font-size: 20px;
  text-align: center;
  width: 200px;
  margin: auto;
  @media (max-width:767px) {
      font-size: 22px;
      margin-left: 30px;
    }

  .reserv_title {
    font-size: 27px;
  }

  .hrsolid {
    border: 0;
    border-bottom: 2px solid #9c5959 !important;
    margin: 2px;
  }

  .phone {
    line-height: 1.7;
  }

  .button {
    padding: 5px 50px;
    line-height: 1.5;
    display: block;
    margin: 10px 0;

    &:hover {
      color: #f5f5f5 !important;
    }
  }
}

.button {
  font-family: 'Lobster', cursive;
  color: #f5f5f5;
  padding: 8px 14px 10px;
  background-color: #9c5959 !important;
  border: none;
  position: relative;
  // box-shadow: inset 0px -3px 1px rgb(0 0 0 / 45%),
  //   0px 2px 2px rgb(0 0 0 / 25%);
  border-radius: 3px;
  text-decoration: none;
  font-size: 20px;

  &:hover {
    color: #f5f5f5;
  }
}
.slider
{
  width: 50%;
  margin: auto;
  .slide
  {
    width: 90% !important;
    margin: auto;
    img{
      width: 100% !important;
        background-color: #9c5959;
        padding: 1px;
        // box-shadow: 0 0 4px rgb(0 0 0 /50%);
        border-radius: 2px;
    }
        .carousel-control-next,
        .carousel-control-prev {
          // top: -470px;
          width: 5%;
          opacity: 1;
          display: none;
        }
        .carousel-control-next-icon, .carousel-control-prev-icon {
          background-color: #9c5959;
          border-radius: 10px;
        }
        &:hover .carousel-control-next
        {
          display: inline-block;
        }
        &:hover 
        .carousel-control-prev {
          display: inline-block;
        }
      }
}
.home-widget{
  width: 90% ;
  margin: auto;
  h3 {
      text-align: center;
    }
  img{
    width: 90%;
    margin: 20px auto;
    background: #9C5959;
    padding: 1px;
    margin-left: 4px;
    // box-shadow: 0 0 4px rgb(0 0 0 / 50%);
    border-radius: 2px;
  }
  p{
    width: 90%;
  }
}
.plan {
  font-size: 14px;
  background: rgba(255, 255, 255, 0.40);
  border: 1px solid #ddd;
  color: #333;
  padding: 20px;
  position: relative;
  text-align: center;
  width: 90%;
  margin: auto;
  margin-bottom: 50px;
  h3  {
    
    border-radius: 5px 5px 0 0;
    font-size: 35px;
    font-weight: normal;
    letter-spacing: 1;
    padding: 20px;
    margin: -20px -20px 50px -20px;
    background-image: linear-gradient(#d07a7a, #9c5959);
    color: #f5f5f5;
    span {
        display: block;
        font: bold 25px/100px Georgia, Serif;
        color: #9c5959;
        background: #fff;
        border: 2px solid #9c5959;
        height: 100px;
        width: 100px;
        margin: 10px auto -50px;
        border-radius: 100px;
        box-shadow: 0 5px 20px #ddd inset, 0 3px 0 #999 inset;
    }
  }
  ul{
    margin: 20px 0 0 0 ;
    padding: 0;
    li{
      border-top: 1px solid #ddd;
      padding: 10px 0;
    }
  }
}
</style>