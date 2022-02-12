<template>
  <div class="payment">
    <div class="payment-block">
      <div class="form-field">
              <label for="paypal">
                <input id="paypal" type="radio" value="paypal" v-model="checked"/>PayPal <font-awesome-icon :icon="['fab', 'cc-paypal']" />
              </label>
              <label for="googlepay">
                <input id="googlepay" type="radio" value="googlepay" v-model="checked"/>Google Pay <font-awesome-icon :icon="['fab', 'google-pay']" />
              </label>
              <label for="applepay">
                <input id="applepay" type="radio" value="applepay" v-model="checked"/>Apple Pay <font-awesome-icon :icon="['fab', 'apple-pay']" />
              </label>
              <label for="amazonpay">
                <input id="amazonpay" type="radio" value="amazonpay" v-model="checked"/>Amazon Pay <font-awesome-icon :icon="['fab', 'amazon-pay']" />
              </label>
              <label for="creditcard">
                <input id="creditcard" type="radio" value="creditcard" v-model="checked"/>Credit/Debit Card <font-awesome-icon :icon="['fab', 'cc-visa']" /><font-awesome-icon :icon="['fab', 'cc-mastercard']" />
              </label>
      </div>
      <router-link style="text-decoration: none" :to="'/thankyoupage'">
        <button :disabled="!checked" @click="clearCart()"><font-awesome-icon icon="lock" />Finish and pay</button>
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

      .form-field {
        width: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        label {
          width: 100%;
          height: 50px;
          background-color: #3D405B;
          color: #81B29A;
          
          input {
            width: 50px;
          }
        }
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