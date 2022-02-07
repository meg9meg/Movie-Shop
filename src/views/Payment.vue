<template>
  <div class="payment">
    <Form @submit="onSubmit"  :validation-schema="schema">
      <h1 class="title">Payment Method</h1>
        <div class="payment-block">
          <div class="form-field">
            <Field type="radio" id="paypal" name="payment" value="paypal"></Field>
              <label for="paypal">PayPal <font-awesome-icon :icon="['fab', 'cc-paypal']" /></label>
            <Field type="radio" id="googlepay" name="payment" value="googlepay"></Field>
              <label for="googlepay">Google Pay <font-awesome-icon :icon="['fab', 'google-pay']" /></label>
            <Field type="radio" id="applepay" name="payment" value="applepay"></Field>
              <label for="applepay">Apple Pay <font-awesome-icon :icon="['fab', 'apple-pay']" /></label>
            <Field type="radio" id="amazonpay" name="payment" value="amazonpay"></Field>
              <label for="amazonpay">Amazon Pay <font-awesome-icon :icon="['fab', 'amazon-pay']" /></label>
            <Field type="radio" id="creditcard" name="payment" value="creditcard"></Field>
              <label for="creditcard">Credit/Debit Card <font-awesome-icon :icon="['fab', 'cc-visa']" /><font-awesome-icon :icon="['fab', 'cc-mastercard']" /></label>
            <ErrorMessage name="payment" />
          </div>
          
          <button><font-awesome-icon icon="lock" />Finish and pay</button>
        </div>        
    </Form>
      <div class="buttons">
        <router-link v-bind:class="[next ? 'disabled' : 'enabled']" style="text-decoration: none" :to="'/shippingdetails'">
          <button>Go back</button>
        </router-link>
        <router-link v-bind:class="[next ? 'enabled' : 'disabled']" style="text-decoration: none" :to="'/thankyoupage'">
          <button>Next</button>
        </router-link>
      </div>
  </div>
</template>

<script>
import {Form, Field, ErrorMessage} from 'vee-validate';
import * as yup from 'yup'

export default {
  name: "Payment",

  components: {
    Field,
    Form,
    ErrorMessage,
  },

  data() {
      return {
        next: false,
        schema: yup.object ({
          payment: yup.string().required('You must choose a payment method'),
        })   
      };
  },

   methods: {
      onSubmit(values, { resetForm }) {
        console.log(JSON.stringify(values, null ,2));
        this.next = true;
        resetForm();
    }
  }
}
</script>

<style lang="scss">
  .payment {
    background-color: #F4F1DE;
    min-height: calc(100vh - 95px);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 30px 30px;

    .buttons {
      display: flex;
      width: 100%;
      height: 80px;
      justify-content: space-between;
      align-items: center;

      .disabled {
          opacity: 0.5;
          pointer-events: none ;
        }

      .enabled {
        opacity: 1;
        pointer-events: auto ;
      }

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
  }
</style>