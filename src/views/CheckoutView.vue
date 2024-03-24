<template>
  <div class="my-5 row justify-content-center">
    <form class="col-md-6" @submit.prevent="payOrder">
      <table class="table align-middle">
        <thead>
          <th>品名</th>
          <th>數量</th>
          <th>單價</th>
        </thead>
        ...
        </table>
      <div class="text-end" v-if="order.is_paid === false">
        <button type="submit" class="btn btn-danger">確認付款去</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      orderId: ''
    }
  },
  methods: {
    payOrder () {
      const url = `${VITE_URL}/v2/api/${VITE_PATH}/pay/${this.orderId}`
      axios.post(url).then(() => {
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
