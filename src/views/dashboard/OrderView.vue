<template>
    <h2>訂單列表</h2>
    <table class="table mt-4">
        <thead>
            <tr>
                <th>訂單編號</th>
                <th>購買時間</th>
                <th>Email</th>
                <th>購買款項</th>
                <th>應付金額</th>
                <th>是否付款</th>
                <th>編輯</th>
            </tr>
        </thead>
        <tbody>
            <template v-for="item in orders" :key="item.id">
                <tr v-if="orders.length" :class="{ 'text-secondary': !item.is_paid }">
                    <td>{{ item.id }}</td>
                    <td>{{ formatTimestamp(item.create_at) }}</td>
                    <td>{{ item.user.email }}</td>
                    <td>{{ item.total }}</td>
                    <td>{{ item.total }}</td>
                    <td v-if="item.is_paid"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg></td>
<td v-else><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
</svg></td>
                    <td>
                        <div class="btn-group">
                            <button class="btn btn-outline-primary btn-sm" type="button" @click="openModal(item)">
                                檢視
                            </button>
                            <button class="btn btn-outline-danger btn-sm" type="button"
                                @click="openDelOrderModal(item)">
                                刪除
                            </button>
                        </div>
                    </td>
                </tr>
            </template>
        </tbody>
    </table>
    <OrderModal ref="orderModal" :order="tempOrder" @update-paid="updatePaid" :format-timestamp="formatTimestamp" />
    <DelModal ref="delModal" :item="tempOrder" @del-item="delOrder" />
</template>

// AdminOrders.vue
<script>
import axios from 'axios'
import OrderModal from '@/components/OrderModal.vue'
import DelModal from '@/components/DelModal.vue'

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      orders: {},
      tempOrder: {},
      currentPage: 1
    }
  },
  components: {
    OrderModal,
    DelModal
  },
  methods: {
    getOrders (page) {
      const api = `${VITE_URL}/v2/api/${VITE_PATH}/admin/orders?page=${page}`
      axios.get(api).then((res) => {
        this.orders = res.data.orders
      }).catch((err) => {
        alert(err.response.data.message)
      })
    },
    openModal (item) {
      this.tempOrder = { ...item }
      const orderComponent = this.$refs.orderModal
      orderComponent.openModal()
    },
    updatePaid (item) {
      const api = `${VITE_URL}/v2/api/${VITE_PATH}/admin/order/${item.id}`
      const paid = {
        is_paid: item.is_paid
      }
      axios.put(api, { data: paid }).then(() => {
        const orderComponent = this.$refs.orderModal
        orderComponent.hideModal()

        this.getOrders(this.currentPage) // 重新取得訂單資料更新畫面
      }).catch((err) => {
        alert(err.response.data.message)
      })
    },
    openDelOrderModal (item) {
      this.tempOrder = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.openModal()
    },
    delOrder () {
      const url = `${VITE_URL}/v2/api/${VITE_PATH}/admin/order/${this.tempOrder.id}`
      axios.delete(url).then(() => {
        const delComponent = this.$refs.delModal
        delComponent.hideModal()

        this.getOrders(this.currentPage)
      }).catch((err) => {
        alert(err.response.data.message)
      })
    },
    formatTimestamp (timestamp) {
      const date = new Date(timestamp * 1000)
      const year = date.getFullYear()
      const month = (date.getMonth() + 1).toString().padStart(2, '0')
      const day = date.getDate().toString().padStart(2, '0')
      const hours = date.getHours().toString().padStart(2, '0')
      const minutes = date.getMinutes().toString().padStart(2, '0')
      const seconds = date.getSeconds().toString().padStart(2, '0')
      const milliseconds = date.getMilliseconds().toString().padStart(3, '0')
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`
    }
  },
  mounted () {
    this.getOrders(this.currentPage)
  }
}
</script>
