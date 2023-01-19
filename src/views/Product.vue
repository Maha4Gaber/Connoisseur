<template>
  <div class="cover">
    <div class="border"></div>
    <div class="row">
      <div class="col-lg-8">
        <div class="prod">
          <h3 class="text-center">{{ product.name }}</h3>
          <img  class="clear img" src="../assets/images/menu/pizza4.jpeg" alt="">
          <h6 class="rate left">Rate : </h6>
          <Rate  style="margin-top: 3px;"/>
          <h6 class="rate clear">Price : ${{ product.price }}</h6>
          <h6 class="rate clear">About : </h6>
          <p>{{ product.dec }}</p>
          <a @click="Order" style="cursor: pointer;" class="button order">Order Now</a>
          <h6>{{ comments.length }} Comment</h6>
          <div class="row">
            <div class="col-9">
              <div class="form-floating">
                <textarea v-model="comment" class="form-control comment" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Comments</label>
              </div>              
            </div>
            <div class="col-1">
              <form action=""  @submit="submit_Comment">
              <input type="submit" value="Post" class="button ">
              </form>
            </div>
          </div>
          <div class="row" v-for="coment in comments" :key="coment.pro_id">
            <div class="col-12">
              <div class="row ">
                <div class="img  col-11">
                  <img class="left" src="../assets/images/woman-3247382_960_720.jpg" alt="">
                  <span class="title ">{{ coment.name }}</span>
                  <p class="commentText">{{ coment.sub }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3 asidbar">
        <br>
        <aside class="sidbar">
          <Sidbar />
        </aside>
      </div>
    </div>
    <div class="border2"></div>
    <br>
  </div>
<Footer></Footer>

</template>

<script>
import Footer from "../components/Footer.vue";
import Sidbar from "../components/Sidebar.vue"
import Rate from '../components/Rate.vue'
import axios from "axios";
import { mapActions } from 'vuex';
export default {
  name: "product",
  components: { Sidbar,Rate,Footer },
  props: ['id'],
  data() {
    return {
      product: [],
      comment: null,
      user:"",
      comments:[]
    }
  },
  async mounted() {
    this.user= JSON.parse(localStorage.getItem("user-data"));
    let result = await axios.get('http://localhost:3000/product/'+this.id);
    if(result.status == 200) {
      this.product = result.data;
    }
    else
    {
      console.log("fail");
    }
    let comment = await axios.get('http://localhost:3000/comment?pro_id=' + this.id);
    if(comment.status == 200 && comment.data.length >= 0) {
      this.comments = comment.data;
    }
    else
    {
      console.log("comment fail");
    }
    let user = JSON.parse(localStorage.getItem("user-date"))
  },
  methods: {
    ...mapActions(['redirectTo']),
    Order() {
      if(this.user) {
        $router.push({
          name: 'order',
          params: {
            id: product.id,
          },
        })
      }
      else {
        this.redirectTo({
          val: 'signUp',
        })
        console.log("login");
      }
    },
    async submit_Comment()
    {
      let result = await axios.post('http://localhost:3000/comment',{
        user_id: this.user.id,
        name: this.user.name,
        sub: this.comment,
        pro_id: this.id        
      })
      if(result.status===200)
      {
        console.log("done");
      }
    }
  }
}
</script>

<style lang="scss">
.prod {
      padding: 10px;
      border-right: 1px dashed #9c5959;
      img.img{
        width: 100%;
        margin: 10px auto;
        height: 400px;
      }
      .order
      {
        margin: 20px auto !important;
        display: block;
        width: fit-content;
      }
      label
      {
        font-size: 15px;
      }
      textarea{
        &:focus
        {
          box-shadow: none;
        }
      }
      .img
      {
        img {
        width: 50px;
        height: 50px;
        margin: 12px 20px;
        border-radius: 50%;
        
        }      
        margin: 10px 0;
        color: #9c5959;
        box-shadow: 3px 3px 9px 0px #9c595975;
        border-radius: 8px;
        position: relative;
        .title
        {
          display: block;
          padding: 5px  0 0 0!important;
            font-weight: bold;
        }
        p {
          font-size: 14px;
          padding: 5px  0 !important;
          margin: 0 !important;
        }
      
    }
    .comment{
      width: 100%;
    }
}
</style>
<!-- commentText -->