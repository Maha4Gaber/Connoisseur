<template>
  <div class="container">
    <div class="cover">
      <div class="border"></div>
      <br>
      <div class="gallery">
        <h3>Gallery</h3>
        <div class="row">
          <div class="col-lg-3 col-md-4 col-sm-6">
            <a href="#" class="fancyimage">
              <img src="../assets/images/gallery/1.jpeg" alt="">
              <div class="overlay">
                <div class="name">Pizza Type A</div>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <a href="#" class="fancyimage">
              <img src="../assets/images/gallery/2.jpg" alt="">
              <div class="overlay">
                <div class="name">Pizza Type A</div>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <a href="#" class="fancyimage">
              <img src="../assets/images/gallery/3.jpeg" alt="">
              <div class="overlay">
                <div class="name">Pizza Type A</div>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <a href="#" class="fancyimage">
              <img src="../assets/images/gallery/4.jpg" alt="">
              <div class="overlay">
                <div class="name">Pizza Type A</div>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <a href="#" class="fancyimage">
              <img src="../assets/images/gallery/5.jpeg" alt="">
              <div class="overlay">
                <div class="name">Pizza Type A</div>
              </div></a>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <a href="#" class="fancyimage">
              <img src="../assets/images/gallery/6.jpg" alt="">
              <div class="overlay">
                <div class="name">Pizza Type A</div>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <a href="#" class="fancyimage">
              <img src="../assets/images/gallery/7.jpeg" alt="">
              <div class="overlay">
                <div class="name">Pizza Type A</div>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <a href="#" class="fancyimage">
              <img src="../assets/images/gallery/8.jpg" alt="">
              <div class="overlay">
                <div class="name">Pizza Type A</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <br>
      <div class="border2"></div>
      <br>
    </div>
  </div>
<Footer></Footer>

</template>

<script>
import Footer from "../components/Footer.vue";
export default {
  components:{Footer}
}
</script>

<style lang="scss">
.gallery .fancyimage
{
  border-bottom: 0px dotted #9c5959;
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  padding: 15px;
  .overlay{
    position: absolute;
      top: 50%;
      left: 50%;
      width: 0;height:  0;
      margin: 15px;
      background-color: transparent;
      overflow: hidden;
      transition: all .5s ease-in-out;
      .name{
        font-family: 'Lobster', cursive;
        color:antiquewhite;
        font-weight: bold;
        font-size: 25px;
        letter-spacing: 2px;
        margin: 50% 0 0 25% ;
      }
  }
    
  &:hover
  {
    .overlay
    {
      background-color: #9c5959b0;
        top: 15px;
        left: 15px;
        margin: 15px;
        margin-left: 4px;
        width: calc(100% - 30px);
        height: calc(100% - 30px);
    }
  }
}
.gallery .fancyimage img
{
  width: 100%;
  height:  100%;
  margin: 15px ;
  background: #9C5959;
  padding: 1px;
  margin-left: 4px;
  box-shadow: 0 0 4px rgba($color: #000000, $alpha: 1.0) (0 0 0 / 50%);
  border-radius: 2px;
  
}
</style>