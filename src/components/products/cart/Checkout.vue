<template>
  <div class="cart-products">
    <div class="row mt-5">
      <div class="col-sm-8">
        <form id="productCU">
          <!-- <p v-if="errors.length">
                  <b>Please correct the following error(s):</b>
                  <ul>
                    <li v-for="error in errors" :key="error">{{ error }}</li>
                  </ul>
          </p>-->
          <div class="form-group">
            <label for="productName">Address 1</label>
            <input
              type="text"
              class="form-control"
              id="productName"
              name="productName"
              aria-describedby="emailHelp"
              placeholder="Enter address"
            >
          </div>
          <div class="form-group">
            <label for="productCategory">Address 2</label>
            <input
              type="text"
              class="form-control"
              id="productCategroyDummy"
              placeholder="Enter second address"
              name="productCategroyDummy"
            >
          </div>
          <div class="form-group">
            <label for="productSeller">Country</label>
            <input
              type="text"
              class="form-control"
              id="productSellerDummy"
              placeholder="Enter country"
              name="productSellerDummy"
            >
          </div>
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label for="productRating">Postal code</label>
                <input
                  type="text"
                  class="form-control"
                  id="productRating"
                  placeholder="Enter postal code"
                >
              </div>
            </div>
          </div>
          <small
            id="emailHelp"
            class="form-text text-muted"
          >We'll never share your data with anyone else.</small>
          <br>
        </form>
      </div>
      <div class="col-sm-4">
        <cart-calculator ref="cartCalculator"></cart-calculator>
        <ul class="list-group mb-3">
          <router-link to="/products" class="btn btn-primary mt-2 text-white">Continue Shipping</router-link>
          <a
            href="javascript:;;"
            class="btn btn-success mt-2 text-white"
            @click="createShippingDetail"
          >Save & Pay</a>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapState, mapActions, mapMutations } from 'vuex'
import CartCalculator from './CartCalculator'
// eslint-disable-next-line no-unused-vars
import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import { errorToaster } from '../../shared/service/ErrorHandler.js'
export default {
  name: 'Checkout',
  components: { CartCalculator },
  data () {
    return {
      shippingDetail: {
        address1: '',
        address2: '',
        country: '',
        zipCode: '',
        shippingDate: '',
        products: [],
        userId: '',
        totalPrice: ''
      }
    }
  },
  methods: {
    createShippingDetail () {}
  }
}
</script>

<style lang="scss">
.cart-products {
  div {
    text-align: start;
  }
  #productCU {
    div {
      text-align: start;
    }
    button {
      text-align: center;
    }
  }
}
</style>
