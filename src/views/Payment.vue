<template>
  <div class="payment">
    <div class="payment-block">
      <div class="form-field">
              <label for="paypal">
                <input id="paypal" type="radio" value="paypal" v-model="checked"/><span>PayPal </span><font-awesome-icon class="icon" :icon="['fab', 'cc-paypal']" />
              </label>
              <label for="googlepay">
                <input id="googlepay" type="radio" value="googlepay" v-model="checked"/><span>Google Pay </span><font-awesome-icon class="icon" :icon="['fab', 'google-pay']" />
              </label>
              <label for="applepay">
                <input id="applepay" type="radio" value="applepay" v-model="checked"/><span>Apple Pay </span><font-awesome-icon class="icon" :icon="['fab', 'apple-pay']" />
              </label>
              <label for="amazonpay">
                <input id="amazonpay" type="radio" value="amazonpay" v-model="checked"/><span>Amazon Pay </span><font-awesome-icon class="icon" :icon="['fab', 'amazon-pay']" />
              </label>
              <label for="creditcard">
                <input id="creditcard" type="radio" value="creditcard" v-model="checked"/><span>Credit/Debit Card </span><font-awesome-icon class="icon-card" :icon="['fab', 'cc-visa']" /><font-awesome-icon class="icon-card" :icon="['fab', 'cc-mastercard']" />
              </label>
      </div>
      <router-link style="text-decoration: none" :to="'/thankyoupage'">
        <button class="pay" :disabled="!checked" @click="clearCart()"><font-awesome-icon icon="lock" /><span>Finish and pay</span></button>
      </router-link>
    </div>    
    <div class="buttons">
      <router-link style="text-decoration: none" :to="'/shippingdetails'">
        <button>Go back</button>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: "Payment",

  data() {
      return {
        next: false,
        checked : false, 
      };
  }
}
</script>

<style lang="scss">
  .payment {
    background-color: #F4F1DE;
    min-height: calc(100vh - 155px);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    padding: 30px 30px;

    .payment-block {
      width: 50%;
      @media screen and (max-width: 600px){
        width: 95%;
      }

      .form-field {
        width: 100%;
        background-color: #3D405B;
        border-radius: 10px;
        font-size: 18px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        @media screen and (max-width: 600px){
          font-size: 16px;
        }

        label {
          width: 100%;
          height: 50px;
          display: flex;
          align-items: center;  
          color: #81B29A;
          text-align: left;
          justify-content: space-between;
          margin-right: 10px;
          
          input {
            width: 50px;
          }

          span {
            width: 75%;
          }

          .icon {
              color: #F4F1DE;
              font-size: 35px;
              width: 15%;
          }
          .icon-card {
              color: #F4F1DE;
              font-size: 35px;
              width: 7.5%;
              margin-right: 5px;
          }
        }
      }
    }
    .pay {
      margin-top: 20px;
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.1), 20px 6px 20px 6px rgba(0,0,0,0.1);
      border-radius: 10px;
      padding: 14px 40px;
      background-color: #F4F1DE;
      color: #3D405B;
      font-size: 16px;

      span {
        margin-left: 10px;
      }
      
      &:hover {
        background-color: #E07A5F;
        cursor: pointer;
      }
    }
  }
      .buttons {
      display: flex;
      width: 100%;
      height: 80px;
      justify-content: space-between;
      align-items: center;

      button {
        width: 80px;
        height: 25px;
        font-size: 16px;
        background-color: #3D405B;
        color: #F4F1DE;
        border: none;

        &:hover {
          color: #E07A5F;
          cursor: pointer;
        }
      }
    }
</style>