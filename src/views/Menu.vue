<template>
  <div class="container">
    <div class="cover">
      <div class="border"></div>
      <div class="row">
        <div class="col-lg-8">
          <div class="menu">
            <div class="product clear" v-for="product in products " :key="product.id ">
              <div class="left">
                <h3>
                  <a @click="
                      $router.push({
                        name: 'product',
                      params: { 
                        id: product.id,
                      },
                  })" 
                  style="cursor: pointer;"
                  > 
                  {{ product.name }}</a>
                  : ${{ product.price }}
                </h3>
              </div>
              <Rate/>
              <div class="m_order right">
                <a @click="
                    $router.push({
                      name: 'order',
                    params: { 
                      id: product.id,
                    },
                })" style="cursor: pointer;"
                  class="button">Order Now</a>
              </div>
              <img src="../assets/images/menu/pizza4.jpeg" width="200" alt="" class="clear left item">
              <p class="left"> {{ product.dec }} </p>
              <div class="border3"></div>
            </div>
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
import Sidbar from "../components/Sidebar.vue";
import Rate from '../components/Rate.vue'
import axios from 'axios';
export default {
  name: "menu",
  components: { Sidbar,Rate,Footer },
  data() {
    return {
      url:'../assets/images/menu/',
      products: [],
    }
  },
  async mounted() {
    let result = await axios.get('  http://localhost:3000/product');
    if (result.status==200 && result.data.length>0)
    {
      this.products = result.data;
    }
    
  }

}
</script>

<style lang="scss">
.cover {
  

  .m_order,
  .star,
  .item {
    margin-top: 15px;
    
  }

  .menu {
    padding: 10px;
    border-right: 1px dashed #9c5959;

    p {
      width: 60%;
      margin-top: 20px;
    }

    .product {
      padding: 10px;
    }
    @media (max-width:767px) {
      img.item {
        width: 100%;  
        }
        p{
          width: 100%;
        }

    }
    
  }

  .noeffects {
    background: none;
    padding: 0;
    margin-left: 0;
    -webkit-box-shadow: 0 0 0 rgb(0 0 0 / 50%);
    -moz-box-shadow: 0 0 0 rgba(0, 0, 0, 0.50);
    box-shadow: 0 0 0 rgb(0 0 0 / 50%);
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
  }
}
</style>