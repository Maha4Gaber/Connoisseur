<template>
  <div class="cover">
    <div class="row">
      <div class="col-12">
        <h2 class="text-center">{{ orders.name }}</h2>

      </div>
      <div class="col-lg-6 ">
        <div class="lable">
          <label for="name">Name :</label>
        </div>
        <input type="text" v-model="name" name="" id="name">
        <div class="lable">
          <label for="address">Address :</label>
        </div>
        <input type="text" v-model="adress" name="" id="address">
        <div class="lable">
          <label for="Amount">Amount :</label>
        </div>
        <input type="number" v-model="quntity" name="" id="Amount">
        <div class="lable">
          <label for="Payment">Payment type :</label>
        </div>
        <select v-model="payop">
          <Option value="Cash" key="">Cash</Option>
          <Option value="Visa" key="">Visa</Option>
        </select>
      </div>
      <div class="col-6 mt-3">
        <label class="left" for=""> Price Per One : </label>
        <h6 class="left mt-2 pt-1">{{ orders.price }} $</h6>
        <div class="clear"></div>
        <label class="left" for="">Total Price : </label>
        <h6 class="left mt-2 pt-1">{{ orders.price*quntity }} $</h6>
        <div class="clear"></div>
        <div class="lable">
          <label for="Feedback"> Feedback :</label>
          <textarea v-model="feedback" class="form-control comment" placeholder="Leave a feedback here"
            id="floatingTextarea"></textarea>
        </div>
        <div class="text-center mt-4">
            <button type="submit" @click="SubmitOrder" class="button mt-5">Confirm Order</button>
        </div>
      </div>
    </div>
  </div>
  <div  v-if="open" class="salert" @click="stateChange">
    <i class="fa-sharp fa-solid fa-circle-check"></i>
      The Order was successful
  </div>
    <div v-if="uncomplet" class="dalert"   >
      <i class="fa fa-triangle-exclamation"></i> Please Complete your data
    </div>

</template>

<script>
import axios from "axios"
import { mapActions } from 'vuex';
export default {
  props: ['id'],
  data() {
    return {
      orders: [],
      name: '',
      adress: '',
      quntity: 1,
      user:'',
      payop: "",
      feedback: null,
      open: false,
      uncomplet: false,
    }
  },
  async mounted() {
    this.user = JSON.parse(localStorage.getItem("user-data"));
    this.name=this.user.name
    let result = await axios.get('http://localhost:3000/product/' + this.id);
    if(result.status == 200 ) {
      this.orders = result.data;
      console.log("");
    }
    else
    {
      console.log("fail")
    }
    
  },
  methods: {
    ...mapActions([]),
    async SubmitOrder() {
      if(this.adress != ''  || this.payop!='' )
      {
        let result = await axios.post('http://localhost:3000/orders',{
          user_id: this.user.id,
          pro_id: this.id,
          name: this.name,
          adress: this.adress,
          amount: this.amount,
          payoption: this.payop
        })
        if(result.status === 201) {
          console.log("done");
        }
        this.open = true
        this.name = '';
        this.adress = '';
        this.quntity = 1;
        this.payop = '';
      }
      else
      {
        this.uncomplet = true;
      }
      if(this.feedback!= null)
      {
        let review = await axios.post('http://localhost:3000/reviews',{
          user_id: this.user.id,
          name: this.user.name,
          text: this.feedback,
        })
        if(review.status === 201) {
          console.log("done");
          this.feedback = null;
        }
      }
      
      
    },
    stateChange(newState) {
      setTimeout(() => {
        history.back()
      },500);

      if(newState == -1) {
        
      }
    }
  }
}
</script>

<style lang="scss">
.salert
{
  position: absolute;
  bottom: 30px;
  right: 22px;
  width: 400px;
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: #0f5132;
  background-color: #d1e7dd;
  border:1px solid #badbcc;
  align-items: center !important;
  cursor: pointer;
  }
.dalert {
  position: absolute;
  bottom: 30px;
  right: 22px;
  width: 400px;
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: #842029;
  background-color: #f8d7da;
  border-color: #f5c2c7;
  align-items: center !important;
  cursor: pointer;
}
</style>