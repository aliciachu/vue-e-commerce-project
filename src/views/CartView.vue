<template>
  <div class="container">
    <div class="mt-3">
        <h3 class="mt-3 mb-4">購物車</h3>
        <div class="row">
          <div class="col-md-8">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" class="border-0 ps-0"></th>
                  <th scope="col" class="border-0 ps-0">品名</th>
                  <th scope="col" class="border-0">數量/單位</th>
                  <th scope="col" class="border-0">單價</th>
                  <th scope="col" class="border-0">總價</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="cart in carts.carts" :key="cart.id" class="border-bottom border-top">
                  <td class="border-0 align-middle">
                    <button type="button" class="btn btn-outline-danger btn-sm" :disabled="cart.id === status.delCartLoading"
                  @click="removeCartItem(cart.id)">
                  <i v-if="cart.id === status.delCartLoading" class="fas fa-spinner fa-pulse"></i>
                  x
                </button>
              </td>
                  <th scope="row" class="border-0 px-0 font-weight-normal py-4">
                    <img :src="cart.product.imageUrl" alt="" style="width: 72px; height: 72px; object-fit: cover;">
                    <p class="mb-0 fw-bold ms-3 d-inline-block">{{ cart.product.title }}</p>
                  </th>
                  <td class="border-0 align-middle" style="max-width: 160px;">
                    <div class="input-group pe-5">
                      <div class="input-group-prepend">
                        <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon1">
                          <i class="fas fa-minus"></i>
                        </button>
                      </div>
                      <div class="input-group input-group-sm">
                  <button type="button" class="btn btn-outline-primary" :disabled="cart.qty === 1"
                    @click="cart.qty--; changeCartQty(cart, cart.qty)">&nbsp;- </button>
                  <input min="1" type="number" class="form-control" v-model="cart.qty" readonly
                    @change="changeCartQty(cart, cart.qty)">
                  <span class="input-group-text" id="basic-addon2">{{ cart.product.unit }}</span>
                  <button type="button" class="btn btn-outline-primary"
                    @click="cart.qty++; changeCartQty(cart, cart.qty)"> +
                  </button>
                </div><div class="input-group-append">
                        <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon2">
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td class="border-0 align-middle"><p class="mb-0 ms-auto">NT${{ cart.product.price }}</p></td>
                  <td class="border-0 align-middle"><i class="fas fa-times"></i>NT${{ cart.total }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-md-4">
            <div class="border p-4 mb-4">
              <h4 class="fw-bold mb-4">訂單</h4>
              <table class="table text-muted border-bottom">
                <tbody>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">Subtotal</th>
                    <td class="text-end border-0 px-0 pt-4">NT${{carts.final_total}}</td>
                  </tr>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">Payment</th>
                    <td class="text-end border-0 px-0 pt-0 pb-4">ApplePay</td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex justify-content-between mt-4">
                <p class="mb-0 h4 fw-bold">Total</p>
                <p class="mb-0 h4 fw-bold">NT${{carts.final_total}}</p>
              </div>
              <!-- <RouterLink to="/Checkout" class="btn btn-dark w-100 mt-4">結帳</RouterLink> -->
            </div>
          </div>
        </div>
      </div>

    <!-- <div class="mt-4">
      <table class="table align-middle">
        <thead>
          <tr>
            <th></th>
            <th>品名</th>
            <th style="width: 150px">數量/單位</th>
            <th>單價</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="cart in carts.carts" :key="cart.id">
            <tr>
              <td>
                <button type="button" class="btn btn-outline-danger btn-sm" :disabled="cart.id === status.delCartLoading"
                  @click="removeCartItem(cart.id)">
                  <i v-if="cart.id === status.delCartLoading" class="fas fa-spinner fa-pulse"></i>
                  x
                </button>
              </td>
              <td>
                {{ cart.product.title }}
                <div class="text-success">
                  已套用優惠券
                </div>
              </td>
              <td>
                <div class="input-group input-group-sm">
                  <button type="button" class="btn btn-outline-primary" :disabled="cart.qty === 1"
                    @click="cart.qty--; changeCartQty(cart, cart.qty)">&nbsp;- </button>
                  <input min="1" type="number" class="form-control" v-model="cart.qty" readonly
                    @change="changeCartQty(cart, cart.qty)">
                  <span class="input-group-text" id="basic-addon2">{{ cart.product.unit }}</span>
                  <button type="button" class="btn btn-outline-primary"
                    @click="cart.qty++; changeCartQty(cart, cart.qty)"> +
                  </button>
                </div>
              </td>
              <td class="text-end">
                <small class="text-success">折扣價：</small>
                {{ cart.final_total }}
              </td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" class="text-end">總計</td>
            <td class="text-end">{{ }}</td>
          </tr>
          <tr>
            <td colspan="3" class="text-end text-success">折扣價</td>
            <td class="text-end text-success">{{ }}</td>
          </tr>
        </tfoot>
      </table>
    </div> -->
    <div class="my-5 row justify-content-center">
      <v-form ref="form" class="col-md-6" v-slot="{ errors }" @submit="createOrder">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <v-field id="email" name="email" type="email" class="form-control" :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email" rules="email|required" v-model="form.user.email"></v-field>
          <error-message name="email" class="invalid-feedback"></error-message>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <v-field id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
            placeholder="請輸入姓名" rules="required" v-model="form.user.name"></v-field>
          <error-message name="姓名" class="invalid-feedback"></error-message>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <v-field id="tel" name="電話" type="text" class="form-control" :class="{ 'is-invalid': errors['電話'] }"
            placeholder="請輸入電話" rule="required" v-model="form.user.tel"></v-field>
          <error-message name="電話" class="invalid-feedback"></error-message>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <v-field id="address" name="地址" type="text" class="form-control" :class="{ 'is-invalid': errors['地址'] }"
            placeholder="請輸入地址" rules="required" v-model="form.user.address"></v-field>
          <error-message name="地址" class="invalid-feedback"></error-message>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea name="" id="message" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
        </div>
        <div class="text-end">
          <button type="submit" class="btn btn-danger">送出訂單</button>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      status: {
        cartQtyLoading: '',
        delCartLoading: ''
      },
      carts: {},
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    getCart () {
      axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/cart`)
        .then(res => {
          console.log(res)
          this.carts = res.data.data
        })
    },
    changeCartQty (item, qty = 1) {
      const order = {
        product_id: item.product_id,
        qty
      }
      this.status.cartQtyLoading = item.id
      axios.put(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${item.id}`, { data: order })
        .then(res => {
          this.status.cartQtyLoading = ''
          this.getCart()
        })
    },
    removeCartItem (id) {
      this.status.delCartLoading = id
      axios.delete(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${id}`)
        .then(res => {
          this.status.delCartLoading = ''
          this.getCart()
        })
    },
    createOrder () {
      axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/order`, { data: this.form })
        .then(res => {
          this.$router.push(`/Checkout/${res.data.orderId}`)
          this.$refs.form.resetForm()
          this.form.message = ''
          this.getCart()
        })
    }
  },
  mounted () {
    this.getCart()
  }
}
</script>
