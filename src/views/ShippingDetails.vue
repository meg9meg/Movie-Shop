<template>
  <div class="shippingdetails">
      <Form class="form" @submit="onSubmit" :validation-schema="schema">
        <h1 class="form-header">Please provide shipping details</h1>
        <div class="form-field-container">
            <div class="form-field">
                <label for="firstname">First Name</label>
                <Field name="firstname" type="text"></Field>
                <ErrorMessage class="error" name="firstname" />
            </div>
            <div class="form-field">
                <label for="surname">Surname</label>
                <Field name="surname" type="text"></Field>
                <ErrorMessage class="error" name="surname" />
            </div>
            <div class="form-field">
                <label for="email">Email</label>
                <Field name="email" type="text"></Field>
                <ErrorMessage class="error" name="email" />
            </div>
            <div class="form-field">
                <label for="street">Street</label>
                <Field name="street" type="text"></Field>
                <ErrorMessage class="error" name="street" />
            </div>
            <div class="form-field">
                <label for="streetnumber">Street Number</label>
                <Field name="streetnumber" type="text"></Field>
                <ErrorMessage class="error" name="streetnumber" />
            </div>
            <div class="form-field">
                <label for="housenumber">House Number</label>
                <Field name="housenumber" type="text"></Field>
                <ErrorMessage class="error" name="housenumber" />
            </div>
            <div class="form-field">
                <label for="postcode">Post Code</label>
                <Field name="postcode" type="text"></Field>
                <ErrorMessage class="error" name="postcode" />
            </div>
            <button>SAVE</button>
        </div>
      </Form>
      <div class="buttons">
        <router-link style="text-decoration: none" :to="'/basket'">
          <button>Go back</button>
        </router-link>
        <router-link v-bind:class="[next ? 'enabled' : 'disabled']" style="text-decoration: none" :to="'/payment'">
          <button>Next</button>
        </router-link>
      </div>
  </div>
</template>

<script>
import {Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup'

export default {
  name: "ShippingDetails",

  components: {
    Field,
    Form,
    ErrorMessage,
  },

  data() {
    return {
    next: false,
    schema: yup.object({
      firstname: yup.string().required().min(2),
      surname: yup.string().required().min(2),
      email: yup.string().required().email(),
      street: yup.string().required().min(2),
      streetnumber: yup.string(),
      housenumber: yup.string().required(),
      postcode: yup.string().matches(/^[0-9]{2}-[0-9]{3}$/, "Please enter correct post code")
    }),
    };
  },

  methods: {
      onSubmit() {
      console.log('submit');
      this.next = true;
    }
  }
}
</script>

<style lang = "scss">
  .shippingdetails {
    background-color: #F4F1DE;
    min-height: calc(100vh - 95px);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 15px 15px;

    .form {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .form-header {
        width: 100%;
        padding-bottom: 30px;
        @media screen and (max-width: 400px) {
            font-size: 20px;
        }
      }

      .form-field-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        
        input {
          height: 30px;
          width: 350px;
          border: 1px solid #81B29A;
          color: #3D405B;
          outline: none;
          border-radius: 5px;
          font-size: 16px;
          @media screen and (max-width: 400px) {
            width: 300px;
            height: 25px;
          }
        }
        label {
          display: block;
          font-size: 18px;
          margin-bottom: 3px;
          color: #3D405B;
          font-weight: 500;
          @media screen and (max-width: 400px) {
            font-size: 16px;
          }
        }

        .error {
          display: block;
          margin-top: 3px;
          color: red;
          font-size: 15px;
        }

        button {
          width: 150px;
          height: 30px;
          background-color: #81B29A;
          color: #F4F1DE;
          font-size: 18px;
          border: none;

          &:hover {
            color: #E07A5F;
            cursor: pointer;
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