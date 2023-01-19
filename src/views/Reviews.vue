<template>
  <div class="container">
    <div class="cover">
      <div class="border"></div>
      <div class="row">
        <div class="col-lg-8 review">
          <h3>Reviews</h3>
          <div class="rev" v-for="rev in reviews" :key="rev.user_id">
            <blockquote> {{rev.text}} <span>{{ rev.name }}</span>
            </blockquote>
            <div class="border3"></div>
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
import Sidbar from "../components/Sidebar.vue";
import axios from 'axios';

export default {
  name: "review",
  components: { Sidbar,Footer },
  data() {
    return {
      reviews: [],
    }
  },
  async mounted() {
    let result = await axios.get('http://localhost:3000/reviews');
    if(result.status == 200 && result.data.length > 0) {
      this.reviews = result.data;
    }

  }
}
</script>

<style lang="scss">
.review {
  padding: 10px;
  border-right: 1px dashed #9c5959;
}
blockquote span{
  font-weight: bold;
  clear: both;
  float: right;
  margin-top: 20px;
}
</style>