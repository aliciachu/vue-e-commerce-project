<template>
      <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <h3 class="fw-bold mb-4 pt-3">付款</h3>
        </div>
      </div>
      <div class="row flex-row-reverse justify-content-center pb-5">
        <div class="col-md-8">
          <div class="border p-4 mb-4">
            <div v-for="item in order.products" :key="item.id" class="d-flex">
              <img :src="item.product.imageUrl" :alt="item.product.title" class="me-2" style="width: 48px; height: 48px; object-fit: cover">
              <div class="w-100">
                <div class="d-flex justify-content-between">
                  <p class="mb-0 fw-bold">{{item.product.title}}</p>
                  <p class="mb-0">NT${{ item.total }}</p>
                </div>
                <p class="mb-0 fw-bold">x{{item.qty}}</p>
              </div>
            </div>
            <table class="table mt-4 border-top border-bottom text-muted">
              <tbody>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">Subtotal</th>
                  <td class="text-end border-0 px-0 pt-4">NT${{order.total}}</td>
                </tr>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">Payment</th>
                  <td class="text-end border-0 px-0 pt-0 pb-4">ApplePay</td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-between mt-4">
              <p class="mb-0 h4 fw-bold">Total</p>
              <p class="mb-0 h4 fw-bold">NT${{order.total}}</p>
            </div>
            <div class="col-md-6">
          <div class="d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center">
            <a @click.prevent="payOrder" class="btn btn-dark py-3 px-7">確認付款</a>
          </div>
        </div>
          </div>
        </div>

      </div>
    </div>
  <!-- <div class="my-5 row justify-content-center">
    <form class="col-md-6" @submit.prevent="payOrder">
      <table class="table align-middle">
        <thead>
          <th>品名</th>
          <th>數量</th>
          <th>單價</th>
        </thead>
        ...
        </table>{{ order }}
      <div class="text-end" v-if="order.is_paid === false">
        <button type="submit" class="btn btn-danger">確認付款去</button>
      </div>
    </form>
  </div> -->
</template>

<script>
import axios from 'axios'
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      orderId: '',
      order: {}
    }
  },
  methods: {
    getOrder () {
      const url = `${VITE_URL}/v2/api/${VITE_PATH}/order/${this.orderId}`
      axios.get(url).then((res) => {
        this.order = res.data.order
      })
    },
    payOrder () {
      const url = `${VITE_URL}/v2/api/${VITE_PATH}/pay/${this.orderId}`
      axios.post(url).then(() => {
        alert('付款成功')
        this.$router.push('/')
        this.getOrder()
      }).catch((err) => {
        alert(err.response.data.message)
      })
    }
  },
  created () {
    this.orderId = this.$route.params.orderId // 從路由取得訂單 id
    this.getOrder()
  }
}
</script>
