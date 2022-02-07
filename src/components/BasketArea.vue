<template>
  <div class="banerarea">
    <h1 class="title">My Order</h1>
      <div class="basket-summary">
        <p class="basket-title">Item</p>
        <p class="basket-quantity">Quantity</p>
        <p class="basket-price">Price</p>
        <span></span>
      </div>
      <div class="basket-items">
        <p class="item-title">Harry Potter and the Deathly Hallows: Part 2</p>
        <p class="item-quantity">1</p>
        <p class="item-price">12$</p>
        <font-awesome-icon class="remove" icon="trash-alt" />
      </div>
      <div class="basket-total">
        <div class="discount">
          <p>Enter discount code here:</p>
          <input type="text">
          <input type="submit" value="Add">
        </div>
        <div class="cost-summary">
          <p class="total-sub">Sub Total </p><span class="price">30$</span>
          <p class="shipping-cost">Shipping </p><span class="price">15$</span>
          <p class="total-discount">Discount </p><span class="price">0$</span>
          <p class="total-amount">Total </p><span class="price">45$</span>
        </div>
      </div>
      <div class="buttons">
        <router-link style="text-decoration: none" :to="'/'">
          <button>Go back</button>
        </router-link>
        <router-link style="text-decoration: none" :to="'/shippingdetails'">
          <button>Next</button>
        </router-link>
      </div>
  </div>
</template>

<script>
export default {
    name: "BasketArea",
}
</script>

<style lang="scss">
  .banerarea {
    background-color: #F4F1DE;
    min-height: calc(100vh - 95px);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 30px 30px;

    .title {
      padding-bottom: 30px;
    }

    .basket-summary {
      display: flex;
      width: 100%;
      height: 40px;
      background-color: #81B29A;
      padding-left: 5px;
      font-weight: 600;
      align-items: center;

      .basket-title {
        width: 50%;
        text-align: left;
      }

      .basket-quantity,
      .basket-price {
        width: calc(25% - 7px);
      }

      span {
        width: 14px;
      }
    }

    .basket-items {
      display: flex;
      width: 100%;
      min-height: 40px;
      align-items: center;
      padding-left: 5px;
      border-bottom: 1px solid #3D405B;

      .item-title {
        width: 50%;
        text-align: left;
      }

      .item-quantity,
      .item-price {
        width: calc(25% - 7px);
      }

      .remove {
        cursor: pointer;
      }
    }

    .basket-total {
      display: flex;
      width: 100%;
      height: 100px;
      flex-direction: row;
      padding-bottom: 40px;

      .discount {
        width: 50%;
        height: 100%;
        padding: 20px 0 0 20px;
        display: flex;
        flex-wrap: wrap;

        @media screen and (max-width: 600px) {
          padding: 20px 0 0 5px; 
        }
        
        p {
          width: 100%;
          font-size: 16px;
          font-weight: 600;
          text-align: left;

          @media screen and (max-width: 600px) {
              font-size: 14px; 
          }
        }

        input {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
          border-radius: 4px;
          height: 30px;

          &[type="text"] {
            width: 200px;  
            margin-right: 10px;
            box-sizing: border-box;
            border: 2px solid #ccc;
            background-color: #f8f8f8;
            resize: none;

            @media screen and (max-width: 600px) {
              width: 100%;  
            }
          }

          &[type="submit"] {
            width: 50px;
            background-color: #81B29A;
            border: none;
            color: #3D405B;
            cursor: pointer;

            &:hover {
              background-color: #E07A5F;
            }

            @media screen and (max-width: 600px) {
              margin-top: 5px;
            }
          }
        }
      }

      .cost-summary {
        width: 50%;
        height: 100%;
        padding: 20px 20px 0 5px;
        font-size: 16px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        @media screen and (max-width: 600px) {
          font-size: 15px;
          padding: 20px 5px 0 5px; 
        }

        p {
          text-align: left;
          width: 70%;
        }

        .total-amount {
          font-weight: 600;
        }

        .price {
          text-align: right;
          width: 30%;
          
          &:nth-last-child(1) {
            font-weight: 600;
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
  }
</style>