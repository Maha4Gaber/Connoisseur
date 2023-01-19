<template>
  <div class="container">
    <div class="cover">
      <div class="border"></div>
      <div class="row">
        <div class="col-lg-8">
          <div class="contact">
            <h3>Contact Us</h3>
            <iframe width="95%" height="250"
              src="http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=701+1st+Ave,+Sunnyvale,+CA+94089,+USA&amp;aq=0&amp;oq=701+&amp;sll=37.0625,-95.677068&amp;sspn=45.418852,93.076172&amp;t=v&amp;ie=UTF8&amp;hq=&amp;hnear=701+1st+Ave,+Sunnyvale,+California+94089&amp;z=14&amp;ll=37.417222,-122.02511&amp;output=embed"></iframe>
              <br>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante.
              </p>
              <form action="#">
                <label for="name">Name :</label>
                <br>
                <input type="text" name="name" id="name">
                <br>
                <label for="sub">Subject :</label>
                <br>
                <input type="text" name="sub" id="sub">
                <br>
                <label for="mail">Email :</label>
                <br>
                <input type="email" name="mail" id="mail">
                <br>
                <label for="textarea">Message :</label>
                <br>
                <textarea cols="75" rows="10" name="textarea" id="textarea"></textarea>
                <br>
                <input type="submit" value="Submit" class="button mt-3">
              </form>
          </div>
        </div>
        <div class="col-3 asidbar">
          <div class="from_blog">
            <br>
            <h4 class="text-center">From The Blog</h4>
            <ul class="blog">
              <l1>
                <a href="#">Lorem Ipsum Dolor</a>
                <br> Orciint erdum condimen terdum nulla mcorper elit nam curabitur... <br>
              </l1>
              <l1><a href="#">Praesent Et Eros</a>
                <br> Orciint erdum condimen terdum nulla mcorper elit nam curabitur... <br>
              </l1>
              <l1><a href="#">Suspendisse In Neque</a>
                <br> Orciint erdum condimen terdum nulla mcorper elit nam curabitur... <br>
              </l1>
              <l1><a href="#">Suspendisse In Neque</a>
                <br> Orciint erdum condimen terdum nulla mcorper elit nam curabitur...
              </l1>
            </ul>
          </div>
          <div class="border3"></div>
          <br>
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
  name: "contact",
  components: { Sidbar,Footer},
}
</script>

<style lang="scss">
.cover {
  .contact
  {
    padding: 10px;
      border-right: 1px dashed #9c5959;
  }
  iframe
  {
    border: 1px solid #9c5959;
    overflow: hidden;
    margin: 0;
  }
  label
  {
    font-size: 22px;
    font-family: 'Lobster', cursive;
    color: #9c5959;
    // text-shadow: 0px 1px 1px rgb(0 0 0 / 20%);
    font-weight: normal;
    padding-bottom: 10px;
    padding-top: 10px;
    margin:0 20px 0 0;
  }  
    input[type="email"],
    input[type="password"],
    input[type="text"]
    {
      width: 70%;
    }
  
    input[type="text"],
    input[type="email"],input[type="number"],
    input[type="password"],
    select,
    textarea {
      outline: none !important;
      background: #f5f0e0 !important;
      border: 1px dotted #9C5959 !important;
      font-size: 14px !important;
      padding: 10px !important;
      border-radius: 5px;
      margin-left: 10px;
      width: 70%;
      @media (max-width:767px) {
      width: 90%;
      }
    }
    textarea {
      &:focus {
        box-shadow: none;
      }
    }
}
</style>