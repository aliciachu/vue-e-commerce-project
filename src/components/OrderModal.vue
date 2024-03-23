<template>
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true" ref="modal">
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content border-0">
                <div class="modal-header bg-dark text-white">
                    <h5 class="modal-title" id="exampleModalLabel">
                        <span>訂單細節</span>
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" v-if="Object.keys(tempOrder).length > 0">
                    <div class="container">
                        <div class="row">
                            <div class="col col-lg-5">
                                <table class="table">
                                    <tr>
                                        <th>訂單編號</th>
                                        <td>{{ tempOrder.id }}</td>
                                    </tr>
                                    <tr>
                                        <th>訂購人</th>
                                        <td>{{ tempOrder.user.name }}</td>
                                    </tr>
                                    <tr>
                                        <th>訂購人信箱</th>
                                        <td>{{ tempOrder.user.email }}</td>
                                    </tr>
                                    <tr>
                                        <th>訂單金額</th>
                                        <td>{{ tempOrder.total }}</td>
                                    </tr>
                                    <tr>
                                        <th>訂單日期</th>
                                        <td>{{ formatTimestamp(tempOrder.create_at) }}</td>
                                    </tr>
                                    <tr>
                                        <th>付款狀態</th>
                                        <td>
                                            <input type="checkbox" v-model="isPaid"
                                                @change="tempOrder.is_paid = isPaid">
                                            <label>{{ tempOrder.is_paid ? '已付款' : '未付款' }}</label>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <table class="table mt-4">
                        <thead>
                            <tr>
                                <th>品項</th>
                                <th>原價</th>
                                <th>售價</th>
                                <th>數量</th>
                                <th>小計</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in tempOrder.products" :key="item.id">
                                <td>{{ item.product.title }}</td>
                                <td>{{ item.product.origin_price }}</td>
                                <td>{{ item.product.price }}</td>
                                <td>{{ item.qty }}</td>
                                <td>{{ item.final_total }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                            取消
                        </button>
                        <button type="button" class="btn btn-primary" @click="$emit('update-paid', tempOrder)">
                            修改付款狀態
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin'

export default {
  props: {
    order: {
      type: Object,
      default () {
        return {}
      }
    },
    formatTimestamp: {
      type: Function
    }
  },
  data () {
    return {
      modal: '',
      tempOrder: {},
      isPaid: false
    }
  },
  mounted () {
    this.tempOrder = this.order
  },
  emits: ['update-paid'],
  mixins: [modalMixin],
  watch: {
    order () {
      this.tempOrder = this.order
    }
  }
}
</script>
