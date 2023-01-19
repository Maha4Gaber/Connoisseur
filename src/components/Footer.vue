<template>
  <div class="container">
    <div class="cover">
      <div class="border"></div>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="footer_widget">
            <h4>Some Title</h4>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames
              ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,
              tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
              ultricies mi vitae est. Mauris placerat eleifend leo.Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="footer_widget">
            <h4>From The Blog</h4>
            <ul class="blog">
              <l1>
                <a href="#">Lorem Ipsum Dolor</a>
                <br>
                Orciint erdum condimen terdum nulla mcorper elit nam curabitur...
                <br>
              </l1>
              <l1><a href="#">Praesent Et Eros</a>
                <br>
                Orciint erdum condimen terdum nulla mcorper elit nam curabitur...
                <br>
              </l1>
              <l1><a href="#">Suspendisse In Neque</a>
                <br>
                Orciint erdum condimen terdum nulla mcorper elit nam curabitur...
                <br>
              </l1>
              <l1><a href="#">Suspendisse In Neque</a>
                <br>
                Orciint erdum condimen terdum nulla mcorper elit nam curabitur...
              </l1>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="footer_widget">
            <h4>We Are Social!</h4>
            <div class="social">
              <a href="#" class="so_link twitter">
                Twitter
                <span class="icons twitter"></span>
              </a>
              <a href="#" class="so_link facebook">
                Facebook
                <span class="icons facebook"></span>
              </a>
              <a href="#" class="so_link forrst">
                Forrst
                <span class="icons forrst"></span>
              </a>
              <a href="#" class="so_link flickr">
                Flickr
                <span class="icons flickr"></span>
              </a>
              <a href="#" class="so_link designmoo">
                Designmoo
                <span class="icons designmoo"></span>
              </a>
            </div>
          </div>
        </div>
        <div class="border2"></div>
        <br>
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12">
            <br>
            © Copyright 2012 - All Rights Reserved -
            <a href="#">Domain Name</a>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 text-lg-right ">
            <br>
            Design by <a href="#">
              PriteshGupta.com
            </a>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center mb-3 ">
            <br>
            Made with
            <i class="fa-solid fa-heart " style="color:#9c5959;"></i>
            By Maha Gaber
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.cover {
  padding-bottom: 2px;

  // text-align: right;
  .border {
    height: 5px !important;
    border-top: 1px solid #9c5959 !important;
    border-bottom: 1px dashed #9c5959 !important;
  }

  .border3 {
    height: 5px;
    clear: both;
    border-bottom: 1px dotted #9c5959 !important;
  }

  img {
    background-color: #9c5959;
    padding: 1px;
    box-shadow: 0 0 4px rgb(0 0 0 /50%);
    border-radius: 2px;
  }

  .footer_widget {
    text-align: left;
    margin-top: 20px;
    margin-right: 10px;
    margin-bottom: 10px;

    // width: 310pxcol-lg-4 col-md-6 col-sm-12

    p {
      font-size: 14px;
      margin-right: 5px;
    }
  }

  p {
    font-size: 14px;
    padding: 10px;
    font-family: Century Gothic, sans-serif;
  }

  .blog {
    width: 305px;
    padding: 10px;
    font-size: 14px;

    li {
      list-style: none;
    }
  }

  .social {
    text-align: center;
    padding: 10px;

    .so_link {
      border-radius: 3px;
      box-shadow: 0 4px 5px rgb(0 0 0 /30%);
      display: inline-block !important;
      font: 700 13px/36px 'Arial', Helvetica, Clean, sans-serif;
      height: 36px;
      margin: 0 0 10px;
      padding: 0 10px 11px;
      position: relative;
      text-decoration: none;
      text-shadow: 0 1px 1px rgb(0 0 0 /35%);
      width: 200px;

      &.twitter {
        background: #65acc8;
        background: -webkit-gradient(linear, 0 0, 0 0, from(#65acc8), to(#4586ae));
        border-top: 1px solid #a1cdde;
        text-shadow: 0 1px 1px rgb(255 255 255 / 35%);
        color: rgba(25, 45, 55, .9);
      }

      &.facebook {
        background: #4669ab;
        background: -webkit-gradient(linear, 0 0, 0 0, from(#4669ab),
            to(#304886));
        border-top: 1px solid #8ea4cd;
        color: rgba(21, 31, 53, 1);
        text-shadow: 0 1px 1px rgb(255 255 255 / 35%);
      }

      &.forrst {
        background: #58853e;
        background: -webkit-gradient(linear, 0 0, 0 0, from(#58853e),
            to(#3c592a));
        border-top: 1px solid #99b489;
        color: rgba(22, 33, 14, 1);
        text-shadow: 0 1px 1px rgb(255 255 255 / 35%);
      }

      &.flickr {
        background: #ea66ac;
        background: -webkit-gradient(linear, 0 0, 0 0, from(#ea66ac),
            to(#da3868));
        border-top: 1px solid #f3a2cd;
        color: rgba(74, 4, 32, 1);
        text-shadow: 0 1px 1px rgb(255 255 255 / 35%);
      }

      &.designmoo {
        background: #eb5a5f;
        background: -webkit-gradient(linear, 0 0, 0 0, from(#eb5a5f),
            to(#e13c41));
        border-top: 1px solid #eb5a5f;
        color: rgba(69, 22, 24, 1);
        text-shadow: 0 1px 1px rgb(255 255 255 / 35%);
      }
    }

    .icons {
      background: url(../assets/images/social.png) no-repeat;
      bottom: 5px;
      display: block;
      height: 26px;
      position: absolute;
      right: 10px;
      width: 25px;

      &.twitter {
        background-position: -25px 0;
      }

      &.facebook {
        background-position: -50px 0;
      }

      &.forrst {
        background-position: -75px 0;

      }

      &.flickr {
        background-position: -100px 0;

      }

      &.designmoo {
        background-position: -125px 0;
      }
    }
  }

  .border2 {
    height: 5px !important;
    clear: both;
    border-bottom: 1px solid #9c5959;
    border-top: 1px dashed #9c5959;
  }

  .right {
    text-align: right;
  }
}
</style>