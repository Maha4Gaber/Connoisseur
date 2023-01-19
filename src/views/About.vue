<template>
  <div class="container">
    <div class="cover">

        <div class="border"></div>
      <div class="row">
      <div class="col-lg-8">
        <div class="about">
        <h3>Headline: Lorem Ipsum</h3>
        <div class="date">
          <span class="day">17</span>
          <span class="month">Feb</span>
          <span class="year">2001</span>
        </div>
        <img src="../assets/images/home/3.jpg" width="300" class="right" alt="">
        <p>Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, 
          ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi 
          vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien 
          ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae. 
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames 
          ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, 
          tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
        </p>
        <p>
          <strong>Pellentesque habitant morbi tristique</strong>
          senectus et netus et malesuada fames ac turpis egestas. 
          Vestibulum tortor quam, feugiat vitae, ultricies eget, 
          tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
          <em>
            Aenean ultricies mi vitae est.
          </em>
          Mauris placerat eleifend leo. Quisque sit amet 
          est et sapien ullamcorper pharetra. Vestibulum erat 
          wisi, condimentum sed,
          <code>commodo vitae,</code>
          ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, 
          eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. 
          <a href="#">Donec non enim</a>
          in turpis pulvinar facilisis. Ut felis.
        </p>
        <h1>Header Level 1</h1>
        <h2>Header Level 2</h2>
        <h3>Header Level 3</h3>
        <h4>Header Level 4</h4>
        <h5>Header Level 5</h5>
        <h6>Header Level 6</h6>

        <blockquote>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur 
            elementum molestie. Donec eget orci vitae felis malesuada gravida a a magna.
            Nulla quis nisi dui. Aliquam eu risus et dui tempus pretium. Nunc vulputate 
            ante ut dui cursus ultricies. Aliquam eu arcu et neque molestie porta vitae 
            quis magna. Quisque convallis, justo in sagittis 
            egestas, arcu diam malesuada eros, non dignissim turpis lacus sed dolor.
          </p>
        </blockquote>
        
      </div>
      </div>
      <div class="col-4 asidbar">
        <aside class="sidbar">
          <Sidbar />
        </aside>
      </div>
      </div>
      <div class="border2"></div>
      <br>

    </div>
  </div>
<Footer></Footer>

</template>

<script>
import Footer from "../components/Footer.vue";
import Sidbar from "../components/Sidebar.vue"
export default {
  name:"about",
  components:{Sidbar,Footer}

}
</script>

<style lang="scss">
.about
{
  padding: 10px;
  border-right: 1px dashed #9c5959;
}
  .date
  {
    float: left;
    position: relative;
    margin-right: 10px;
    padding: 44px 5px 0;
    color: #9c5959;
    .day
    {
      position: absolute;
      font-size: 35px;
      line-height: 45px;
      left: 0px;
      top: 0;
    }
    .month
    {
      text-transform: uppercase;
      font-size: 25px;
    }
    .year
    {
      display: block;
      position: absolute;
      right: -15px;
      top: 14px;
      transform: rotate(-90deg);
    }
  }
  
  blockquote{
    background: transparent url(../assets/images/blockquote.png) no-repeat 0px 30px;
    padding: 30px;
    font-style: italic;
  }
.asidbar
{
  @media (max-width:991px ) {
    display: none;
    
  }
}
</style>